import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">Enigma Technical Club</h2>
          <p className="text-sm mt-2">
            Empowering students through tech, innovation, and collaboration.
          </p>
        </div>
        <div className="flex gap-4 text-white text-xl">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <FaFacebookF />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedinIn />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Enigma Technical Club. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
