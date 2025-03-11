import Masonry from "react-masonry-css";
const images = [
  { image: "/image1.jpg" },
  { image: "/image2.jpg" },
  { image: "/image3.jpg" },
  { image: "/image4.jpg" },
  { image: "/image5.jpg" },
  { image: "/image6.jpg" },
  { image: "/image7.jpg" },
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const GridGallery = () => {
  // Ensure we have at least 7 images for the grid
  if (images.length < 7) return <p>Loading...</p>;

  return (
    <section id="portfolio" className="mt-16 rounded-2xl p-2 bg-purple-300">
      <h2 className="text-center text-secondary text-4xl font-script my-4">
        Our Portfolio
      </h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex justify-center gap-2"
        columnClassName="masonry-column"
      >
        {images.map((src, index) => (
          <div key={index} className="masonry-item">
            <img
              src={src.image}
              alt={`img-${index}`}
              className="w-full rounded-md mb-1"
            />
          </div>
        ))}
      </Masonry>
    </section>
  );
};

export default GridGallery;
