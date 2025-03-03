import Header from "../components/Header";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animate the width from 50% to 100vw (full viewport width)
  const width = useTransform(scrollYProgress, [0, 1], ["30%", "90vw"]);
  const height = useTransform(scrollYProgress, [0, 1], ["100%", "90vh"]); // Expand height to fill viewport
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]); // Optional zoom effect

  return (
    <section className="w-full h-[100vh] mx-auto overflow-hidden">
      <Header />
      <div className="flex w-full flex-col justify-center items-center h-full ">
        <h1 className="text-6xl font-bold text-center ">
          Unveil Your <span className="font-script text-accent">Beauty</span>,{" "}
          <br /> Embrace Your Confidence
        </h1>
        <p className="text-center max-w-3xl mt-8">
          Welcome to Shariness Beauty Salon, where elegance meets expertise.
          Step into a world of relaxation and transformation right here in
          Kenya. Let us pamper you with the best in beauty care.
        </p>
      </div>
      <div
        ref={containerRef}
        className="w-full flex justify-center items-center"
      >
        <motion.img
          className="object-cover absolute z-10 -bottom-[35rem] rounded-[32px]"
          src="/image4.jpg"
          alt=""
          inherit={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ width, height, scale }} // Bind animation properties
          transition={{ type: "tween", ease: easeInOut, duration: 0.5 }}
        />
      </div>

      <img
        src="/leave2.png"
        className="absolute bottom-0 left-0 object-cover -z-10 h-auto"
        alt="default"
      />
      <img
        src="/leaves.png"
        className="absolute right-0 top-[20%] object-cover -z-10 h-auto"
        alt="default"
      />
    </section>
  );
};

export default Hero;
