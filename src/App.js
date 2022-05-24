import "./App.css";
import React, { Component, useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./homepage";
import Browsedogs from "./browsedogs";
import Login from "./login";
import axios from "./axios";
import Register from "./register";
import Admin from "./Admin";
import Adminpanel from "./adminpanel";
import Modifydogs from "./modifydogs";
import Comments from "./comments";
import Deletedogs from "./deletedogs";
const URL = "http://localhost:3000/logout";
const URLname = "http://localhost:3000/userinfo";
var token = '4868f80777e4c7a3c766e61bfb0c3cf163bfcd3a393cccfe159436e13fd6d825f20d62bafc54380889107d2d16ba31eb470363d74943ae384fc60895abc6d4bd'; 

//handle button submit, this button is to handle logout button with axios which sends request-cookie, allowing it to be wiped
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
        </Routes>
      </Router>
    );
  }
}

export default App;
