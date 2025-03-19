import "../index.css";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden min-h-screen mx-auto bg-black">
      <div className="max-w-7xl flex pb-6 md:pb-0 justify-between items-center w-full md:flex-row flex-col-reverse mx-auto">
        <div className="flex h-full justify-center mx-auto  px-1 flex-col max-w-xl text-primary">
          <h1 className="text-4xl font-extrabold">
            Unveil Your Beauty, Embrace Your Confidence
            <span className="text-black">.</span>
          </h1>
          <p className="text-base leading-loose mt-8">
            Welcome to Sheriness Salon & Cosmetics, where elegance meets
            expertise. Step into a world of relaxation and transformation right
            here in Kenya. Let us pamper you with the best in beauty care.
          </p>

          <div className="flex gap-4 mt-8">
            <Button
              name="Get in touch"
              href="#contact"
              className="cursor-pointer px-6 py-3 hover:bg-transparent hover:border-2 w-full bg-violet-500"
            />
            <Button
              name="See our work"
              href="#portfolio"
              className="cursor-pointer hover:bg-violet-500 hover:border-none px-6 border-2 py-3 bg-transparent "
            />
          </div>
        </div>

        <div className="overflow-hidden w-[20rem]  md:mt-8 md:w-[24rem]">
          <img
            src="/model3.png"
            className="object-contain w-full h-full"
            alt="default"
          />
        </div>
      </div>
      <div className="justify-center hidden md:flex -mt-32">
        <a href="#contactBanner">
          <img src="/lottie.gif" className="w-12 cursor-pointer" alt="" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
