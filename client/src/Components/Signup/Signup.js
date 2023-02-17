import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== cPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        "localhost://5000/api/auth/users/register",
        {
          firstName: firstName,
          lastName: lastName,
          state: state,
          city: city,
          email: email,
          password: password,
        }
      );
      setSuccess(response.data.message);
    } catch (error) {}
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-heading">signup</div>
      {error}
      <div className="signup-body">
        <form
          action=""
          method="post"
          className="signup-form-wrapper"
          onSubmit={handleSignUp}
        >
          <div className="signup-rows">
            <label htmlFor="firstname">First name</label>
            <input
              type="text"
              placeholder="First name"
              id="firstname"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="signup-rows">
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              id="lastname"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="signup-rows">
            <label htmlFor="firstname">Email</label>
            <input type="email" placeholder="Email" id="email" />
          </div>
          {/* 
          <div className="signup-rows">
         
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
          </div> */}
          {/* <div className="signup-rows">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input type="date" id="dateOfBirth" />
          </div> */}
          {/* <div className="signup-rows">
            <label htmlFor="country">Country</label>
            <input type='text' id='country' placeholder="Country"/>
          </div> */}

          <div className="signup-rows">
            <label htmlFor="State">State</label>
            <input
              type="text"
              placeholder="State"
              value={(e) => setState(e.target.value)}
            />
          </div>

          <div className="signup-rows">
            <label htmlFor="city">City</label>
            <select name="" id="city">
              <option value="">City</option>
            </select>
          </div>

          {/* <div className="signup-rows">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="username" />
          </div> */}
          {/* <div className="signup-rows">
            <label htmlFor="dateOfBirth">Phone</label>
            <input type="tel" id="phone" placeholder="phone" />
          </div> */}
          <div className="signup-rows">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="Password"
              placeholder="password"
              value={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signup-rows">
            <label htmlFor="cPassword">Confirm password</label>
            <input
              type="password"
              id="cPassword"
              placeholder="Confirm password"
              value={(e) => setCPassword(e.target.value)}
            />
          </div>
          <div className="signup-rows">
            <label htmlFor="termsAndConditions">
              <input type="checkbox" id="termsAndConditions" required /> By
              signing up, you agree to our terms and conditions.
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
