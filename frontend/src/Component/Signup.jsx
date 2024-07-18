import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginValidation from "./SignUpValidation";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(LoginValidation(values));
    if (errors.name === "" && errors.email === "") {
      axios
        .post("http://localhost:8080/signup", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  console.log(values);
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center bg-primary border-2 "
        style={{ height: "300px" }}
      >
        <div className="bg-white p-3 rounded  ">
          <h2 className="mb-3">SignIn:</h2>
          <form action="" className="border-2" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                onChange={handleInput}
              />
              <div>
                {errors.name && (
                  <span className="text=danger">{errors.name}</span>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="name">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                onChange={handleInput}
              />
              <div>
                {errors.email && (
                  <span className="text=danger">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="Password"
                placeholder="Enter your Password"
                name="password"
                onChange={handleInput}
              />
              <div>
                {errors.password && (
                  <span className="text=danger">{errors.password}</span>
                )}
              </div>
            </div>
            <button type="submit" className="btn btn-success w-100 rounded">
              SignUp
            </button>
            <p>You are agree to terms and condtitions and policies</p>
            <Link to="/" className="btn btn-default border w-100 bg-light">
              LogIn
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
