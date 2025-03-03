import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
const AboutUs = () => {
  return (
    <section className="mt-32 p-6 bg-accent text-secondary">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-script text-4xl text-center text-primary">
          About Us
        </h1>
        <p className="mt-8 max-w-5xl text-center">
          At Sheriness Beauty Salon, we believe that beauty is more than just
          appearance—its about feeling confident, refreshed, and empowered. Our
          experienced stylists and beauty experts are dedicated to providing
          top-tier hair, skincare, and grooming services tailored to your unique
          style.
        </p>
      </div>
      <div className="flex justify-center mt-16">
        <div className="flex gap-4">
          <div className="flex flex-col justify-center items-center relative">
            <div className="w-[300px] h-[280px] rounded-2xl overflow-clip">
              <img src="/model2.jpg" alt="default" />
            </div>
            <div className=" ring-white absolute bg-accent p-2 rounded-full bottom-[30%] z-50  ring-2">
              <MdOutlineWorkspacePremium
                className="ww-full h-full text-primary"
                size={48}
              />
            </div>
            <div className="w-[300px]">
              <h2 className="text-center mt-8 text-xl font-bold">
                Our Mission
              </h2>
              <p className="text-center">
                To enhance natural beauty and boost confidence by offering
                high-quality, professional beauty services in a warm and
                welcoming environment.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center relative">
            <div className="w-[300px] h-[280px] rounded-2xl overflow-clip">
              <img src="/model2.jpg" alt="default" />
            </div>
            <div className=" ring-white absolute p-2 bg-accent rounded-full bottom-[30%] z-50  ring-2">
              <HiOutlineLightBulb
                size={48}
                className="text-primary w-full h-full"
              />
            </div>
            <div className="w-[300px]">
              <h2 className="text-center mt-8 text-xl font-bold">Our Vision</h2>
              <p className="text-center">
                To enhance natural beauty and boost confidence by offering
                high-quality, professional beauty services in a warm and
                welcoming environment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full flex-col items-center gap-8 flex justify-center ">
        <h2 className="text-xl font-bold font-sans">Our Commitment</h2>
        <p className="text-start max-w-2xl">
          <span className="font-bold">Quality Service</span> – We use premium
          products and the latest techniques to ensure the best results. <br />
          <span className="font-bold">Customer Satisfaction</span> – Your
          comfort and happiness are our priority. <br />
          <span className="font-bold">Hygiene & Care</span> – We maintain the
          highest standards of cleanliness and safety. <br />
          <span className="font-bold">Personalized Experience </span> – Every
          client is unique, and we tailor our services to meet your needs.
        </p>
        <p className="text-center font-script text-xl max-w-2xl">
          Whether you're looking for a fresh new look or a simple touch-up, we
          ensure every visit leaves you looking and feeling your best.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
