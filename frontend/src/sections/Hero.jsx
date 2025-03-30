import "../index.css";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="w-full relative py-6 md:h-[100vh] overflow-hidden">
      <div className="bg-image inset-0 -z-10 absolute"></div>
      <div className="flex flex-col-reverse justify-between overflow-hidden items-center md:flex-row">
        <div className="mx-auto h-full flex-col md:max-w-4xl px-4 md:px-0 text-primary">
          <h1 className="text-4xl md:text-7xl  text-center md:text-left font-bold">
            Unveil Your Beauty, Embrace Your Confidence
          </h1>
          <p className="text-base leading-loose text-center max-w-xl md:text-left mt-8">
            Welcome to Sheriness Salon & Cosmetics, where elegance meets
            expertise. Step into a world of relaxation and transformation right
            here in Kenya. Let us pamper you with the best in beauty care.
          </p>

          <div className="flex gap-4 w-full md:flex-row flex-col mt-16">
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

        <div className="overflow-hidden md:mt-12 max-w-sm md:max-w-lg">
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
