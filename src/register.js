import './App.css';
import React, { Component } from "react";

var salt = '2irjv34vawirj2jwjvwjreka';
var SHA256 = require("crypto-js/sha256");

  function validate() {
var USERNAME = document.getElementById("USERNAME").value;
var PASSWORD = document.getElementById("PASSWORD").value;
var EMAIL = document.getElementById("EMAIL").value;
var STAFFCODE = document.getElementById("STAFFCODE").value;
}

class register extends Component {
  render() {
    return (




<div>

<div className="registerstuff">
<div className="registerform">
<form>
  
    <div className="blacktext1">Username <input type="USERNAME" name="USERNAME" />
	<br></br>
	
  
	
<div className="blacktext2">Password</div>
	<br></br>
   <input type="text" name="PASSWORD" />
   	<br></br>
   <div className="blacktext2">Email</div>
	<br></br>
   <input type="text" name="EMAIL" />
   <br></br>
   <div className="blacktext2">Staff code (optional)</div>
	<br></br>
   <input type="text" name="STAFFCODE" />
   <br></br>
  <input type="submit" value="Submit" onClick={validate} />
  
</div>
</form>
</div>
</div>
</div>


 );
  }
}



export default register;