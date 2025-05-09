import React, { useState } from "react";
import { Link ,NavLink } from "react-router";
import { IoMdHome } from "react-icons/io";
import { MdEventNote } from "react-icons/md";
import { IoInformationCircle } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiContactsBookFill } from "react-icons/ri";
import { IoLogIn } from "react-icons/io5";
import { SiSimplelogin } from "react-icons/si";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={` fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300 z-50 ${
        menuOpen ? "pb-4" : ""
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center py-2 px-4">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/" className="flex items-center gap-2">
            <img src="/enigma.png" alt="logo" className="h-16 md:h-20" />
            <span className="text-xl md:text-2xl font-semibold text-gray-800">
              Enigma Technical Club
            </span>
          </Link>
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row items-center gap-5 md:gap-8 text-lg md:text-base mt-3 md:mt-0`}
        >
          <li className="hover:text-blue-600">
            <NavLink to="/" className="flex items-center gap-1 pl-10">
              <IoMdHome size="1.3rem" /> Home
            </NavLink>
          </li>
          <li className="hover:text-blue-600">
            <NavLink to="/events" className="flex items-center gap-1">
              <MdEventNote size="1.3rem" /> Events
            </NavLink>
          </li>
          <li className="hover:text-blue-600">
            <NavLink to="/about" className="flex items-center gap-1">
              <IoInformationCircle size="1.3rem" /> AboutUs
            </NavLink>
          </li>
          <li className="hover:text-blue-600">
            <NavLink to="/members" className="flex items-center gap-1">
              <FaPeopleGroup size="1.3rem" /> Members
            </NavLink>
          </li>
          <li className="hover:text-blue-600">
            <NavLink to="/contact" className="flex items-center gap-1">
              <RiContactsBookFill size="1.3rem" /> ContactUs
            </NavLink>
          </li>
        </ul>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-wrap justify-center items-center gap-5 mt-3 md:mt-0`}
        >
          <button className="flex items-center gap-2 cursor-pointer px-10 py-2 border-3 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
            <IoLogIn size="1.3rem" />
            Login
          </button>
          <button className="flex items-center gap-2 cursor-pointer px-10 py-2 border-3 bg-blue-600 text-white rounded-lg hover:border-blue-600 hover:text-blue-600 hover:bg-white">
            <SiSimplelogin size="1.3rem" />
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
