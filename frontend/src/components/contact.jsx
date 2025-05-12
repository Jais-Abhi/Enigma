import React, { useState } from 'react'
import { FaPhoneFlip } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router';
import { ImCross } from "react-icons/im";
function Contact({OnActive}) {
  return (
    <div className=' box-border flex justify-center items-center h-screen fixed top-0 z-50 w-full bg-white/30 backdrop-blur-sm text-black'>
      <div className=' relative border-2 border-black w-1/3 p-8 bg-blue-200 ' >
      <button onClick={()=>{OnActive(false)}} className='absolute  right-1 top-1 text-2xl' ><ImCross /></button>
        <p className=' text-center text-3xl font-semibold' >Get in touch</p>
        <div className='m-4'>
         <label  className="block text-2xltext-black mb-1 font-bold">Full Name<span className="text-red-500">*</span></label>
         <input type="text" placeholder="Enter your full name..." className="w-full border-2 border-gray-700 text-black placeholder-black rounded px-3 py-2" />
       </div>
        <div className='m-4' >
         <label  className="block text-2xltext-black mb-1 font-bold">E-mail<span className="text-red-500">*</span></label>
         <input type="email" placeholder="Enter your e-mail..." className="w-full border-2 border-gray-700 text-black placeholder-black rounded px-3 py-2" />
       </div>
        <div className='m-4' >
         <label  className="block text-2xltext-black mb-1 font-bold">Purpose<span className="text-red-500">*</span></label>
         <textarea type="email" rows={4} placeholder="Enter your message..." className="w-full border-2 border-gray-700 text-black placeholder-black rounded px-3 py-2" />
       </div>
        <div className='mt-4 ml-4 mr-4 flex justify-center items-center' >
         <button className='bg-green-500 p-1 rounded-2xl w-full hover:bg-green-600 text-2xl' >Submit</button>
       </div>
      </div>
        
    </div>
  )
}
 
export default Contact

// <hr />
//         <div className="max-w-4xl m-auto p-8 shadow-xl/30 border-1 border-b-blue-950 rounded  mt-12">
//             <h2 className="text-2xl font-semibold text-green-900 mb-6">Get in touch</h2>
    
//             <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">Community<span className="text-red-500">*</span></label>
//         <select className="w-full border border-gray-300 rounded px-3 py-2">
//           <option>Choose one option...</option>
//           <option value="Web developement">Web Development</option>
//           <option value="Cyber Security">Cyber Security</option>
//           <option value="Ai & ML">Ai & ML</option>
//           <option value="Social Media">Social Media</option>
//         </select>
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">Full Name<span className="text-red-500">*</span></label>
//         <input type="text" placeholder="Enter your full name..." className="w-full border border-gray-300 rounded px-3 py-2" />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">E-mail<span className="text-red-500">*</span></label>
//         <input type="email" placeholder="Enter your email address..." className="w-full border border-gray-300 rounded px-3 py-2" />
//       </div>
   
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number<span className="text-red-500">*</span></label>
//         <input type="tel" placeholder="Enter your phone number..." className="w-full border border-gray-300 rounded px-3 py-2" />
//       </div>

      
//       <div className="md:col-span-2">
//         <label className="block text-sm font-medium text-gray-700 mb-1">Purpose<span className="text-red-500">*</span><span className="text-red-500">*</span></label>
//         <textarea rows="4" placeholder="Enter your message here..." className="w-full border border-gray-300 rounded px-3 py-2"></textarea>
//       </div>

  
//       <div className="md:col-span-2 text-right">
//         <button type="submit" className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800 flex items-center gap-2">
//           Submit Form
//           <span>▶</span>
//         </button>
//       </div>
//     </form>
//     <div className=' flex justify-around p-8 bg-blue-950 text-white mt-8' >
//             <div><FaPhoneFlip />+91 1234567890 <br /> +91 1234567890</div>
//             <div><TfiEmail /> enigma@gmail.com</div>
//             <div className='flex flex-col justify-center items-center'> <a href="https://maps.app.goo.gl/NszPkLYXzerPkcwZ8" target='blank'><span className=' ' ><FaMapLocationDot /></span> </a> Maurawa road, Mohanlalganj,<br /> Uttaar Gaon, Uttar Pradesh 226301</div>
//         </div>
//   </div>