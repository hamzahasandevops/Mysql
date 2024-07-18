import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import LoginValidation from "./LoginValidation";
import { useState } from "react";

export default function Login() {
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleInput = (e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(LoginValidation(values));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-primary border-2 "
      style={{ height: "300px" }}
    >
      <div className="bg-white p-3 rounded  ">
        <form action="" className="border-2" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={handleInput}
              name="email"
            />
            <div>
              {errors.email && (
                <span className="text=danger">{errors.email}</span>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              {" "}
              <strong>Password</strong>
            </label>
            <input
              type="Password"
              placeholder="Enter your Password"
              onChange={handleInput}
              name="password"
            />
            <div>
              {errors.password && (
                <span className="text=danger">{errors.password}</span>
              )}
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100 rounded">
            LogIn
          </button>
          <p>You are agree to terms and condtitions and policies</p>
          <Link to="/signup" className="btn btn-default border w-100 bg-light">
            Create account
          </Link>
        </form>
      </div>
    </div>
  );
}
