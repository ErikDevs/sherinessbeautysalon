import React, { useState } from "react";
import Button from "./Button";
import { useMotionValueEvent, motion, useScroll } from "framer-motion";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact Us", href: "#contact" },
];

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest === 0) {
      setHidden(false); // Normal state before 100
    } else if (latest > 0 && latest < 200) {
      setHidden(true); // Hide between 100px and 200px
    } else if (latest > 500) {
      setHidden(false); // Show after 200px
    }
  });

  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isActive, setisActive] = useState(0);
  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`w-full z-50 left-0 px-6 md:px-10  p-2 mx-auto bg-violet-600 drop-shadow-md text-secondary transition-all duration-300 fixed
      }`}
    >
      <nav className="md:flex hidden h-full justify-between items-center">
        <img
          src="/sherinessLogo.png"
          width={200}
          alt="default"
          className="drop-shadow-sm"
        />

        <ul className="flex gap-x-4 text-base font-normal items-center">
          {navLinks.map((navLink, index) => (
            <li
              className={`${
                isActive === index ? "text-black" : "text-white"
              } cursor-pointer rounded-full hover:text-teal-400 transition-colors duration-300 ease-linear`}
              key={navLink.name}
              onClick={() => setisActive(index)}
            >
              <a href={navLink.href}>{navLink.name}</a>
            </li>
          ))}
        </ul>
        <Button
          className="px-5 hover:bg-transparent  hover:ring-1 ring-primary py-3 bg-black text-primary"
          name="Book Appointment"
          href="https://wa.me/+254741051822"
        />
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
            initial={{ opacity: 0, height: "auto" }}
            animate={{ opacity: 1, height: "100vh" }}
            transition={{ duration: 1, delay: 0, ease: "easeInOut" }}
            className="flex bg-primary h-svh flex-col gap-y-6 items-start py-8 px-12 justify-start"
          >
            {navLinks?.map((navLink, index) => (
              <li
                key={navLink.name}
                onClick={() => {
                  setisActive(index);
                  setisMenuOpen(false);
                }}
                className={`${
                  isActive === index
                    ? "bg-accent text-primary"
                    : "hover:bg-purple-50 "
                }  px-5 py-4 transition-all duration-500 ease-in-out rounded-2xl  flex items-center justify-between  w-full`}
              >
                <a href={navLink.href}>{navLink.name}</a>
                {isActive === index && (
                  <span>
                    <MdArrowOutward />
                  </span>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
