
import './App.css';
import React, { Component } from "react";




class login extends Component {
  render() {
    return (
<div>

<div className="loginstuff">
<div className="loginform">
<form>
  
    <div className="blacktext1">Username <input type="text" name="Username" />

	<br></br>
<div className="blacktext2">Password</div>
	<br></br>
   <input type="text" name="Password" />
   
   <br></br>

  <input type="submit" value="Submit" />
  
</div>
</form>
</div>
</div>
</div>


 );
  }
}



export default login;
