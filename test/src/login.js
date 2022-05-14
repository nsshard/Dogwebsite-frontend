
import './App.css';
import React, { Component } from "react";




class login extends Component {
  render() {
    return (
<div>

<div class="loginstuff">
<div class="loginform">
<form>
  
    <div class="blacktext1">Username</div>
	<br></br>
	
    <input type="text" name="Username" />
	<br></br>
<div class="blacktext2">Password</div>
	<br></br>
   <input type="text" name="Password" />
   
   <br></br>
  <input type="submit" value="Submit" />
  

</form>
</div>
</div>
</div>


 );
  }
}



export default login;
