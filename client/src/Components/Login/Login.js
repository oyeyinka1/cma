import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-heading">Login</div>
      <div className="login-body">
        <form action="" method="post" className="login-form-wrapper">

          <div className="login-rows">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email/username" id="email" />
          </div>

        
          <div className="login-rows">
            <label htmlFor="password">Password</label>
            <input type="password" id="Password" placeholder="password" />
          </div>
         
          <div className="login-rows">
            <label htmlFor="termsAndConditions">
              <input type="checkbox" id="termsAndConditions" />Agree to our terms and conditions
            </label>
          </div>

          <div className="login-rows">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>

      <div className="login-footer">
        Don't have an account?&nbsp;<Link to="/signup">Create account</Link>
      </div>
    </div>
  );
}

export default Login;
