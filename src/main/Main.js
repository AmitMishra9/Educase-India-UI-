// Main.js
import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <div className="main_container">
      <h1>Welcome to popX</h1>
      <span>Lorem ipsum dolor sit amet, constsectetur adipiscing elit,</span>
      <br></br>
      <div className="buttons">
        <Link  to="/register">
          <button className="CreateAccount">Create Account</button>
        </Link>
        <Link  to="/login">
          <button className="Login">Already Registered? Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Main;
