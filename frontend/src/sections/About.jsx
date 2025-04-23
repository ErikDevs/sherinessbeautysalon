import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { motion } from "framer-motion";
import "../index.css";
import Commitement from "../components/Commitement";

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
      className=" items-center flex p-2"
    >
      <div className="max-w-7xl w-full mx-auto">
        {/* mission and vision */}
        <div className="flex  justify-center gap-2 flex-col  md:flex-row">
          <div className="flex flex-col w-full bg-purple-500 p-6 rounded-md text-primary">
            <h1 className="font-bold text-4xl">About Us</h1>
            <p className="py-9 text-sm leading-relaxed">
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
              className=" flex  h-[300px] flex-col hovered  rounded-md  overflow-clip justify-center items-center relative"
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
                <p className="mt-8 text-base text-primary">{statement.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
