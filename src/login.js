
import  { useRef, useState, useEffect, useContext, Component } from "react";
import useAuth from './hooks/useAuth';
import "./App.css";
import axios from './axios';
const LOGIN_URL = '/auth';
/**
 * Login page
 * 
 */
const Login = () => {
/**
 * Variables
 * 
 */
    const { setAuth } = useAuth();
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
/**
 * Update text fields based on user and password, so it can be used to be sent as a body to database
 * 
 */
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
/**
 *Post with axios to the database and compare the username and password
 * 
 */
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
/**
 * Get accesstoken from the backend
 * 
 */
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                     <div className="blacktext4">
                      
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                    </div>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <div className="blacktext4">
                    <h1>Sign In</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="loginstuff">
                          <div className="blacktext1">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
</div>
<div className="blacktext2">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                       <div className="blacktext3">
                       </div>
                        <button>Sign In</button>
                        </div>
                        </div>

                        
                    </form>
                    
                </section>
            )}
        </>
    )
}

export default Login