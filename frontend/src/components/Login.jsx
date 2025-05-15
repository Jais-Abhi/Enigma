
import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useDispatch } from "react-redux";
// import { addUser } from "../slices/userSlice";
// import { BG_URL, DEFAULT_AVATAR } from "../utils/constants";

const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  // const dispatch = useDispatch();
  // const name = useRef(null);
  // const email = useRef(null);
  // const password = useRef(null);

  const handleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);

  };
  const handleButtonClick = () => {
   console.log("clicked on button");
       console.log(name.current.value)
      console.log(email.current.value)
    console.log(password.current.value)
   
  };

  return (
    <>
      <Header />
      {/* <div className="absolute bg-black">
        <img
          className="w-full h-screen md:h-auto object-cover md:object-center"
          src={BG_URL}
          alt="bg"
        />
      </div> */}
      <form
        className="flex flex-col absolute bg-white  text-black border-2 bg-opacity-50 p-10 rounded-lg w-[80%] md:w-[30%] mx-auto my-32 right-0 left-0 top-15"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl m-2">
          {IsSignInForm ? "Log IN" : "Register"}
        </h1>
        {!IsSignInForm && (
          <input
            // ref={name}
            onChange={(e)=>{console.log(e.target.type)}}
            type="text"
            placeholder="Name"
            className="p-2 m-2 border rounded"
          />
        )}
        <input
          // ref={email}
          // onChange={(e)=>{console.log(e.target.type)}}
          type="email"
          placeholder="Email address"
          className="p-2 m-2 border rounded"
        />
        <input
        id="pass"
          // ref={password}
          onChange={(e)=>{console.log(e.target.id)}}
          type="password"
          placeholder="Password"
          className="p-2 m-2 border rounded"
        />
        <button
          className="p-2 m-2 bg-green-600 text-white rounded text-2xl font-semibold"
          onClick={() => handleButtonClick()}
        >
          {IsSignInForm ? "Log In" : "Register"}
        </button>
        <p className="text-red-600 m-2 font-bold">{errMessage}</p>
        <div className="m-2 cursor-pointer">
          <p onClick={() => handleSignInForm()}>
            {IsSignInForm
              ? " Register"
              :(<>Already have an account? <span className="text-blue-500">Log In</span></>)}
          </p>
        </div> 
      </form>
    </>
  );
};

export default Login;
