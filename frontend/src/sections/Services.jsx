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
    <section className="mt-16 content bg-accent -rotate-1 text-primary py-16 md:-ml-32">
      <h2 className="font-script text-5xl text-center md:ml-32">
        Our Services
      </h2>
      <div className="flex justify-center mt-8 md:ml-32">
        <div className="flex flex-wrap gap-4 w-full justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="h-[315px] hovered bg-accent rounded-2xl shadow-md overflow-clip w-[350px]"
            >
              <div className="flex justify-center">
                <h2 className="absolute text-center  mt-4 text-xl">
                  {service.title}
                </h2>
                <img
                  className="scale transition-transform duration-300 ease-linear"
                  src={service.image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
