import React from "react";
import "../index.css";

const services = [
  { title: "Hair Services", image: "/service2.jpg" },
  { title: "Nails", image: "/service4.jpg" },
  { title: "Facial Treament", image: "/service1.jpg" },
  { title: "Makeup & Bridal Services", image: "/service3.jpg" },
];

const Services = () => {
  return (
    <section className="mt-8 content md:px-0 text-primary">
      <h2 className="font-script text-5xl text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto w-full mt-8 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative border-spacing-0 border-b-4 border-r-4 border-purple-500 hovered bg-accent rounded-2xl shadow-md overflow-clip"
          >
            <div className="absolute w-full h-full z-0 opacity-75 inset-0 bg-black"></div>
            <div className="absolute  inset-0 w-full h-full flex items-center justify-center z-20">
              <h2 className="text-xl">{service.title}</h2>
            </div>
            <div className="overflow-hidden  h-[20rem] w-full">
              <img
                className="w-full scale  object-cover transition-all duration-300 ease-linear"
                src={service.image}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
