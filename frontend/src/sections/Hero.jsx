import Header from "../components/Header";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";

import "../index.css";
import Button from "../components/Button";
import ConatctBanner from "../components/ConatctBanner";

const Hero = () => {
  return (
    <>
      <section className="w-full relative h-screen flex flex-col justify-between">
        {/*hero text section*/}
        <div className="flex h-full justify-center px-1 z-30 flex-col max-w-xl text-primary">
          <h1 className="text-5xl font-bold">
            Unveil Your{" "}
            <span className="font-script text-5xl text-accent">Beauty</span>,
            Embrace Your Confidence
          </h1>
          <p className="text-base leading-relaxed mt-8">
            Welcome to Sheriness Salon & Cosmetics, where elegance meets
            expertise. Step into a world of relaxation and transformation right
            here in Kenya. Let us pamper you with the best in beauty care.
          </p>

          <div className="flex gap-4 mt-8">
            <Button
              name="Get in touch"
              href="#contact"
              className="cursor-pointer px-5 py-3 hover:bg-transparent hover:from-transparent hover:to-transparent hover:ring-1 ring-primary w-full bg-gradient-to-tr from-pink-700 to-purple-700"
            />
            <Button
              name="See our work"
              href="#portfolio"
              className="cursor-pointer hover:bg-gradient-to-tr hover:from-pink-700 hover:to-purple-700 text-sprimary w-full hover:ring-0 px-5 py-3 bg-transparent ring-1 ring-purple-100"
            />
          </div>
        </div>
        <div className="opacity-60 h-full overflow-hidden w-[512px] absolute top-0 right-0 md:opacity-100">
          <img
            src="/model3.png"
            className="object-cover w-full h-full"
            alt="default"
          />
        </div>
        <ConatctBanner />
      </section>
    </>
  );
};

export default Hero;
