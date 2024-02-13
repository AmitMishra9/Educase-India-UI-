import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login button clicked!");
  };

  return (
    <div className="login-form">
      <Link to="/" className="back_button">
        Back
      </Link>
      <h1>Sigin to your PopX account</h1>
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec justo
        in dui varius aliquet.
      </p>

      <fieldset>
        <legend>Email Address</legend>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <legend>Password</legend>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </fieldset>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
