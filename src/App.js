import logo from './logo.svg';
import './App.css';


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



<div class="indexbut">
<button type="button"  onclick="indexpage()" class="btn btn-secondary btn-lg">Homepage</button>
</div>

<div class="browsebut">
<button type="button"  onclick="browsepage()" class="btn btn-secondary btn-lg">Browse dogs</button>
</div>

<div class="loginbut">
<button type="button"  onclick="login()" class="btn btn-secondary btn-lg">Login</button>
</div>

<div class="registerbut">
<button type="button"  onclick="register()" class="btn btn-secondary btn-lg">Register</button>
</div>



      </header>
    </div>
  );
}

export default App;
