import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LeaderCard = () => {
  return (
    <div className="w-full bg-white py-10 px-4 md:px-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-2 text-blue-800 drop-shadow-md">
        Club Coordinator
      </h2>
      <p className="mt-2 text-gray-600 text-sm sm:text-base font-medium text-center mb-12">
          Meet the leaders who drive innovation and collaboration within our club
        </p>
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 rounded-2xl shadow-md w-full bg-white border-2 border-gray-300 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8">
        <div className="text-center md:text-left md:w-2/3 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-black leading-snug">
            Leading not just with ideas, but with implementation
          </h1>
          <div className="bg-black inline-block px-6 py-3 rounded">
            <p className="text-white text-2xl md:text-3xl font-bold">
              Club Coordinator
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center mt-8 md:mt-0"
          role="img"
          aria-label="Coordinator photo of Mr. Atebar Haider"
        >
          <img
            src="/Atebarsir.png"
            alt="Mr. Atebar Haider, Club Coordinator"
            className="w-70 h-auto rounded-lg"
          />
          <div className="mt-4 bg-black text-white px-4 py-2 rounded-lg text-lg font-semibold">
            MR. ATEBAR HAIDER
          </div>
          <div className="mt-2 bg-white px-4 py-2 rounded-full shadow text-sm font-medium text-center">
            Assistant Professor, Department of Computer Science
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
