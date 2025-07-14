 import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col relative bg-white-200 w-full">
      {/* Main Navbar Container */}
      <div className="flex items-center w-full">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center mr-4 md:mr-16">
          <img 
            className="w-12 h-12 md:w-[4rem] md:h-[4rem]" 
            src="/enigma_logo.png" 
            alt="Enigma Logo" 
          /> 
          <p className="text-black text-lg md:text-2xl font-bold ml-2 md:ml-4">
            Enigma Technical Club
          </p>
        </Link>

        {/* Desktop Navigation - Inline with logo/title */}
        <div className="hidden md:block ml-24">
          <LayoutGroup>
            <nav className="font-medium flex flex-row items-center gap-12 bg-gray-300 rounded-full p-2">
              {[
                { to: "/", label: "Home" },
                { to: "/members", label: "Members" },
                { to: "/gallery", label: "Gallery" },
                { to: "/events", label: "Events" },
                { to: "/about", label: "About Us" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="relative px-4 py-2 cursor-pointer"
                >
                  {isActive(item.to) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute inset-0 bg-blue-500 rounded-full z-0"
                      transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive(item.to) ? "text-white" : "text-black"}`}>
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </LayoutGroup>
        </div>

        {/* Mobile Menu Button */}
        <div className="ml-auto md:hidden p-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black text-2xl"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Appears below the main navbar */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 z-50 bg-gray-400 w-full">
          <nav className="font-medium flex flex-col items-center gap-2 py-2">
            {[
              { to: "/", label: "Home" },
              { to: "/members", label: "Members" },
              { to: "/gallery", label: "Gallery" },
              { to: "/events", label: "Events" },
              { to: "/about", label: "About Us" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative w-full text-center px-4 py-2 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                <span className={`${isActive(item.to) ? "text-white bg-blue-500 p-2 rounded-3xl" : "text-black"}`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
