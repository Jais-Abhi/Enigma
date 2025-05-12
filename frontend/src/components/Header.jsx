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
      <div className="flex flex-col md:flex-row gap-20 items-center px-4">
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
          className={` font-[600] pl-10  box-border ${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row items-center gap-5 md:gap-8 text-lg md:text-base mt-3 md:mt-0`}
        >
          <li>
            <NavLink to="/" className={({ isActive }) => `flex items-center p-1 border-3 rounded-xl border-transparent ${isActive ? "text-blue-700" : "hover:text-blue-800 hover:border-blue-800 hover:transition-all hover:duration-700"}`}>
              <IoMdHome size="1.3rem" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={({ isActive }) => `flex items-center p-1 border-3 rounded-xl border-transparent ${isActive ? "text-blue-700" : "hover:text-blue-800 hover:border-blue-800 hover:transition-all hover:duration-700"}`}>
              <MdEventNote size="1.3rem" /> Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={({ isActive }) => `flex items-center p-1 border-3 rounded-xl border-transparent ${isActive ? "text-blue-700" : "hover:text-blue-800 hover:border-blue-800 hover:transition-all hover:duration-700"}`}>
              <IoInformationCircle size="1.3rem" /> Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/members" className={({ isActive }) => `flex items-center p-1 gap-1 border-3 rounded-xl border-transparent ${isActive ? "text-blue-700" : "hover:text-blue-800 hover:border-blue-800 hover:transition-all hover:duration-700"}`}>
              <FaPeopleGroup size="1.3rem" /> Members
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `flex items-center p-1 border-3 rounded-xl border-transparent ${isActive ? "text-blue-700" : "hover:text-blue-800 hover:border-blue-800 hover:transition-all hover:duration-700"}`}>
              <IoInformationCircle size="1.3rem" /> AboutUs
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/contact" className={({ isActive }) => `flex items-center p-1 border-3 rounded-xl border-transparent ${isActive ? "text-blue-700" : "hover:text-blue-800 hover:border-blue-800 hover:transition-all hover:duration-700"}`}>
              <RiContactsBookFill size="1.3rem" /> ContactUs
            </NavLink>
          </li> */}
        </ul>

        {/* <div
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
        </div> */}
      </div>
    </div>
  );
};

export default Header;
