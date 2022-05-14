import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import homepage from "./homepage";
import browsedogs from "./browsedogs";
import login from "./homepage";
import register from "./register";

class App extends Component {
  render() {
    return (
      <Router>
       
       <div className="homepagestuff">
          <div className="buttonrows">
            <div className="indexbut">
              <button type="button"  className="btn btn-secondary btn-lg">
                <Link to={"/homepage"} className="nav-link">
                  Homepage
                </Link>
              </button>
            </div>

            <div className="browsebut">
              <button type="button"  className="btn btn-secondary btn-lg">
                <Link to={"/browsedogs"} className="nav-link">
                  Browse dogs
                </Link>
              </button>
            </div>

            <div className="loginbut">
              <button type="button" className="btn btn-secondary btn-lg">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </button>
            </div>

            <div className="registerbut">
              <button type="button" className="btn btn-secondary btn-lg">
                <Link to={"/register"} className="nav-link">
                  Register
                </Link>
              </button>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/homepage" component={homepage} />
          <Route path="/browsedogs" component={browsedogs} />
          <Route path="/login" component={login} />
          <Route path="/register" component={register} />
        </Routes>
      </Router>
    );
  }
}

export default App;
