import "../index.css";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-tr from-violet-800 via-violet-600 overflow-hidden mx-auto to-white">
      <div className="max-w-7xl flex justify-between items-center w-full md:flex-row flex-col-reverse mx-auto">
        <div className="flex h-full justify-center mx-auto  px-1 flex-col max-w-xl text-primary">
          <h1 className="text-4xl font-extrabold">
            Unveil Your
            <span className="font-script text-5xl text-black"> Beauty, </span>
            Embrace Your Confidence.
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
              className="cursor-pointer px-6 py-3 hover:bg-transparent hover:border w-full bg-black"
            />
            <Button
              name="See our work"
              href="#portfolio"
              className="cursor-pointer hover:bg-black hover:border-none px-6 border py-3 bg-transparent "
            />
          </div>
        </div>

        <div className="overflow-hidden w-[20rem] md:w-[24rem]">
          <img
            src="/model3.png"
            className="object-contain w-full h-full"
            alt="default"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
