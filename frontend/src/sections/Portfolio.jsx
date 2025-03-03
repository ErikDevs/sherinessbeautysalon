import React, { useState } from "react";

const images = [
  { image: "/image1.jpg" },
  { image: "/image2.jpg" },
  { image: "/image3.jpg" },
  { image: "/image4.jpg" },
  { image: "/image5.jpg" },
  { image: "/image6.jpg" },
  { image: "/image7.jpg" },
];

const GridGallery = () => {
  // Ensure we have at least 7 images for the grid
  if (images.length < 7) return <p>Loading...</p>;

  return (
    <section className="mt-16 w-full relative">
      <h2 className="text-center text-4xl font-script mb-8">Our Portfolio</h2>
      <div className="grid-container">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.image}
            alt={`Image ${index + 1}`}
            className={`image img-${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default GridGallery;
