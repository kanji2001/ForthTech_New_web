import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [shrink, setShrink] = useState(false);
  const [isOverGraySection, setIsOverGraySection] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShrink(currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;

      const navbar = document.querySelector("nav");
      if (!navbar) return;

      const navbarRect = navbar.getBoundingClientRect();
      let isOverGray = false;

      document.querySelectorAll(".bg-background-gray").forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top < navbarRect.bottom && rect.bottom > navbarRect.top) {
          isOverGray = true;
        }
      });

      setIsOverGraySection(isOverGray);
    };

    handleScroll(); 
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]); 

  return (
    <motion.div className="mt-0">
      <motion.nav
        className={`fixed top-1 left-1/2 transform -translate-x-1/2 z-50 transition-w duration-600 navbar-width 
        bg-opacity-15 shadow-lg rounded-xl p-2 flex items-center justify-between mt-2`}
        style={{
          background: "hsla(0, 0%, 100%, 0.15)",
          boxShadow: "0px 0px 16px 0px hsla(0, 100%, 57%, 0.16)",
          backdropFilter: "blur(15px)",
        }}
        initial={{ width: "50%" }}
        animate={{ width: shrink ? "42%" : "55%" }}
        transition={{ duration: 0.1, ease: "linear" }}
      >
        <div className="flex items-center ">
          <NavLink to="/"><img src="./brandinglogo.png" alt="forth tech logo" style={{ height: "32px" }} /></NavLink>
        </div>

        <div className="flex-1 flex justify-center overflow-hidden">
          <motion.ul
            className={`flex space-x-6 md:space-x-3 ${
              isOverGraySection ? "text-text-black" : "text-text-white"
            } md:text-[12px] ml-6 lg:ml-10 lg:text-[14px] items-center`}
            initial={{ opacity: 1, display: "flex" }}
            animate={{ opacity: shrink ? 0 : 1, display: shrink ? "none" : "flex" }}
            transition={{ duration: 0.1, ease: "linear" }}
          >
            <li><NavLink className="lg:mx-2" to="/About">About</NavLink></li>
            <li><NavLink className="lg:mx-2" to="/Service">Services</NavLink></li>
            <li><NavLink className="lg:mx-2" to="/Service">Portfolio</NavLink></li>
            <li><NavLink className="lg:mx-2" to="/Blog">Blog</NavLink></li>
          </motion.ul>
        </div>

        <div className="flex items-center">
          <motion.button
            className="px-4 py-1 md:px-2 md:py-1 md:text-sm lg:px-4 lg:py-2 bg-button-gray hover:bg-hover-blue hover:text-white text-dark rounded transition-colors duration-800"
            initial={{ opacity: 0, display: "none" }}
            animate={{ opacity: shrink ? 1 : 0, display: shrink ? "block" : "none" }}
            transition={{ duration: 0.1, ease: "linear" }}
          >
            Book a Call
          </motion.button>

          <NavLink
            to="/Contact"
            className="ml-2 px-4 py-2 md:px-3 md:py-1 md:text-sm lg:px-4 lg:py-2 bg-button-red hover:bg-hover-blue text-white rounded transition-colors duration-800"
          >
            Contact
          </NavLink>
        </div>
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;
