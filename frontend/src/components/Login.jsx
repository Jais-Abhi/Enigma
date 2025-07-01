import React, { useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser } from "../slices/userSlice";
import { BaseUrl } from "../utils/constant";
import { motion } from "framer-motion";
import axios from "axios";

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
    const { id, value } = e.target;
    if (id === "name") setName(value);
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
  };

  const handleButtonClick = async () => {
    const isValid = validateData({ email, password });
    if (!isValid) {
      setErrMessage("Something went wrong");
      return;
    }

    try {
      if (IsLoginInForm) {
        const loginPayload = { email, password };
        const response = await axios.post(`${BaseUrl}auth/login`, loginPayload, {
          withCredentials: true,
        });

        if (response.data.success && response.data.user) {
          setErrMessage(null);
          setEmail("");
          setPassword("");
          setMessage(response.data.message);
          dispatch(addUser(response.data.user));

          const user = response.data.user;
          if (user.role === "admin") {
            navigate("/admin/dashboard");
          } else {
            navigate("/");
          }
        } else {
          setErrMessage(response.data.message);
        }
      } else {
        const registerPayload = { name, email, password };
        const response = await axios.post(`${BaseUrl}auth/register`, registerPayload, {
          withCredentials: true,
        });

        if (response.data.success) {
          setErrMessage(null);
          setName("");
          setEmail("");
          setPassword("");
          setMessage(response.data.message);
        } else {
          setErrMessage(response.data.message);
        }
      }
    } catch (error) {
      console.error("Login/Register error:", error);
      setErrMessage("Server error. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <form
        className="flex flex-col absolute bg-white text-black border-2 bg-opacity-50 p-10 rounded-lg w-[80%] md:w-[30%] mx-auto my-32 right-0 left-0 top-15"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl m-2">
          {IsLoginInForm ? "Log IN" : "Register"}
        </h1>
        {!IsLoginInForm && (
          <input
            id="name"
            onChange={handleInputData}
            required
            type="text"
            placeholder="Name"
            className="p-2 m-2 border rounded"
          />
        )}
        <input
          id="email"
          onChange={handleInputData}
          required
          type="email"
          placeholder="Email address"
          className="p-2 m-2 border rounded"
        />
        <input
          required
          id="password"
          onChange={handleInputData}
          type="password"
          placeholder="Password"
          className="p-2 m-2 border rounded"
        />
        <motion.button
          className="p-2 m-2 bg-green-600 text-white rounded text-2xl font-semibold cursor-pointer"
          onClick={handleButtonClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          {IsLoginInForm ? "Log In" : "Register"}
        </motion.button>
        {errMessage && <p className="text-red-600 m-2 font-bold">{errMessage}</p>}
        {message && <p className="text-green-600 m-2 font-bold">{message}</p>}
        <div className="m-2 cursor-pointer">
          <p onClick={handleSignInForm}>
            {IsLoginInForm ? (
              <>Don't have an account? <span className="text-blue-600">Register</span></>
            ) : (
              <>Already have an account? <span className="text-blue-600">Log In</span></>
            )}
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
