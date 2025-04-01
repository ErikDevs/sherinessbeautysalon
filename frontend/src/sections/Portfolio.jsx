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
      className="mt-16 p-2 w-full mx-auto"
    >
      <h2 className="text-center text-secondary text-4xl font-semibold font-script my-4">
        Our Portfolio
      </h2>
      <Carousel
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        className="max-w-7xl mx-auto w-full pb-8"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="h-[32rem] flex rounded-2xl justify-center mx-2 items-center overflow-hidden"
          >
            <img
              src={src.image}
              alt={`img-${index}`}
              className="w-full h-full object-top object-cover rounded-md mb-1"
            />
          </div>
        ))}
      </Carousel>
    </motion.section>
  );
};

export default GridGallery;
