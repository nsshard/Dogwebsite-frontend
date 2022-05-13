import logo from './logo.svg';
import './App.css';

window.onload = function () {
indexpage()
};

function indexpage()
{
	document.getElementsByClassName('homepagestuff')[0].style.display = 'block'
		document.getElementsByClassName('loginstuff')[0].style.display = 'none'
	document.getElementsByClassName('browsedogsstuff')[0].style.display = 'none'
	document.getElementsByClassName('registerstuff')[0].style.display = 'none'
}

function browsepage()
{
	document.getElementsByClassName('homepagestuff')[0].style.display = 'none'
	document.getElementsByClassName('loginstuff')[0].style.display = 'none'
	document.getElementsByClassName('browsedogsstuff')[0].style.display = 'block'
	document.getElementsByClassName('registerstuff')[0].style.display = 'none'
}

function loginpage()
{
	document.getElementsByClassName('homepagestuff')[0].style.display = 'none'
		document.getElementsByClassName('loginstuff')[0].style.display = 'block'
	document.getElementsByClassName('browsedogsstuff')[0].style.display = 'none'
	document.getElementsByClassName('registerstuff')[0].style.display = 'none'
}

function registerpage()
{
	document.getElementsByClassName('homepagestuff')[0].style.display = 'none'
	document.getElementsByClassName('browsedogsstuff')[0].style.display = 'none'
	document.getElementsByClassName('loginstuff')[0].style.display = 'none'
	document.getElementsByClassName('registerstuff')[0].style.display = 'block'
}



function App() {

  return (
    <div className="App">
      <header className="App-header">
     
	
		



 




<div class="homepagestuff">

<div class="floattext1">
WELCOME!
</div>

<div class="floattext2">
The Canine Shelter of Hong Kong was formed in 1999, and our mission is formed on the basis that animals should receive the best welfare from our society, that's why we formed THE CANINE SHELTER. Here, you can browse our aavilable dogs and learn the information of each animal, and in which they are up to adoption! 
</div>

<img src="indexdog.jpg"> 
</img>
</div>




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






<div class="indexbut">
<button type="button"  class="btn btn-secondary btn-lg" onClick={indexpage}>Homepage</button>
</div>

<div class="browsebut">
<button type="button" class="btn btn-secondary btn-lg" onClick={browsepage}>Browse dogs</button>
</div>

<div class="loginbut">
<button type="button" class="btn btn-secondary btn-lg" onClick={loginpage}>Login</button>
</div>

<div class="registerbut">
<button type="button" class="btn btn-secondary btn-lg" onClick={registerpage}>Register</button>
</div>





      </header>
    </div>
	
  );
  
}

export default App;
