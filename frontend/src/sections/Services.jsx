import React from "react";
import "../index.css";
import { motion } from "framer-motion";

const services = [
  { title: "Hair Services", image: "/service2.jpg" },
  { title: "Nails", image: "/service4.jpg" },
  { title: "Facial Treament", image: "/service1.jpg" },
  { title: "Makeup & Bridal Services", image: "/service3.jpg" },
];

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="services"
      className="mt-16 content px-4 md:px-0 bg-slate-100 py-6 rounded-md text-primary"
    >
      <h2 className="font-script text-3xl my-8 font-bold text-black text-center">
        Our Services
      </h2>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-[350px]  hovered bg-accent rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full flex items-center justify-center z-20">
                <h2 className="text-xl">{service.title}</h2>
              </div>
              <div className="absolute w-full h-full z-0 opacity-75 inset-0 bg-black"></div>

              <img
                className="scale object-cover object-center transition-all duration-300 ease-linear"
                src={service.image}
                alt="image"
                width={500}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
