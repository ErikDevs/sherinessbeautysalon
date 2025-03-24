import "../index.css";
import Button from "../components/Button";
import Header from "../components/Header";

const Hero = () => {
  return (
    <section className="w-full relative py-6 min-h-screen">
      <div className="bg-image inset-0 -z-10 absolute"></div>
      <div className="flex flex-col-reverse justify-between items-center md:flex-row">
        <div className="mx-auto h-full flex-col md:w-1/2 px-4 md:px-0 text-primary">
          <h1 className="text-4xl md:text-6xl text-center md:text-left font-bold">
            Unveil Your Beauty, Embrace Your Confidence
          </h1>
          <p className="text-base leading-loose text-center md:text-left my-4">
            Welcome to Sheriness Salon & Cosmetics, where elegance meets
            expertise. Step into a world of relaxation and transformation right
            here in Kenya. Let us pamper you with the best in beauty care.
          </p>

          <div className="flex gap-4 w-full md:flex-row flex-col mt-8">
            <Button
              name="Get in touch"
              href="#contact"
              className="cursor-pointer px-6 py-3 hover:bg-transparent hover:border-2 w-full bg-purple-500"
            />
            <Button
              name="See our work"
              href="#portfolio"
              className="cursor-pointer w-full hover:bg-violet-500 hover:border-none px-6 border-2 py-3 bg-transparent "
            />
          </div>
        </div>

        <div className="overflow-hidden w-[250px] md:mt-12 md:w-[24rem]">
          <img
            src="/model3.png"
            className="object-cover w-full h-full"
            alt="default"
          />
        </div>
      </div>
      <div className="justify-center hidden md:flex -mt-24">
        <a href="#contactBanner">
          <img src="/lottie.gif" className="w-12 cursor-pointer" alt="" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
