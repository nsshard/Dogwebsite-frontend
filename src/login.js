
import  { useRef, useState, useEffect, useContext, Component } from "react";
import AuthContext from "./backend/context/AuthProvider"; 
import "./App.css";
import axios from './axios';
const LOGIN_URL = '/auth';
//const axios = require('axios').default;
//Security stuff, declaring salt and SHA256. 
//var salt = '2irjv34vawirj2jwjvwjreka';
//var SHA256 = require("crypto-js/sha256");
// Add salt, then HASH it using SHA256.
// Looks for the target with the user typed name
const Login = () => {
  const { setAuth } = useContext(AuthContext);
const userRef = useRef();
const errRef = useRef();
const [user, setUser] = useState('');
const [pwd, setPwd] = useState('');
const [errMsg, setErrMsg] = useState('');
const [success, setSuccess] = useState(false);

useEffect(() => {
userRef.current.focus();
}, [])

useEffect(() => {
  setErrMsg('');
}, [user, pwd])

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(LOGIN_URL, JSON.stringify({user, pwd}), {
      headers : {'Content-Type': 'applications/json'}, 
      withCredentials: true
    }
    );
const accessToken = response?.data.accessToken;
const roles = response?.data?.roles;
setAuth({user, pwd, roles, accessToken})
    setUser('');
    setPwd('');
    setSuccess(true);
  } catch (err) {
    if (!err?.response) {
      setErrMsg('No response from server');
    } else if (err.response?.status === 400) {
      setErrMsg('Missing username or password')
    } else if (err.response?.status === 401) {
      setErrMsg('unauthorized access');
    } else {
      setErrMsg('login failed');
    }
    errRef.current.focus();
    }
  }


    return (
      <>

{success ? (
  <section>
  <h1>You are logged in</h1>

</section>

) : (

      <section> 
      <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1> Sign in</h1>
      <form onSubmit={handleSubmit}>
    
      <label htmlFor="USERNAME">Username</label>
      <input 
      type="text" 
      id="USERNAME"
      ref={userRef}
      autoComplete="off"
      onChange={(e) => setUser(e.target.value)}
      value={user}
      required
      /> 
 <label htmlFor="PASSWORD">Password</label>
      <input 
      type="PASSWORD" 
      id="PASSWORD"
      onChange={(e) => setPwd(e.target.value)}
      value={pwd}
      required
      /> 
      <button>Sign In</button>
      </form>
     <p>
       <span className="line"></span>
       <a href="#">Sign up</a>
     </p>



    
      </section>
)}
</>
    )
  }

export default Login