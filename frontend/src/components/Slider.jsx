import React from "react";
import { useGetAllSliders } from "../hooks/sliders/useGetAllSliders";

const Slider = () => {
  const { sliders, loading } = useGetAllSliders();

  if (loading)
    return <p className="text-center text-xl mt-10">Loading sliders...</p>;

  return (
    <div className="slider-container w-full overflow-hidden">
      <div className="slider-track flex animate-slide">
        {sliders.map((slider) => (
          <div key={slider._id} className="min-w-full flex-shrink-0">
            <img
              src={slider.image || slider.poster}
              alt={slider.title}
              className="w-full h-[300px] object-cover"
            />
            <div className="text-center mt-2">
              <h3 className="text-2xl font-bold">{slider.title}</h3>
              <p className="text-lg">{slider.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
