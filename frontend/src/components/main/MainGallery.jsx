import React from "react";

const galleryImages = [
  {
    src: "/gallery-1.jpg",
    title: "Tech Workshop",
    description: "Hands-on coding session with experts.",
  },
  {
    src: "/gallery-2.jpg",
    title: "AI Conference",
    description: "Exploring the future of AI in education.",
  },
  {
    src: "/gallery-4.jpg",
    title: "Hackathon",
    description: "48-hour coding marathon with prizes.",
  },
  {
    src: "/gallery-3.jpg",
    title: "Seminar",
    description: "Guest lecture by industry professionals.",
  },
  {
    src: "/gallery-5.jpg",
    title: "Robotics Expo",
    description: "Showcasing student-built robots.",
  },
  {
    src: "/events.jpg",
    title: "Annual Meetup",
    description: "Celebrating a year of innovation.",
  },
];

const MainGallery = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-2 text-blue-800 drop-shadow-md">
          OUR GALLERY
        </h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base font-medium text-center mb-12">
          Memories from our latest events and Workshops
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md group border-3 border-gray-400"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center 
                text-center px-4 opacity-0 group-hover:opacity-100 
                transition duration-300">
                <div className="bg-white/70 backdrop-blur-sm rounded p-3">
                  <h3 className="text-lg font-semibold text-gray-800">{img.title}</h3>
                  <p className="text-sm text-gray-700">{img.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainGallery;
