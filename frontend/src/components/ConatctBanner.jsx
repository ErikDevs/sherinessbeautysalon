import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { IoLogoTiktok } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const iconSize = 20;

const ConatctBanner = () => {
  return (
    <motion.div
      id="contactBanner"
      className="justify-center my-4 flex w-full h-14  rounded-b-lg items-center"
    >
      <div className="w-full px-12 flex flex-col md:flex-row gap-4 justify-around py-5">
        <h2 className="flex items-center gap-x-2">
          <IoLogoWhatsapp size={iconSize} /> | <MdAddCall size={iconSize} />{" "}
          +254 (741) 051 822
        </h2>
        <h2 className="flex items-center gap-x-2">
          <IoLogoTiktok className="text-accent" size={iconSize} />{" "}
          <FaFacebookF className="text-accent" size={iconSize} />{" "}
          <FaInstagram size={iconSize} className="text-accent" /> @Sheriness
        </h2>
      </div>
    </motion.div>
  );
};

export default ConatctBanner;
