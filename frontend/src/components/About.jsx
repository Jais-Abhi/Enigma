import React from 'react';

const About = () => {
  return (
    <div className=" flex justify-center mt-20 md:px-16 py-6">
      <div className="flex flex-col md:flex-row items-start max-w-7xl w-full gap-10">
        <div className="w-full md:w-full text-center md:text-left bg-white">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center ">ABOUT US</h2>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 mt-4 ml-4">
            Welcome to Enigma Technical Club
          </h1>
          <p className="text-gray-600 text-lg mb-4 ml-4">
            To foster a culture of curiosity, collaboration, and continuous learning by enabling students
            to explore emerging technologies and build solutions that matter.
          </p>

          <p className="text-gray-600 mb-4 ml-4">
            Enigma Technical Club is a dynamic, student-driven community dedicated to exploring the
            frontiers of technology, innovation, and creativity.
          </p>

          <ul className="text-left list-disc pl-5 text-gray-700 space-y-2 ml-4">
            <li>✔ Organize workshops, seminars, and tech fests on Web Development, AI/ML, etc.</li>
            <li>✔ Host coding competitions and quizzes to spark learning.</li>
            <li>✔ Build and contribute to open-source projects.</li>
            <li>✔ Collaborate with alumni and industry professionals.</li>
            <li>✔ Run a Quiz Portal and showcase student innovation.</li>
          </ul>
        </div>
      </div>
    </div>
    
  );
};

export default About;
