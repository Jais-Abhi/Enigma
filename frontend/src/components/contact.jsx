// import React, { useState } from 'react'
// import { FaPhoneFlip } from "react-icons/fa6";
// import { TfiEmail } from "react-icons/tfi";
// import { FaMapLocationDot } from "react-icons/fa6";
// import { Link } from 'react-router';
// import { ImCross } from "react-icons/im";
// import { motion } from "framer-motion";
// function Contact({OnActive}) {
//   return (
//     <div
//      className=' box-border flex justify-center items-center h-screen fixed top-0 z-50 w-full bg-white/30 backdrop-blur-sm text-black'>
//       <div className=' relative border-2 border-black w-1/3 p-8 bg-blue-200 ' >
//       <button onClick={()=>{OnActive(false)}} className='absolute  right-1 top-1 text-2xl' ><ImCross /></button>
//         <p className=' text-center text-3xl font-semibold' >Get in touch</p>
//         <div className='m-4'>
//          <label  className="block text-2xltext-black mb-1 font-bold">Full Name<span className="text-red-500">*</span></label>
//          <input type="text" placeholder="Enter your full name..." className="w-full border-2 border-gray-700 text-black placeholder-black rounded px-3 py-2" />
//        </div>
//         <div className='m-4' >
//          <label  className="block text-2xltext-black mb-1 font-bold">E-mail<span className="text-red-500">*</span></label>
//          <input type="email" placeholder="Enter your e-mail..." className="w-full border-2 border-gray-700 text-black placeholder-black rounded px-3 py-2" />
//        </div>
//         <div className='m-4' >
//          <label  className="block text-2xltext-black mb-1 font-bold">Purpose<span className="text-red-500">*</span></label>
//          <textarea type="email" rows={4} placeholder="Enter your message..." className="w-full border-2 border-gray-700 text-black placeholder-black rounded px-3 py-2" />
//        </div>
//         <div className='mt-4 ml-4 mr-4 flex justify-center items-center' >
//          <button className='bg-green-500 p-1 rounded-2xl w-full hover:bg-green-600 text-2xl' >Submit</button>
//        </div>
//       </div>
        
//     </div>
//   )
// }
 
// export default Contact








import React from "react";
import { ImCross } from "react-icons/im";

function Contact({ OnActive }) {
  return (
    <div
      className="box-border flex justify-center items-center h-screen fixed top-0 z-50 w-full bg-white/30 backdrop-blur-sm text-black p-4"
    >
      <div className="relative border-2 border-black w-full max-w-md p-6 bg-blue-200 rounded-lg shadow-lg">
        <button
          onClick={() => {
            OnActive(false);
          }}
          className="absolute right-3 top-3 text-2xl hover:text-red-600"
          aria-label="Close contact form"
        >
          <ImCross />
        </button>
        <p className="text-center text-3xl font-semibold mb-6">Get in touch</p>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-1">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your full name..."
            className="w-full border-2 border-gray-700 text-black placeholder-black rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-1">
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your e-mail..."
            className="w-full border-2 border-gray-700 text-black placeholder-black rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-1">
            Purpose<span className="text-red-500">*</span>
          </label>
          <textarea
            rows={4}
            placeholder="Enter your message..."
            className="w-full border-2 border-gray-700 text-black placeholder-black rounded px-3 py-2 resize-none"
          />
        </div>

        <div className="flex justify-center">
          <button className="bg-green-500 p-3 rounded-2xl w-full hover:bg-green-600 text-2xl font-semibold transition-colors duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
