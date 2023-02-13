import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const navigate = useNavigate();
  
  const [error, setError] = useState();
  const[emailError, setEmailError]= useState();
  const[passwordError, setPasswordError]= useState();

  
  const HandleLogin = (e) => {
    e.preventDefault();
    console.log("starting login---------");
    
    //validation
    console.log(`Email:${email}`);
    console.log(`Password:${password}`);
    
    // authentication
    //fake user details provided by server
    const userDetails = {
      id: 2,
      email: "michael@gmail.com",
      password: "mike",
    };
    
    // if credentials match
    if (email === userDetails.email && password === userDetails.password) {
      //redirect to profile page
      navigate(`/profile/${userDetails.id}`);
    } else {
        email === "" ? setEmailError("field required") : setEmailError("");
        email === "" ? setPasswordError("field required") : setPasswordError("");
      setError("Incorrect details");
      //if credentials dont match, redirect to login page
      navigate(`/login`);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-heading">Login</div>
      <div className="login-body">
        <span style={{ color: "red", fontSize: "15px" }}>{error}</span>
        <form
          action=""
          method="post"
          className="login-form-wrapper"
          onSubmit={HandleLogin}
        >
          <div className="login-rows">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email/username"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <span style={{ color: "red", fontSize: "15px" }}>{emailError}</span>

          <div className="login-rows">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="Password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <span style={{ color: "red", fontSize: "15px" }}>{passwordError}</span>
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
};

export default Login;
