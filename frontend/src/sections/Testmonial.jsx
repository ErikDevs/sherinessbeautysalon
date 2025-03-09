import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../index.css";

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
    <section className=" bg-image py-16  mt-16 rounded-2xl overflow-hidden w-full relative ">
      <h1 className="text-center font-script text-primary  text-4xl">
        Testmonials
      </h1>
      <h2 className="text-center mt-4  text-primary">
        What Clients are saying about Us
      </h2>

      <Carousel
        className="mt-16"
        partialVisbile={true}
        focusOnSelect={true}
        autoPlay={true}
        showDots={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}
      >
        {testmonials.map((testmonial) => (
          <div key={testmonial.name} className="mx-2">
            <div className="w-full flex justify-center ">
              <div className="w-[5rem] h-[5rem] overflow-clip rounded-full">
                <img
                  src={testmonial.src}
                  className="object-contain rounded-full"
                  alt="default"
                />
              </div>
            </div>
            <div className="bg-purple-100 -mt-8 mb-4  rounded-2xl p-6">
              <div className="flex mt-8 justify-between">
                <h2 className="text-xl font-script">{testmonial.name}</h2>
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
      <div className="flex w-full justify-center  mt-8">
        <div className="flex flex-col  bg-purple-900  drop-shadow-md text-primary p-6 rounded-2xl w-full md:max-w-2xl">
          <h2 className="text-center  text-2xl my-2">
            Join Our Journey to Greatness
          </h2>
          <form
            className="flex justify-between flex-col gap-y-2 md:flex-row text-secondary"
            action=""
          >
            <input
              type="text"
              className="w-full px-6 py-3 rounded-xl md:rounded-none md:rounded-l-xl   outline-none"
              placeholder="Enter your email"
            />
            <button
              className="px-6 py-3 rounded-xl md:rounded-r-xl md:rounded-none text-primary bg-gradient-to-tr from-pink-500 to-purple-500"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testmonial;
