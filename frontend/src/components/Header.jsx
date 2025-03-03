import React, { useState } from "react";
import Button from "./Button";
import { useMotionValueEvent, motion, useScroll } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/" },
  { name: "Our Services", href: "/" },
  { name: "Portfolio", href: "/" },
  { name: "Contact Us", href: "/" },
];

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest === 0) {
      setHidden(false); // Normal state before 100
    } else if (latest > 0 && latest < 1000) {
      setHidden(true); // Hide between 100px and 200px
    } else if (latest > 1000) {
      setHidden(false); // Show after 200px
    }
  });
  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`top-0 left-0 w-full h-20 z-50 bg-accent text-white shadow-md transition-all duration-300 fixed
      }`}
    >
      <nav className="flex h-full justify-around items-center">
        <img src="/sherinesslogo.png" width={200} alt="default" />
        <ul className="flex gap-4 items-center">
          {navLinks.map((navLink, index) => (
            <li className="" key={navLink.name}>
              {navLink.name}
            </li>
          ))}
        </ul>
        <Button
          className="bg-gradient-to-br from-yellow-500 to-orange-500 text-primary"
          name="Book Appointment"
        />
      </nav>
    </motion.header>
  );
};

export default Header;
