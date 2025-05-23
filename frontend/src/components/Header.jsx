import React, { useEffect, useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import "../index.css";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Gallery", href: "#portfolio" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Run on mount
    handleScroll();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isActive, setisActive] = useState(0);
  return (
    <motion.header
      className={`${
        isScrolled ? " opacity-75" : "opacity-100"
      } w-full z-40 mx-auto px-2 h-12 fixed transition-all duration-300 bg-black
      }`}
    >
      <nav className="md:flex h-full hidden max-w-7xl w-full mx-auto justify-between items-center">
        <img
          src="/sherinessLogo.png"
          width={150}
          alt="default"
          className="drop-shadow-sm"
        />

        <ul className="flex gap-4 text-sm items-center">
          {navLinks.map((navLink, index) => (
            <li
              className={`${
                isActive === index ? "text-purple-500" : "text-white"
              } cursor-pointer rounded-full hover:text-teal-400 transition-colors duration-300 ease-linear`}
              key={navLink.name}
              onClick={() => setisActive(index)}
            >
              <a href={navLink.href}>{navLink.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* mobile nav */}
      <nav className="md:hidden w-full">
        <div className="flex items-center justify-between">
          <img src="/sherinessLogo.png" width={200} alt="default" />
          {isMenuOpen ? (
            <IoIosCloseCircleOutline
              size={32}
              className="cursor-pointer mx-2 text-primary"
              onClick={() => setisMenuOpen(false)}
            />
          ) : (
            <HiMiniBars3BottomRight
              size={32}
              className="cursor-pointer mx-2 text-primary"
              onClick={() => setisMenuOpen(true)}
            />
          )}
        </div>
        {isMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, height: "-100%" }}
            animate={{ opacity: 1, height: "100%" }}
            transition={{ duration: 1, delay: 0, ease: "easeInOut" }}
            className="flex text-primary h-svh flex-col gap-y-6 items-start py-8 px-12 justify-start"
          >
            {navLinks?.map((navLink, index) => (
              <li
                key={navLink.name}
                onClick={() => {
                  setisActive(index);
                  setisMenuOpen(false);
                }}
                className={` hover:bg-purple-500  px-5 py-4 show-arrow transition-all duration-500 ease-in-out rounded-2xl  flex items-center justify-between  w-full`}
              >
                <a href={navLink.href}>{navLink.name}</a>

                <span className="hidden hasArrow">
                  <MdArrowOutward />
                </span>
              </li>
            ))}
          </motion.ul>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
