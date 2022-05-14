
import './App.css';
import React, { Component } from "react";




class register extends Component {
  render() {
    return (
<div>

<div class="registerstuff">
<div class="registerform">
<form>
  
    <div class="blacktext1">Username</div>
	<br></br>
	
    <input type="text" name="Username" />
	<br></br>
<div class="blacktext2">Password</div>
	<br></br>
   <input type="text" name="Password" />
   	<br></br>
   <div class="blacktext2">Email</div>
	<br></br>
   <input type="text" name="Email" />
   <br></br>
   <div class="blacktext2">Staff code (optional)	</div>
	<br></br>
   <input type="text" name="Staff code" />
   <br></br>
  <input type="submit" value="Submit" />
  

</form>
</div>
</div>
</div>


 );
  }
}



export default register;
