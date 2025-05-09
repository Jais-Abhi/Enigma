import React, { useState, useEffect } from "react";


const images = [
  "/slider1.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
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
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx}`}
            className="min-w-full object-cover h-[300px] md:h-[600px] lg:h-[600px]"
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-10"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-10"
      >
        ▶
      </button>
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
