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
            <label htmlFor="firstname">First name</label>
            <input type="text" placeholder="First name" id="firstname" />
          </div>
          <div className="login-rows">
            <label htmlFor="lastname">Last name</label>
            <input type="text" placeholder="Last name" id="lastname" />
          </div>
          <div className="login-rows">
            {/* <label htmlFor="gender">Gender</label> */}
            <span>
              Gender:
              <label htmlFor="male">
                <input type="radio" name="gender" id="male" />
                Male
              </label>
              <label htmlFor="female">
                <input type="radio" name="gender" id="female" />
                Female
              </label>
            </span>
          </div>
          <div className="login-rows">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input type="date" id="dateOfBirth" />
          </div>
          <div className="login-rows">
            <label htmlFor="country">Country</label>
            <select name="" id="country">
              <option value="">Country</option>
            </select>
          </div>

          <div className="login-rows">
            <label htmlFor="state">State</label>
            <select name="" id="state">
              <option value="">State</option>
            </select>
          </div>

          <div className="login-rows">
            <label htmlFor="country">city</label>
            <select name="" id="city">
              <option value="">City</option>
            </select>
          </div>

          <div className="login-rows">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="username" />
          </div>
          <div className="login-rows">
            <label htmlFor="dateOfBirth">Phone</label>
            <input type="tel" id="phone" placeholder="phone" />
          </div>
          <div className="login-rows">
            <label htmlFor="password">Password</label>
            <input type="password" id="Password" placeholder="password" />
          </div>
          <div className="login-rows">
            <label htmlFor="cPassword">Confirm password</label>
            <input
              type="password"
              id="cPassword"
              placeholder="Confirm password"
            />
          </div>
          <div className="login-rows">
            <label htmlFor="termsAndConditions">
              <input type="checkbox" id="termsAndConditions" /> By signing up,
              you agree to our terms and conditions
            </label>
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
