import React, { useState, useEffect } from "react";
import { Link ,NavLink } from "react-router";
import { FcBusinessContact } from "react-icons/fc";
import { IoChatboxEllipses } from "react-icons/io5";
const slides = [
  {
    image: "/slider1.jpg",
    title: "Welcome to Our Portal",
    subtitle: "All Team members",
  },
  {
    image: "/slider2.jpg",
    title: "Workshop on Cyber Security",
    subtitle: "organize by cyber Security Members",
  },
  {
    image: "/slider3.jpg",
    title: "Workshop on Cyber Security",
    subtitle: "organize by cyber Security Members",
  },
];

const MainSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden mt-20 border-4 border-yellow-500">
      <div className="absolute bottom-0 p-4 w-full z-20 px-4">
        <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
          {slides[index].title}
        </h2>
        <p className="text-white text-lg md:text-2xl mt-2 drop-shadow">
          {slides[index].subtitle}
        </p>
      </div>
      <div
        className="flex transition-transform duration-800 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.image}
            alt={`Slide ${idx}`}
            className="min-w-full object-cover h-[300px] md:h-[600px] lg:h-[600px]"
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute h-full top-1/2 left-0 transform -translate-y-1/2 bg-black/10 text-white p-2 rounded-full hover:bg-black/30 z-10"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 h-full transform -translate-y-1/2 bg-black/10 text-white p-2 rounded-full hover:bg-black/30 z-10"
      >
        ▶
      </button>
      {/* <a
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
      </a> */}
      <NavLink to="/contact" className=" flex flex-col gap-0 fixed right-4 items-center bottom-4 text-5xl border-4 rounded-full bg-blue-100 animation-bounce  border-fuchsia-700 text-purple-700 z-50 p-4 " >
      <IoChatboxEllipses />
      <span className="text-xs font-bold" >contact us</span>
      </NavLink>
    </div>
  );
};

export default MainSlider;
