import React from 'react';

const About = () => {
  return (
    <div className="bg-white flex justify-center mt-30 py-6">
      <div className="flex flex-col items-center w-full max-w-[calc(100%-200px)] mx-[100px] gap-10">

        {/* Image on Top */}
        <div className="w-full border-4 border-blue-100">
          <img
            src="about.png"
            alt="Enigma Technical Club Banner"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Text Content */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">ABOUT US</h2>

          <h1 className="text-2xl md:text-3xl text-gray-900 mb-4">
            Welcome to Enigma Technical Club
          </h1>

          <p className="text-gray-600 text-lg mb-4">
            To foster a culture of curiosity, collaboration, and continuous learning by enabling students
            to explore emerging technologies and build solutions that matter.
          </p>

          <p className="text-gray-600 mb-4">
            Enigma Technical Club is a dynamic, student-driven community dedicated to exploring the
            frontiers of technology, innovation, and creativity.
          </p>

          <p className="text-gray-600 mb-4">
            Step into the world of innovation with our Technical Club - ENIGMA! We've had an exciting journey so far, 
            hosting thrilling coding competitions that tested problem-solving skills, insightful workshops on 
            cutting-edge technologies like Data Science and Web3, and exciting hackathons where ideas came to life. 
            Our events provide hands-on experience, foster collaboration, and connect you with like-minded tech geeks. 
            Join us to explore your passion, learn new skills, and be part of a vibrant community pushing the boundaries 
            of technology. Don't just study tech, live it with us.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mission of our Club
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Our club is committed to fostering a vibrant tech culture through hands-on learning and innovation. 
            We regularly organize workshops, seminars, and tech fests focused on trending domains like Web Development, 
            Artificial Intelligence, and Machine Learning. To encourage curiosity and problem-solving skills, 
            we host coding competitions and quizzes. We actively contribute to open-source projects, collaborate 
            with alumni and industry professionals, and provide platforms for students to showcase their innovative ideas. 
            One of our key initiatives includes maintaining a student-led Quiz Portal to enhance interactive learning 
            and engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
