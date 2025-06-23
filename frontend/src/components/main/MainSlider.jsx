import React, { useState, useEffect, useRef } from "react";
const slides = [
  { image: "/slider1.jpg", title: "Welcome to Our Portal", subtitle: "All Team members" },
  { image: "/slider2.jpg", title: "Workshop on Cyber Security", subtitle: "organize by cyber Security Members" },
  { image: "/slider3.jpg", title: "Workshop on Cyber Security", subtitle: "organize by cyber Security Members" },
];

const MainSlider = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const progressBarRef = useRef(null);
  const animationFrameRef = useRef(null);

  const sliderRef = useRef(null);

  const elapsedTimeRef = useRef(0);
  const lastTimestampRef = useRef(null);

  const animate = (timestamp) => {
    if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;

    if (!isHovered) {
      const delta = timestamp - lastTimestampRef.current;
      elapsedTimeRef.current += delta;

      if (progressBarRef.current) {
        const progressPercent = Math.min((elapsedTimeRef.current / 4000) * 100, 100);
        progressBarRef.current.style.width = `${progressPercent}%`;
      }

      if (elapsedTimeRef.current >= 4000) {
        goNext();
        elapsedTimeRef.current = 0;
      }
    }

    lastTimestampRef.current = timestamp;
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isHovered]);

  const goNext = () => {
    if (index === slides.length) return; 

    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (index === 0) {
      setIndex(slides.length - 1);
      elapsedTimeRef.current = 0;
      return;
    }
    setIndex(index - 1);
    elapsedTimeRef.current = 0;
  };

  useEffect(() => {
    if (index === slides.length) {
      const timer = setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none";
          setIndex(0);
          
          sliderRef.current.style.transform = `translateX(0%)`;

          sliderRef.current.offsetHeight;

          sliderRef.current.style.transition = "transform 0.8s ease-in-out";
        }
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [index]);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    lastTimestampRef.current = null; 
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute opacity-70 top-0 left-0 w-full h-1 z-30 pointer-events-none">
        <div
          ref={progressBarRef}
          className="h-2 bg-gray-500 transition-none"
          style={{ width: "0%" }}
        />
      </div>
      <div className="absolute bottom-0 p-4 w-full z-20 px-4">
        <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
          {index === slides.length ? slides[0].title : slides[index].title}
        </h2>
        <p className="text-white text-lg md:text-2xl mt-2 drop-shadow">
          {index === slides.length ? slides[0].subtitle : slides[index].subtitle}
        </p>
      </div>

      <div
        ref={sliderRef}
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
        <img
          key="clone"
          src={slides[0].image}
          alt="Slide clone"
          className="min-w-full object-cover h-[300px] md:h-[600px] lg:h-[600px]"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute h-full top-1/2 left-0 transform -translate-y-1/2 bg-black/10 text-white p-2 rounded-full hover:bg-black/30 z-40"
      >
        ◀
      </button>
      <button
        onClick={() => {
          elapsedTimeRef.current = 0;
          goNext();
        }}
        className="absolute top-1/2 right-0 h-full transform -translate-y-1/2 bg-black/10 text-white p-2 rounded-full hover:bg-black/30 z-40"
      >
        ▶
      </button>
    </div>
  );
};

export default MainSlider;
