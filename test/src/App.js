
import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import homepage from "./homepage";
import browsedogs from "./browsedogs";
import login from "./homepage";
import register from "./register";

class App extends Component {
 render() {
    return (
 <Router>

<div>

<div class="homepagestuff">
<div class="buttonrows">
<div class="indexbut">
<button type="button" class="btn btn-secondary btn-lg"> <Link to={'/homepage'} className="nav-link">Homepage</Link></button>
</div>

<div class="browsebut">
<button type="button" class="btn btn-secondary btn-lg"><Link to={'/browsedogs'} className="nav-link">Browse dogs</Link></button>
</div>

<div class="loginbut">
<button type="button" class="btn btn-secondary btn-lg"><Link to={'/login'} className="nav-link">Login</Link></button>
</div>

<div class="registerbut">
<button type="button" class="btn btn-secondary btn-lg"><Link to={'/register'} className="nav-link">Register</Link></button>
</div>
</div>

 <Routes>
  <Route exact path="/homepage" component={homepage}/>

            <Route path="/browsedogs" component={browsedogs}/>
            <Route path="/login" component={login}/>
 <Route path="/register" component={register}/>
 </Routes>


</div>
</div>
 </Router>
 );
  }
}



export default App;
