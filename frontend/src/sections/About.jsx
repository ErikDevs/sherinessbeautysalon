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
    <section className="-mt-16 pt-24 pb-8 bg-gradient-to-bl from-pink-600 to-purple-500 text-secondary">
      {/* mission and vision */}
      <div className="flex justify-center flex-col md:flex-row  items-center">
        <div className="flex flex-col">
          <h1 className="font-script text-4xl font-bold text-primary">
            Who we are
          </h1>
          <p className="mt-8 max-w-md">
            At Sheriness Beauty Salon, we believe that beauty is more than just
            appearance—its about feeling confident, refreshed, and empowered.
            Our experienced stylists and beauty experts are dedicated to
            providing top-tier hair, skincare, and grooming services tailored to
            your unique style.
          </p>
        </div>
        <div className="flex flex-col justify-center  mt-16 items-center p-6  md:flex-row gap-4">
          {statements?.map((statement, index) => (
            <div
              key={index}
              className=" flex max-w-sm h-[300px] flex-col hovered bg-purple-100/60 rounded-2xl  overflow-clip justify-center items-center relative"
            >
              <img
                src={statement.src}
                height={100}
                alt="default"
                className="scale transition-transform duration-300 ease-linear"
              />

              <div className="max-w-sm absolute bg-black/75 h-full z-40  p-6">
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
      </div>

      {/* commitment */}
      <div className="mt-8 w-full flex-col items-center gap-8 flex justify-center ">
        <h2 className="text-xl font-bold font-sans text-primary">
          Our Commitment
        </h2>
        <p className="text-start max-w-2xl">
          <span className="font-bold text-primary">Quality Service</span> – We
          use premium products and the latest techniques to ensure the best
          results. <br />
          <span className="font-bold text-primary">
            Customer Satisfaction
          </span>{" "}
          – Your comfort and happiness are our priority. <br />
          <span className="font-bold text-primary">Hygiene & Care</span> – We
          maintain the highest standards of cleanliness and safety. <br />
          <span className="font-bold text-primary">
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
