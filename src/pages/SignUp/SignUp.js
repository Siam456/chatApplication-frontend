import React, { useState, useContext } from "react";
import "./style.css";
import axios from "axios";
import { Auth } from "../../component/nav/Navbar";

export default function SignUp() {
  const [auth, setAuth] = useContext(Auth);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addUser = async () => {
    const errorPlaceHolder = document.querySelectorAll("span.error-msg");
    for (let i = 0; i < errorPlaceHolder.length; i++) {
      errorPlaceHolder[i].textContent = "";
    }

    const inputError = document.querySelectorAll("input");
    for (let i = 0; i < inputError.length; i++) {
      inputError[i].classList.remove("ei-error");
    }
    try {
      const response = await axios.post("/user", userInfo);
      if (response) {
        console.log(response);
        // setAuth(true);
      }
    } catch (error) {
      console.log(Object.keys(error.response.data.errors));
      Object.keys(error.response.data.errors).forEach((errorname) => {
        console.log(errorname);
        const errorPlaceholder = document.getElementById(`error-${errorname}`);
        errorPlaceholder.textContent =
          error.response.data.errors[errorname].msg;

        //input error
        const inputError = document.getElementById(`${errorname}`);
        inputError.classList.add("ei-error");
      });
    }
  };
  //post to server to singup
  const submitHandler = (e) => {
    e.preventDefault();
    addUser();
  };
  return (
    <div className="form-container sign-up-container">
      <form className="loginForm" onSubmit={submitHandler}>
        <h1>Create Account</h1>
        <span>
          <br></br>
        </span>
        <input
          className="form-controll"
          id="name"
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Name"
        />
        <span id="error-name" className="error-msg"></span>
        <input
          className="form-controll"
          id="email"
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="Email"
        />
        <span id="error-email" className="error-msg"></span>
        <input
          className="form-controll"
          id="phone"
          type="text"
          onChange={handleChange}
          name="phone"
          placeholder="Phone"
        />
        <span id="error-phone" className="error-msg"></span>
        <input
          className="form-controll"
          id="password"
          type="password"
          onChange={handleChange}
          name="password"
          placeholder="Password"
        />
        <span id="error-password" className="error-msg"></span> <br></br>
        <button className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
}
