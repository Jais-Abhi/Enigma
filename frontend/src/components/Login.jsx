import React, { useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'; // ✔️ This is the correct source

import { BaseUrl } from "../utils/constant";
import axios from "axios";
import { addUserToStore } from "../slices/userSlice";

const Login = () => {
  const [IsLoginInForm, setIsLoginInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const [message, setMessage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignInForm = () => {
    setIsLoginInForm(!IsLoginInForm);
    setErrMessage(null);
    setMessage(null);
  };

  const handleInputData = (e) => {
    if (IsLoginInForm) {
      if (e.target.id === "email") setEmail(e.target.value);
      if (e.target.id === "password") setPassword(e.target.value);
    } else {
      if (e.target.id === "name") setName(e.target.value);
      if (e.target.id === "email") setEmail(e.target.value);
      if (e.target.id === "password") setPassword(e.target.value);
    }
  };

  const handleButtonClick = async () => {
    if (IsLoginInForm) {
      const loginPayload = {
        email: email,
        password: password,
      };
      const isValid = validateData({ email, password });
      if (isValid) {
        // Call the login API
        const response = await axios.post(
          `${BaseUrl}auth/login`,
          loginPayload,
          {
            withCredentials: true,
          }
        );
        if (response.data.success) {
          setErrMessage(null);
          setEmail("");
          setPassword("");
          setMessage(response.data.message);
          dispatch(addUserToStore(response.data.user))
        } else {
          setErrMessage(response.data.message);
        }
        const user = response.data.user;
        if (user.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      } else {
        setErrMessage("Something went wrong");
      }
    } else {
      //Register logic
      const isValid = validateData({ email, password });
      const registerPayload = {
        name: name,
        email: email,
        password: password,
      };
      if (isValid) {
        const response = await axios.post(
          `${BaseUrl}auth/register`,
          registerPayload,
          {
            withCredentials: true,
          }
        );
        if (response.data.success) {
          setErrMessage(null);
          setName("");
          setEmail("");
          setPassword("");
          setMessage(response.data.message);
        } else {
          setErrMessage(response.data.message);
        }
      } else {
        setErrMessage("Invalid registration data");
      }
    }
  };
  return (
    <>
      <Header />
      <form
        className="flex flex-col absolute bg-white  text-black border-2 bg-opacity-50 p-10 rounded-lg w-[80%] md:w-[30%] mx-auto my-32 right-0 left-0 top-15"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl m-2">
          {IsLoginInForm ? "Log IN" : "Register"}
        </h1>
        {!IsLoginInForm && (
          <input
            id="name"
            onChange={(e) => handleInputData(e)}
            required
            type="text"
            placeholder="Name"
            className="p-2 m-2 border rounded"
          />
        )}
        <input
          id="email"
          onChange={(e) => handleInputData(e)}
          required
          type="email"
          placeholder="Email address"
          className="p-2 m-2 border rounded"
        />
        <input
          required
          id="password"
          onChange={(e) => handleInputData(e)}
          type="password"
          placeholder="Password"
          className="p-2 m-2 border rounded"
        />
        <button
          className="p-2 m-2 bg-green-600 text-white rounded text-2xl font-semibold cursor-pointer"
          onClick={() => handleButtonClick()}
        >
          {IsLoginInForm ? "Log In" : "Register"}
        </button>
        {errMessage && (
          <p className="text-red-600 m-2 font-bold">{errMessage}</p>
        )}
        {message && <p className="text-green-600 m-2 font-bold">{message}</p>}
        <div className="m-2 cursor-pointer">
          <p onClick={() => handleSignInForm()}>
            {IsLoginInForm ? (
              <>
                Don't have account{" "}
                <span className="text-blue-600">Register</span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span className="text-blue-600">Log In</span>
              </>
            )}
          </p>
        </div> 
      </form>
    </>
  );
};

export default Login;
