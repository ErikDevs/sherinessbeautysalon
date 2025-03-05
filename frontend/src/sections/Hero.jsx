import Header from "../components/Header";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";

import "../index.css";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="w-full relative h-svh mx-auto px-6 md:px-10 bg-gray-950 overflow-hidden">
      <Header />

      <div className="flex flex-col absolute z-10 gap-4 max-w-2xl md:ml-52 h-svh px-6 md:px-0 justify-center text-primary">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Unveil Your <span className="font-script text-accent">Beauty</span>,{" "}
          Embrace Your Confidence
        </h1>
        <p className=" text-center  text-sm md:text-lg mt-8 md:text-left">
          Welcome to Shariness Beauty Salon, where elegance meets expertise.
          Step into a world of relaxation and transformation right here in
          Kenya. Let us pamper you with the best in beauty care.
        </p>

        <Button
          name="Book Now"
          className="cursor-pointer mt-8  max-w-sm bg-gradient-to-t from-orange-500 to-yellow-500"
        />
      </div>

      {/* Image that expands and fades out */}

      {/* New Section Revealed After Transition */}
      <motion.img
        src="/model3.png"
        className="absolute opacity-35  md:opacity-100 top-0 right-0 object-cover h-auto"
        alt="default"
        transition={{ type: "tween", ease: easeInOut, duration: 0.5 }}
      />
    </section>
  );
};

export default Hero;
