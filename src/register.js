import { useRef, useState, useEffect } from "react";
import "./App.css";
import axios from './axios';
const REGISTER_URL = '/register';

/**
 * register account page
 * 
 */
const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [staffcode, setStaff] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    
/**
 * update text field to be used
 * 
 */
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, staffcode])

    const handleSubmit = async (e) => {
        e.preventDefault();
        /**
 * notify the user of their input values
 * 
 */
        alert('You have input in '+[user]+' as username');
        alert('You have input in '+[pwd]+' as password');
        alert('You have input in '+[staffcode]+' as staffcode');
        alert('Your registration request is now sent to server for processing');
      
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd, staffcode}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            setSuccess(true);
         
            setUser('');
            setPwd('');
            setStaff('');
          
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                     <div className="blacktext4">
                  <br></br>
                    <h1>Thank you for making an account! You may now login at the login!</h1>
                    </div>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <div className="blacktext4">
                    <h1>Register</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="loginstuff">
                        <div className="blacktext1">
                        <label htmlFor="username">
                            Username:
                         
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-describedby="uidnote"
                        />
                    </div>
                    <div className="blacktext2">
                        <label htmlFor="password">
                            Password:
                           
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                    
                            aria-describedby="pwdnote"
                        />
                   </div>
                   <div className="blacktext5">
                  <label htmlFor="staffcode">
                            Staff code:
                         
                        </label>
                        <input
                            type="text"
                            id="staffcode"
                            autoComplete="off"
                            onChange={(e) => setStaff(e.target.value)}
                            value={staffcode}
                            required
                            aria-describedby="uidnote"
                        />



                       
                       
<div className="blacktext6">
</div>
                        <button>Sign Up</button>
                        </div>
                        </div>
                    </form>
                    <p>
                      
                        <span className="line">
                    
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Register