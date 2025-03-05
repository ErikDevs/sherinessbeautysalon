import Header from "../components/Header";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";

import "../index.css";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="w-full relative h-svh mx-auto px-6 md:px-10 bg-gray-950 overflow-hidden">
      <Header />

      <div className="flex flex-col gap-4 max-w-lg md:ml-52 h-svh justify-center text-primary">
        <h1 className="text-5xl text-center md:text-left font-extrabold">
          Unveil Your <span className="font-script text-accent">Beauty</span>,{" "}
          Embrace Your Confidence
        </h1>
        <p className=" text-center mt-8 md:text-left">
          Welcome to Shariness Beauty Salon, where elegance meets expertise.
          Step into a world of relaxation and transformation right here in
          Kenya. Let us pamper you with the best in beauty care.
        </p>

        <Button
          name="Book Now"
          className="cursor-pointer z-50 mt-8  bg-gradient-to-t from-orange-500 to-yellow-500"
        />
      </div>

      {/* Image that expands and fades out */}

      {/* New Section Revealed After Transition */}
      <motion.img
        src="/model3.png"
        className="absolute opacity-25 md:opacity-100 top-0 right-0 object-cover h-auto"
        alt="default"
        transition={{ type: "tween", ease: easeInOut, duration: 0.5 }}
      />

      <img
        src="/leave2.png"
        className="absolute bottom-0 left-0 object-cover -z-10 h-auto"
        alt="default"
        width={100}
      />
      <img
        src="/leaves.png"
        className="absolute md:right-0 block top-[50%] -right-10 object-cover -z-10 h-auto"
        alt="default"
        width={100}
      />
    </section>
  );
};

export default Hero;
