import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./homepage";
import Browsedogs from "./browsedogs";
import Login from "./login";
import Register from "./register";
import Admin from "./Admin";
import Adminpanel from "./adminpanel";
import Modifydogs from "./modifydogs";
import Deletedogs from "./deletedogs";
const handleRefreshToken = "./backend/controllers/refreshTokenController";


class App extends Component {
  render() {
    return (


      <Router>


       <div className="logged"> <h2> You are locked in as {handleRefreshToken}</h2></div>
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
            <div className="adminpanel">
              <button type="button" className="btn btn-light btn-lg active">
                <Link to={"/adminpanel"} className="nav-link">
                Add dog
                </Link>
              </button>
            </div>
            <div className="modifydogbut">
              <button type="button" className="btn btn-light btn-lg active">
                <Link to={"/modifydogs"} className="nav-link">
                  Modify dogs
                </Link>
              </button>
            </div>
            <div className="deletedogbut">
              <button type="button" className="btn btn-light btn-lg active">
                <Link to={"/deletedogs"} className="nav-link">
                  Delete dogs
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
          <Route path="/adminpanel" element={<Adminpanel/>} />
          <Route path="/modifydogs" element={<Modifydogs/>} />
          <Route path="/deletedogs" element={<Deletedogs/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
