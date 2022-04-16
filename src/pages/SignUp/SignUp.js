import React from "react";
import "./style.css";

export default function SignUp() {
  return (
    <div className="form-container sign-up-container">
      <form action="#">
        <h1>Create Account</h1>

        <span>
          <br></br>
        </span>

        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
}
