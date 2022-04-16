import axios from "axios";
import React, { useState, useContext } from "react";
import SignUp from "../SignUp/SignUp";
import "./style.css";
import { Auth } from "../../component/nav/Navbar";

export default function Login() {
  const [auth, setAuth] = useContext(Auth);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;

    setLoginInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const checkLogin = async () => {
    try {
      const response = await axios.post("/login", loginInfo);
      if (response) {
        console.log(response);
        setAuth(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    checkLogin();
  };
  return (
    <>
      <div className="container" id="container">
        <div>
          <SignUp />
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={submitHandler}>
            <h1>Sign in</h1>

            <span>
              <br></br>
            </span>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
            <p>Forgot your password?</p>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => {
                  const container = document.getElementById("container");
                  container.classList.remove("right-panel-active");
                }}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => {
                  const container = document.getElementById("container");
                  container.classList.add("right-panel-active");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
