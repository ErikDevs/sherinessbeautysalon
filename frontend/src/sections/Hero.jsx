import "../index.css";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="w-full relative py-8 overflow-hidden h-auto ">
      <div className="bg-image inset-0 -z-10 absolute"></div>
      <div className="flex flex-col-reverse max-w-7xl px-2 h-full  w-full mx-auto  justify-between gap-8 overflow-hidden items-center md:flex-row">
        <div className="mx-auto h-full  flex-col w-full justify-center flex px-4 md:px-0 text-primary">
          <div className="flex flex-col w-full">
            <h1 className="text-5xl text-center md:max-w-md md:text-left font-bold">
              Unveil Your Beauty, Embrace Your Confidence
            </h1>
            <p className="text-sm leading-loose text-center  max-w-md md:text-left mt-8">
              Welcome to Sheriness Salon & Cosmetics, where elegance meets
              expertise. Step into a world of relaxation and transformation
              right here in Kenya. Let us pamper you with the best in beauty
              care.
            </p>
          </div>
          <div className="flex gap-4  md:flex-row flex-col my-8">
            <Button
              name="Get in touch"
              href="#contact"
              className="cursor-pointer bg-purple-500"
            />
            <Button
              name="See our work"
              href="#portfolio"
              className="cursor-pointer border-2 "
            />
          </div>
        </div>

        <div className="overflow-hidden w-full">
          <img
            src="/heropng.png"
            className="object-cover w-full h-full"
            alt="default"
          />
        </div>
      </div>
      <div className="justify-center hidden md:flex -mt-24">
        <a href="#contactBanner">
          <img src="/lottie.gif" width={38} className="cursor-pointer" alt="" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
