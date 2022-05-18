import React, { Component } from "react";

import "./App.css";


//Security stuff, declaring salt and SHA256. 

var salt = '2irjv34vawirj2jwjvwjreka';
var SHA256 = require("crypto-js/sha256");
// Add salt, then HASH it using SHA256.


// Looks for the target with the user typed name
class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
  var  Username = (e.target.USERNAME.value)
  var  encryptedPASSWORD = SHA256((e.target.PASSWORD.value)+salt);
  const accountform = {
    USERNAME:{Username},
    PASSWORD:{encryptedPASSWORD}
  };

  var Usernamecheck = JSON.stringify(accountform);




    
  };

  handleClick = e => {
    e.preventDefault();

  
  };

  render() {
    return (
      
      <div className="Login">
       <div className="loginstuff">
          <div className="loginform">
        <form className="form" onSubmit={this.handleSubmit}>
        <div className="blacktext1">
        
        Username
        
        </div>
        
        <div className="blacktext2">
        
    Password
        
        </div>
        <div className="form1">
            <input type="USERNAME" name="USERNAME" placeholder="Enter your name" />
            
            </div>
         
          <div className="form2">
            <input type="PASSWORD" name="PASSWORD" />
            </div>
            <div className="send">
          <button className="primary">Submit</button>
          </div>
        </form>
       
        </div>
        </div>
      </div>
    );
  }
}

export default Login;
