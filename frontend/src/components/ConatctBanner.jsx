import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { IoLogoTiktok } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ConatctBanner = () => {
  return (
    <section className="px-6 -mt-10  h-16">
      <div className="justify-center flex items-center   w-full ">
        <div className="md:w-1/2 w-full p-8 flex flex-col md:flex-row gap-4 justify-center bg-gradient-to-tr from-pink-600 to-purple-600 text-primary rounded-2xl drop-shadow-md">
          <h2 className="flex items-center gap-x-2">
            <IoLogoWhatsapp size={32} /> | <MdAddCall size={32} /> +254
            741051822
          </h2>
          <h2 className="flex items-center gap-x-2">
            <IoLogoTiktok size={32} /> <FaFacebookF size={32} />{" "}
            <FaInstagram size={32} />@ Sheriness
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ConatctBanner;
