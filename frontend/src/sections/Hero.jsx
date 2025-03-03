import Header from "../components/Header";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AboutUs from "./About";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Expand width and height
  const width = useTransform(scrollYProgress, [0, 1], ["20%", "100%"]);
  const height = useTransform(scrollYProgress, [0, 1], ["50%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  // Fade out effect when image is fully zoomed
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

  return (
    <section className="w-full mx-auto overflow-hidden">
      <Header />
      <div className="flex w-full flex-col justify-center items-center h-[100vh]">
        <h1 className="text-7xl font-extrabold text-center">
          Unveil Your <span className="font-script text-accent">Beauty</span>,{" "}
          <br /> Embrace Your Confidence
        </h1>
        <p className="text-center max-w-3xl mt-8">
          Welcome to Shariness Beauty Salon, where elegance meets expertise.
          Step into a world of relaxation and transformation right here in
          Kenya. Let us pamper you with the best in beauty care.
        </p>
      </div>

      {/* Image that expands and fades out */}
      <div
        ref={containerRef}
        className="w-full flex justify-center items-center"
      >
        <motion.img
          className="object-cover absolute -bottom-[20vh] z-10 rounded-[32px]"
          src="/image4.jpg"
          alt=""
          style={{ width, height, scale, opacity }}
          transition={{ type: "tween", ease: easeInOut, duration: 0.5 }}
        />
      </div>

      {/* New Section Revealed After Transition */}

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
