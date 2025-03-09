import Header from "../components/Header";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";

import "../index.css";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="w-full  relative h-svh items-center">
      <div className="opacity-20 absolute z-o overflow-hidden h-full  top-0 right-0 drop-shadow-md md:opacity-100">
        <img src="/model3.png" className="object-contain" alt="default" />
      </div>

      {/*hero text section*/}
      <div className="flex w-full h-full absolute z-10 items-center">
        <div className="flex flex-col max-w-lg text-primary">
          <h1 className="text-4xl font-bold">
            Unveil Your{" "}
            <span className="font-script text-5xl text-accent">Beauty</span>,{" "}
            Embrace Your Confidence
          </h1>
          <p className="text-sm leading-relaxed mt-8">
            Welcome to Shariness Salon & Cosmetics, where elegance meets
            expertise. Step into a world of relaxation and transformation right
            here in Kenya. Let us pamper you with the best in beauty care.
          </p>

          <div className="flex md:flex-row gap-4 mt-8 flex-col">
            <Button
              name="Get in touch"
              className="cursor-pointer px-5 py-3 w-full bg-gradient-to-tr from-pink-500 to-red-500"
            />
            <Button
              name="See our work"
              className="cursor-pointer text-slate-400 w-full px-5 py-3 bg-transparent ring-1 ring-purple-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
