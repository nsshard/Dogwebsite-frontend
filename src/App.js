import "./App.css";
import React, { Component, useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./homepage";
import Browsedogs from "./browsedogs";
import Login from "./login";
import axios from "./axios";
import Register from "./register";
import Adminpanel from "./adminpanel";
import Modifydogs from "./modifydogs";
import Comments from "./comments";
import Deletedogs from "./deletedogs";
import Managemsg from "./managemsg";
const URL = "http://localhost:3000/logout";

/**
 * Handles submit, in this case, it is used for the logout function.
 * 
 */
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      const response = await axios.get(
        URL, {
          withCredentials: true 
        });
        alert("You are logged out! Cookies are cleared! ");

  }

  
 catch (err) {
  if (err.response.status === 500) {
    console.log("server error");
  } else {
    console.log("other error");
  }
 }
}





 /**
 * Main component to display the top row of buttons
 * 
 */

class App extends Component {
  
  render() {
    return (


      <Router>


       <div className="homepagestuff">
          <div className="buttonrows">
          <form>
            
                    <div className="logoutbutton">
                        <button type="button"  className="btn btn-dark btn active" onClick={handleSubmit}>Logout</button>
                        </div>
                        </form>

            <div className="indexbut">
              <button type="button"  className="btn btn-light btn active">
                <Link to={"/homepage"} className="nav-link">
                  Homepage
                </Link>
              </button>
            </div>

            <div className="browsebut">
              <button type="button"  className="btn btn-light btn active">
                <Link to={"/browsedogs"} className="nav-link">
                  Browse dogs
                </Link>
              </button>
            </div>


            <div className="loginbut">
              <button type="button" className="btn btn-light btn active">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </button>
            </div>
            <div className="commentbut">
              <button type="button"  className="btn btn-light btn active">
                <Link to={"/comments"} className="nav-link">
                  Comments
                </Link>
              </button>
            </div>

            <div className="registerbut">
              <button type="button" className="btn btn-light btn active">
                <Link to={"/register"} className="nav-link">
                  Register
                </Link>
              </button>
            </div>
            <div className="adminpanel">
              <button type="button" className="btn btn-light btn active">
                <Link to={"/adminpanel"} className="nav-link">
                Add dog
                </Link>
              </button>
            </div>
            <div className="modifydogbut">
              <button type="button" className="btn btn-light btn active">
                <Link to={"/modifydogs"} className="nav-link">
                  Modify dogs
                </Link>
              </button>
            </div>
            <div className="deletedogbut">
              <button type="button" className="btn btn-light btn active">
                <Link to={"/deletedogs"} className="nav-link">
                  Delete dogs
                </Link>
              </button>
              </div>
              <div className="managemsgbutton">
              <button type="button" className="btn btn-light btn active">
                <Link to={"/managemsg"} className="nav-link">
                  Manage msgs
                </Link>
              </button>
            

              
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/browsedogs" element={<Browsedogs/>} />
          <Route path="/comments" element={<Comments/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/adminpanel" element={<Adminpanel/>} />
          <Route path="/modifydogs" element={<Modifydogs/>} />
          <Route path="/deletedogs" element={<Deletedogs/>} />
          <Route path="/managemsg" element={<Managemsg/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
