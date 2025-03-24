import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { motion } from "framer-motion";
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
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="about"
      className=" items-center flex p-2 min-h-screen drop-shadow-md"
    >
      <div className="max-w-7xl w-full mx-auto">
        {/* mission and vision */}
        <div className="flex  justify-center gap-2 flex-col  md:flex-row">
          <div className="flex flex-col w-full bg-purple-500 p-6 rounded-xl text-primary">
            <h1 className="font-script md:text-5xl text-4xl">About Us</h1>
            <p className="py-9 leading-relaxed">
              At Sheriness Beauty Salon, we believe that beauty is more than
              just appearance—its about feeling confident, refreshed, and
              empowered. Our experienced stylists and beauty experts are
              dedicated to providing top-tier hair, skincare, and grooming
              services tailored to your unique style.
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

        <div className="mt-2 overflow-clip justify-center p-3 bg-black flex-col rounded-xl items-center gap-8 text-primary flex md:flex-row  ">
          <div className="flex-col  flex">
            <h2 className="text-4xl text-center my-4 font-semibold font-script text-primary">
              Our Commitment
            </h2>
            <p className="my-2">
              <span className="font-bold my-2 leading-relaxed ">
                Quality Service
              </span>
              – We use premium products and the latest techniques to ensure the
              best results.
            </p>
            <p className="my-2">
              <span className="font-bold  leading-relaxed ">
                Customer Satisfaction
              </span>{" "}
              -Your comfort and happiness are our priority.
            </p>
            <p className="my-2">
              <span className="font-bold leading-relaxed ">Hygiene & Care</span>{" "}
              – We maintain the highest standards of cleanliness and safety.
            </p>
            <p className="my-2">
              <span className="font-bold ">Personalized Experience</span> –
              Every client is unique, and we tailor our services to meet your
              needs.
            </p>
            <p className="max-w-2xl my-4">
              Whether you're looking for a fresh new look or a simple touch-up,
              we ensure every visit leaves you looking and feeling your best.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
