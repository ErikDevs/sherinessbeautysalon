import React from "react";

const Commitement = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="mt-2 overflow-hidden max-w-xl px-4 border rounded-lg items-center flex md:flex-row">
        <div className="flex-col flex">
          <h2 className="text-3xl my-4 font-bold">Our Commitment</h2>
          <div className="text-black">
            <p className="my-2 text-base ">
              <span className="font-semibold my-2 leading-relaxed ">
                Quality Service
              </span>
              – We use premium products and the latest techniques to ensure the
              best results.
            </p>
            <p className="my-2 text-base">
              <span className="font-semibold leading-relaxed ">
                Customer Satisfaction
              </span>{" "}
              -Your comfort and happiness are our priority.
            </p>
            <p className="my-2 text-base">
              <span className="font-semibold leading-relaxed ">
                Hygiene & Care
              </span>{" "}
              – We maintain the highest standards of cleanliness and safety.
            </p>
            <p className="my-2 text-base">
              <span className="font-bold ">Personalized Experience</span> –
              Every client is unique, and we tailor our services to meet your
              needs.
            </p>
            <p className="text-sm my-8">
              Whether you're looking for a fresh new look or a simple touch-up,
              we ensure every visit leaves you looking and feeling your best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitement;
