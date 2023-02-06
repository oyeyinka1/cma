import React from "react";
import "./Signup.css";
import {Link} from "react-router-dom";
const Signup = () => {
  return (
    <div className="signup-wrapper">
      <div className="signup-heading">signup</div>
      <div className="signup-body">
        <form action="" method="post" className="signup-form-wrapper">
          <div className="signup-rows">
            <label htmlFor="firstname">First name</label>
            <input type="text" placeholder="First name" id="firstname" />
          </div>
          <div className="signup-rows">
            <label htmlFor="lastname">Last name</label>
            <input type="text" placeholder="Last name" id="lastname" />
          </div>

          <div className="signup-rows">
            <label htmlFor="firstname">Email</label>
            <input type="email" placeholder="Email/username" id="email" />
          </div>

          <div className="signup-rows">
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
          <div className="signup-rows">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input type="date" id="dateOfBirth" />
          </div>
          <div className="signup-rows">
            <label htmlFor="country">Country</label>
            <select name="" id="country">
              <option value="">Country</option>
            </select>
          </div>

          <div className="signup-rows">
            <label htmlFor="state">State</label>
            <select name="" id="state">
              <option value="">State</option>
            </select>
          </div>

          <div className="signup-rows">
            <label htmlFor="country">city</label>
            <select name="" id="city">
              <option value="">City</option>
            </select>
          </div>

          <div className="signup-rows">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="username" />
          </div>
          <div className="signup-rows">
            <label htmlFor="dateOfBirth">Phone</label>
            <input type="tel" id="phone" placeholder="phone" />
          </div>
          <div className="signup-rows">
            <label htmlFor="password">Password</label>
            <input type="password" id="Password" placeholder="password" />
          </div>
          <div className="signup-rows">
            <label htmlFor="cPassword">Confirm password</label>
            <input
              type="password"
              id="cPassword"
              placeholder="Confirm password"
            />
          </div>
          <div className="signup-rows">
            <label htmlFor="termsAndConditions">
              <input type="checkbox" id="termsAndConditions" /> By signing up,
              you agree to our terms and conditions
            </label>
          </div>

          <div className="signup-rows">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>

      <div className="signup-footer">
        Already have an account<Link to="/login">Login here</Link>
      </div>
    </div>
  );
};

export default Signup;
