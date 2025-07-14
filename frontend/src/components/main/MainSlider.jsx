import React, { useState, useEffect, useRef } from "react";
import { useGetAllSliders } from "../../hooks/sliders/useGetAllSliders";

const MainSlider = () => {
  const { sliders, loading } = useGetAllSliders();
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
        const progressPercent = Math.min(
          (elapsedTimeRef.current / 4000) * 100,
          100
        );
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
    if (sliders.length <= 1) return;

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [isHovered, sliders]);

  const goNext = () => {
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (index === 0) {
      setIndex(sliders.length - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
    elapsedTimeRef.current = 0;
  };

  useEffect(() => {
    if (index === sliders.length) {
      const timer = setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none";
          setIndex(0);
          sliderRef.current.style.transform = `translateX(0%)`;
          sliderRef.current.offsetHeight; // force reflow
          sliderRef.current.style.transition = "transform 0.8s ease-in-out";
        }
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [index, sliders.length]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    lastTimestampRef.current = null;
  };

  if (loading)
    return <p className="text-center py-10">Loading Sliders...</p>;
  if (!sliders.length)
    return <p className="text-center py-10">No sliders available</p>;

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Progress Bar */}
      <div className="absolute opacity-70 top-0 left-0 w-full h-1 z-30 pointer-events-none">
        <div
          ref={progressBarRef}
          className="h-2 bg-gray-500 transition-none"
          style={{ width: "0%" }}
        />
      </div>

      {/* Slide Content */}
      <div className="absolute bottom-0 p-4 w-full z-20 px-4">
        <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
          {sliders[index % sliders.length]?.title}
        </h2>
        <p className="text-white text-lg md:text-2xl mt-2 drop-shadow">
          {sliders[index % sliders.length]?.subtitle}
        </p>
      </div>

      {/* Slider Images */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-800 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {sliders.map((slide, idx) => {
          const isPrev = index % sliders.length === idx;
          return (
            <div
              key={idx}
              className="min-w-full transition-transform duration-1000 ease-in-out"
              style={{
                transform: isPrev ? "scale(1.05)" : "scale(1)",
                transition: "transform 1s ease-in-out",
              }}
            >
              <img
                src={slide.image || "/fallback.jpg"}
                alt={`Slide ${idx}`}
                className="w-full h-[300px] md:h-[600px] lg:h-[600px] object-cover"
              />
            </div>
          );
        })}

        {/* Cloned first slide for loop transition */}
        <div
          key="clone"
          className="min-w-full"
          style={{ transform: "scale(1)" }}
        >
          <img
            src={sliders[0]?.image || "/fallback.jpg"}
            alt="Slide clone"
            className="w-full h-[300px] md:h-[600px] lg:h-[600px] object-cover"
          />
        </div>
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
