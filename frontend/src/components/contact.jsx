import React from 'react'
import { FaPhoneFlip } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router';
function Contact() {
  return (
    <div className='p-10 text-black mt-25'>
        <div className=' flex justify-around p-8 bg-blue-950 text-white' >
            <div><FaPhoneFlip />+91 1234567890 <br /> +91 1234567890</div>
            <div><TfiEmail /> enigma@gmail.com</div>
            <div className='flex flex-col justify-center items-center'> <a href="https://maps.app.goo.gl/NszPkLYXzerPkcwZ8" target='blank'><span className=' ' ><FaMapLocationDot /></span> </a> Maurawa road, Mohanlalganj,<br /> Uttaar Gaon, Uttar Pradesh 226301</div>
        </div>
        <hr />
        <div class="max-w-4xl m-auto p-8 shadow-xl/30 border-1 border-b-blue-950 rounded  mt-12">
            <h2 class="text-2xl font-semibold text-green-900 mb-6">Get in touch</h2>
    
            <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Community<span class="text-red-500">*</span></label>
        <select class="w-full border border-gray-300 rounded px-3 py-2">
          <option>Choose one option...</option>
          <option value="Web developement">Web Development</option>
          <option value="Cyber Security">Cyber Security</option>
          <option value="Ai & ML">Ai & ML</option>
          <option value="Social Media">Social Media</option>
        </select>
      </div>


      {/* <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Description that fits you<span class="text-red-500">*</span></label>
        <select class="w-full border border-gray-300 rounded px-3 py-2">
          <option>Choose one option...</option>
        </select>
      </div> */}


      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Full Name<span class="text-red-500">*</span></label>
        <input type="text" placeholder="Enter your full name..." class="w-full border border-gray-300 rounded px-3 py-2" />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">E-mail<span class="text-red-500">*</span></label>
        <input type="email" placeholder="Enter your email address..." class="w-full border border-gray-300 rounded px-3 py-2" />
      </div>

   
      {/* <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Inquiry Purpose</label>
        <input type="text" placeholder="Enter your organization..." class="w-full border border-gray-300 rounded px-3 py-2" />
      </div> */}

   
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number<span class="text-red-500">*</span></label>
        <input type="tel" placeholder="Enter your phone number..." class="w-full border border-gray-300 rounded px-3 py-2" />
      </div>

      
      <div class="md:col-span-2">
        <label class="block text-sm font-medium text-gray-700 mb-1">Purpose<span class="text-red-500">*</span><span class="text-red-500">*</span></label>
        <textarea rows="4" placeholder="Enter your message here..." class="w-full border border-gray-300 rounded px-3 py-2"></textarea>
      </div>

  
      <div class="md:col-span-2 text-right">
        <button type="submit" class="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800 flex items-center gap-2">
          Submit Form
          <span>▶</span>
        </button>
      </div>
    </form>
  </div>
    </div>
  )
}
 
export default Contact