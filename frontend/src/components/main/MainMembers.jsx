import React from "react";

const LeaderCard = () => {
  return (
    <div className="w-full bg-gray-100 py-10 px-4 md:px-20">
       <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-blue-700 drop-shadow-md">
        Club Coordinator
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 rounded-2xl shadow-md w-full bg-white">
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
            className="w-70 h-auto rounded-lg grayscale hover:grayscale-0 transition duration-300"
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
