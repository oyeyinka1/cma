import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-heading">login</div>
      <div className="login-body">
        <form action="" method="post" className="login-form-wrapper">

          <div className="login-rows">
            <label htmlFor="firstname">Email</label>
            <input type="email" placeholder="Email/username" id="email" />
          </div>

          <div className="login-rows">
            <label htmlFor="password">Password</label>
            <input type="password" id="Password" placeholder="password" />
          </div>

   

          <div className="login-rows">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>

      <div className="signup-footer">
        Don't have an account?&nbsp;<Link to="/signup">Create account</Link>
      </div>
    </div>
  );
};

export default Login;
