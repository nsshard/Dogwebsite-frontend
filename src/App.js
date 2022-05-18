import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Homepage from "./homepage";
import Browsedogs from "./browsedogs";
import Login from "./login";
import Register from "./register";

   



class App extends Component {
  render() {
    return (
      <Router>
       
       <div className="homepagestuff">
          <div className="buttonrows">
            <div className="indexbut">
              <button type="button"  className="btn btn-light btn-lg active">
                <Link to={"/homepage"} className="nav-link">
                  Homepage
                </Link>
              </button>
            </div>

            <div className="browsebut">
              <button type="button"  className="btn btn-light btn-lg active">
                <Link to={"/browsedogs"} className="nav-link">
                  Browse dogs
                </Link>
              </button>
            </div>

            <div className="loginbut">
              <button type="button" className="btn btn-light btn-lg active">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </button>
            </div>

            <div className="registerbut">
              <button type="button" className="btn btn-light btn-lg active">
                <Link to={"/register"} className="nav-link">
                  Register
                </Link>
              </button>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/browsedogs" element={<Browsedogs/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
