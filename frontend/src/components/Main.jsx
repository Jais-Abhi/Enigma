import React, { useState, useEffect } from "react";

const images = [
  {
    src: "/slider1.jpg",
    heading: "All Team Member",
    description: "Join now and be part of the community!",
  },
  {
    src: "/slider2.jpg",
    heading: "Workshop on Cyber Security",
    description: "Upgrade your skills with us today.",
  },
  {
    src: "/slider3.jpg",
    heading: "Workshop on AI",
    description: "Upgrade your skills with us today.",
  },
];

const Main = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden mt-10 border-4 border-yellow-500">
      {/* Text over slider */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 bg-black/40 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          {images[index].heading}
        </h1>
        <p className="text-lg md:text-xl text-center">
          {images[index].description}
        </p>
      </div>

      {/* Slider images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((item, idx) => (
          <img
            key={idx}
            src={item.src}
            alt={`Slide ${idx}`}
            className="min-w-full object-cover h-[300px] md:h-[600px] lg:h-[600px]"
          />
        ))}
      </div>

      {/* Previous button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-20"
      >
        ◀
      </button>

      {/* Next button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-20"
      >
        ▶
      </button>

      {/* Registration link */}
      <a
        href="/register"
        style={{
          position: "fixed",
          top: "250px",
          right: "0px",
          zIndex: 1000,
          backgroundColor: "#ff9900",
          color: "white",
          padding: "10px 15px",
          borderRadius: "10px 0 0 10px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        }}
      >
        Registration
      </a>
    </div>
  );
};

export default Main;
