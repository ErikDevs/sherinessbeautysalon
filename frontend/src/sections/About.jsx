import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import "../index.css";

const statements = [
  {
    title: "Our Mission",
    text: "To enhance natural beauty and boost confidence by offering high-quality, professional beauty services in a warm and welcoming environment.",
    src: "/model2.jpg",
    icon: <MdOutlineWorkspacePremium />,
  },
  {
    title: "Our Vision",
    text: "To be the go-to beauty destination in Kenya, setting the standard for excellence in hair, skin, and beauty care.",
    src: "/model1.jpg",
    icon: <HiOutlineLightBulb />,
  },
];
const AboutUs = () => {
  return (
    <section className="mt-16 rounded-2xl p-2 drop-shadow-md bg-purple-200">
      {/* mission and vision */}
      <div className="flex justify-center gap-2 flex-col md:flex-row">
        <div className="flex flex-col w-full bg-purple-400 h-fit p-6 rounded-xl text-primary">
          <h1 className="font-script text-5xl text-secondary ">About Us</h1>
          <p className="py-9 leading-relaxed">
            At Sheriness Beauty Salon, we believe that beauty is more than just
            appearance—its about feeling confident, refreshed, and empowered.
            Our experienced stylists and beauty experts are dedicated to
            providing top-tier hair, skincare, and grooming services tailored to
            your unique style.
          </p>
        </div>
          {statements?.map((statement, index) => (
            <div
              key={index}
              className=" flex  h-[300px] flex-col hovered bg-purple-100/60 rounded-xl  overflow-clip justify-center items-center relative"
            >
              <img
                src={statement.src}
                alt="default"
                className="scale transition-transform duration-300 ease-linear"
              />

              <div className="absolute bg-black/75 h-full z-40  p-6">
                <h2 className="mt-8 text-primary text-xl flex items-center gap-x-4 font-bold">
                  <i className="flex justify-center items-center bg-gradient-to-bl from-purple-500 to-pink-500 rounded-full p-2">
                    {statement.icon}
                  </i>
                  {statement.title}
                </h2>
                <p className="mt-8 text-primary">{statement.text}</p>
              </div>
            </div>
          ))}

      </div>

      {/* commitment */}
      <div className="mt-2 w-full p-3 bg-purple-500 flex-col rounded-xl items-center gap-8 flex justify-center ">
        <h2 className="text-lg font-bold font-sans text-secondary">
          Our Commitment
        </h2>
        <p className="text-start max-w-2xl">
          <span className="font-bold text-secondary">Quality Service</span> – We
          use premium products and the latest techniques to ensure the best
          results. <br />
          <span className="font-bold text-secondary">
            Customer Satisfaction
          </span>{" "}
          – Your comfort and happiness are our priority. <br />
          <span className="font-bold text-secondary">Hygiene & Care</span> – We
          maintain the highest standards of cleanliness and safety. <br />
          <span className="font-bold text-secondary">
            Personalized Experience{" "}
          </span>{" "}
          – Every client is unique, and we tailor our services to meet your
          needs.
        </p>
        <p className="max-w-2xl">
          Whether you're looking for a fresh new look or a simple touch-up, we
          ensure every visit leaves you looking and feeling your best.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
