import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { IoLogoTiktok } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const ConatctBanner = () => {
  return (
    <motion.div
      id="contactBanner"
      className="justify-center flex w-full items-center"
    >
      <div className="w-full px-12 py-8 flex flex-col md:flex-row gap-4 justify-around bg-black text-primary z-10">
        <h2 className="flex items-center gap-x-2">
          <IoLogoWhatsapp size={32} /> | <MdAddCall size={32} /> +254 741051822
        </h2>
        <h2 className="flex items-center gap-x-2">
          <IoLogoTiktok size={32} /> <FaFacebookF size={32} />{" "}
          <FaInstagram size={32} />@ Sheriness
        </h2>
      </div>
    </motion.div>
  );
};

export default ConatctBanner;
