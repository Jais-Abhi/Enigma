import React from "react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-3">Enigma Technical Club</h2>
          <p className="text-sm text-gray-200 mb-4">
            A student-led club dedicated to fostering innovation,
            collaboration, and technical excellence among passionate students.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-gray-300 text-xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-white hover:text-gray-300 text-xl">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/events" className="hover:text-white">Events</Link></li>
            <li><Link to="/members" className="hover:text-white">Our Team</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Our Gallery</Link></li>
            <li><Link to="/admin/login">Login</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Info</h2>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Ambalika Institute of Management and Technology, Lucknow</li>
            <li>enigmaclub123@gmail.com</li>
            <li>+91 000000000</li>
          </ul>
        </div>
      </div>
      <hr className="w-full bg-gray-500 mt-5"/>
      <div>
        <p className="text-center text-sm text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Enigma Technical Club. All rights reserved. | Developed by Web Development Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
