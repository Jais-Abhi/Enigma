import React from "react";

const galleryImages = [
  "image1",
  "",
  "",
  "",
  "",
  "",
];

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Our GALLERY</h2>
      <p className="text-center text-gray-500 mb-8">Memories from our latest events and Workshops</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md group">
            <img
              src={src}
              alt={` image ${index + 1}`}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
