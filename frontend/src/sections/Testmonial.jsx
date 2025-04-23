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
    src: "/model2.jpg",
    name: "Mary N",
    rating: 5,
    testmony:
      "I always leave Shariness Beauty Salon feeling like a queen! The staff is friendly, and their services are top-notch.",
  },
  {
    src: "/model3.png",
    name: "Mary N",
    rating: 5,
    testmony:
      "I always leave Shariness Beauty Salon feeling like a queen! The staff is friendly, and their services are top-notch. ",
  },
  {
    src: "/model1.jpg",
    name: "Mary N",
    rating: 5,
    testmony:
      "I always leave Shariness Beauty Salon feeling like a queen! The staff is friendly, and their services are top-notch. ",
  },
  {
    src: "/model3.png",
    name: "Mary N",
    rating: 5,
    testmony:
      "I always leave Shariness Beauty Salon feeling like a queen! The staff is friendly, and their services are top-notch. ",
  },
  {
    src: "/model4.jpg",
    name: "Mary N",
    rating: 5,
    testmony:
      "I always leave Shariness Beauty Salon feeling like a queen! The staff is friendly, and their services are top-notch. ",
  },
  {
    src: "/model3.png",
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
      className="py-16 mt-16 rounded-2xl overflow-hidden  w-full relative"
    >
      <div className="flex items-center relative justify-center flex-col  ">
        <h1 className="text-center text-secondary font-script font-bold text-4xl">
          Testmonials
        </h1>
        <h2 className="text-center  text-secondary">
          What Clients are saying about Us
        </h2>

        <Carousel
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={5000}
          autoPlay={true}
          shouldResetAutoplay={true}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          className="max-w-7xl mx-auto py-16 w-full flex justify-between gap-8 items-center"
        >
          {testmonials.map((testmonial) => (
            <div key={testmonial.name} className="m-4 border rounded-lg">
              <div className="w-full flex justify-center "></div>
              <div className=" text-secondary py-2 px-4 rounded-md">
                <div className="flex mt-8 justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-[2rem] h-[2rem] overflow-hidden ring ring-offset-1 ring-accent rounded-full">
                      <img
                        src={testmonial.src}
                        className="object-contain"
                        alt="default"
                      />
                    </div>
                    <h2 className="text-base font-bold text-secondary">
                      {testmonial.name}
                    </h2>
                  </div>
                  <div className="flex">
                    {Array(testmonial.rating)
                      .fill("⭐")
                      .map((rating, index) => (
                        <div key={index}>{rating}</div>
                      ))}
                  </div>
                </div>
                <p className="my-8 text-sm max-w-xs text-slate-500 leading-relaxed">
                  {testmonial.testmony}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </motion.section>
  );
};

export default Testmonial;
