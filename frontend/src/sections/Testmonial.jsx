import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

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

const testmonials = [
  {
    src: "/model1.jpg",
    name: "Mary N",
    rating: 5,
    testmony:
      "I always leave Shariness Beauty Salon feeling like a queen! The staff is friendly, and their services are top-notch.",
  },
  {
    src: "/model1.jpg",
    name: "Mary N",
    rating: 5,
    testmony:
      "I always leave Shariness Beauty Salon feeling like a queen! The staff is friendly, and their services are top-notch.",
  },
  {
    src: "/model1.jpg",
    name: "Mary N",
    rating: 5,
    testmony:
      "I always leave Shariness Beauty Salon feeling like a queen! The staff is friendly, and their services are top-notch. ",
  },
];

const Testmonial = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="bg-image-1 py-16 mt-16 rounded-2xl overflow-hidden w-full relative"
    >
      <div className="flex items-center relative justify-center flex-col  ">
        <h1 className="text-center font-script font-semibold text-primary text-4xl">
          Testmonials
        </h1>
        <h2 className="text-center mt-4 text-primary">
          What Clients are saying about Us
        </h2>

        <Carousel
          className="mt-16 max-w-7xl  w-full mx-auto"
          focusOnSelect={true}
          autoPlay={true}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={responsive}
        >
          {testmonials.map((testmonial) => (
            <div key={testmonial.name} className="mx-2">
              <div className="w-full flex justify-center ">
                <div className="w-[5rem] h-[5rem] overflow-clip  rounded-full">
                  <img
                    src={testmonial.src}
                    className="object-contain"
                    alt="default"
                  />
                </div>
              </div>
              <div className="bg-primary text-secondary -mt-12 mb-4  rounded-2xl p-6">
                <div className="flex mt-8 justify-between">
                  <h2 className="text-base">{testmonial.name}</h2>
                  <div className="flex">
                    {Array(testmonial.rating)
                      .fill("⭐")
                      .map((rating, index) => (
                        <div key={index}>{rating}</div>
                      ))}
                  </div>
                </div>
                <p className="mt-2">{testmonial.testmony}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </motion.section>
  );
};

export default Testmonial;
