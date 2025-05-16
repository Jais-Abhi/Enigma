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

  // For smooth transition control
  const sliderRef = useRef(null);

  // Track elapsed time for progress bar
  const elapsedTimeRef = useRef(0);
  const lastTimestampRef = useRef(null);

  // Animate progress bar with pause on hover
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

  // Move to next slide with infinite forward effect
  const goNext = () => {
    if (index === slides.length) return; // prevent extra increments

    setIndex((prev) => prev + 1);
  };

  // Move to previous slide (simple wrap around)
  const prevSlide = () => {
    if (index === 0) {
      setIndex(slides.length - 1);
      elapsedTimeRef.current = 0;
      return;
    }
    setIndex(index - 1);
    elapsedTimeRef.current = 0;
  };

  // When index updates and hits the cloned slide (slides.length), reset instantly
  useEffect(() => {
    if (index === slides.length) {
      // After the slide transition animation duration, reset to 0 without animation
      const timer = setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none";
          setIndex(0);
          // Reset transform instantly
          sliderRef.current.style.transform = `translateX(0%)`;

          // Force reflow to apply styles immediately
          sliderRef.current.offsetHeight;

          // Re-enable transition for next moves
          sliderRef.current.style.transition = "transform 0.8s ease-in-out";
        }
      }, 800); // Match transition duration

      return () => clearTimeout(timer);
    }
  }, [index]);

  // On hover handlers
  // const handleMouseEnter = () => setIsHovered(true);
  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  //   lastTimestampRef.current = null; // reset timestamp so delta calculation restarts cleanly
  // };

  return (
    <div
      className="relative w-full overflow-hidden"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      {/* Progress Bar */}
      <div className="absolute opacity-70 top-0 left-0 w-full h-1 z-30 pointer-events-none">
        <div
          ref={progressBarRef}
          className="h-2 bg-gray-500 transition-none"
          style={{ width: "0%" }}
        />
      </div>

      {/* Slide Text */}
      <div className="absolute bottom-0 p-4 w-full z-20 px-4">
        <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
          {index === slides.length ? slides[0].title : slides[index].title}
        </h2>
        <p className="text-white text-lg md:text-2xl mt-2 drop-shadow">
          {index === slides.length ? slides[0].subtitle : slides[index].subtitle}
        </p>
      </div>

      {/* Image Slider with cloned first slide at the end */}
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
        {/* Cloned first slide */}
        <img
          key="clone"
          src={slides[0].image}
          alt="Slide clone"
          className="min-w-full object-cover h-[300px] md:h-[600px] lg:h-[600px]"
        />
      </div>

      {/* Navigation Buttons */}
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
