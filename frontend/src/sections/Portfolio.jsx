import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const GridGallery = () => {
  // Ensure we have at least 7 images for the grid
  if (images.length < 7) return <p>Loading...</p>;

  return (
    <motion.section
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="portfolio"
      className="mt-16 p-2 min-h-screen w-full mx-auto bg-violet-500"
    >
      <h2 className="text-center text-secondary text-4xl font-semibold font-script my-4">
        Our Portfolio
      </h2>
      <Carousel
        className="mt-16 max-w-7xl w-full mx-auto"
        focusOnSelect={true}
        autoPlay={true}
        showDots={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="h-[28rem] flex rounded-md justify-center mx-2 items-center overflow-hidden"
          >
            <img
              src={src.image}
              alt={`img-${index}`}
              className="w-full h-full object-cover rounded-md mb-1"
            />
          </div>
        ))}
      </Carousel>
    </motion.section>
  );
};

export default GridGallery;
