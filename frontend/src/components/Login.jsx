// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const Admin = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [uniqueKey, setUniqueKey] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', { username, password, uniqueKey });
//     navigate('/dashboard');
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="border-2 border-amber-600 w-full max-w-md p-8 rounded-lg bg-white shadow-lg">
//         <form onSubmit={handleSubmit}>
//           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
//             Login as Admin
//           </h2>

//           <div className="mb-4">
//             <label htmlFor="username" className="text-xl text-gray-700">Username:</label>
//             <input
//               type="text"
//               id="username"
//               className="w-full p-3 border-2 border-gray-300 rounded-md mt-2"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="text-xl text-gray-700">Password:</label>
//             <input
//               type="password"
//               id="password"
//               className="w-full p-3 border-2 border-gray-300 rounded-md mt-2"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="uniqueKey" className="text-xl text-gray-700">Unique Key:</label>
//             <input
//               type="text"
//               id="uniqueKey"
//               className="w-full p-3 border-2 border-gray-300 rounded-md mt-2"
//               value={uniqueKey}
//               onChange={(e) => setUniqueKey(e.target.value)}
//             />
//           </div>

//           <div className="flex justify-center mt-8">
//             <button
//               type="submit"
//               className="w-full py-3 px-6 bg-blue-500 text-white rounded-lg text-xl font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//             >
//               Enter Admin Panel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Admin;

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
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };

  const handleButtonClick = () => {
   console.log("clicked on button");
   
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
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 m-2 border rounded"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email address"
          className="p-2 m-2 border rounded"
        />
        <input
          ref={password}
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
              : "Already have an account ? Log In"}
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
