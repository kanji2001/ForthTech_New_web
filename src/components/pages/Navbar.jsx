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

      document.querySelectorAll(".bg-background-gray, .bg-white, .bg-black").forEach((section) => {
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
          <NavLink to="/"><img src="/brandinglogo.png" alt="forth tech logo" style={{ height: "32px" }} /></NavLink>
        </div>

        <div className="flex-1 flex justify-center overflow-hidden">
          <motion.ul
            className={`flex space-x-6 md:space-x-3 ${isOverGraySection ? 'text-text-black' : 'text-text-white'
              } md:text-[12px] ml-6 lg:ml-10 lg:text-[14px] items-center`}
            initial={{ opacity: 1, display: 'flex' }}
            animate={{ opacity: shrink ? 0 : 1, display: shrink ? 'none' : 'flex' }}
            transition={{ duration: 0.1, ease: 'linear' }}
          >
            <li className="lg:mx-2 group">
              <NavLink to="/About" className="footer-link w-inline-block">
                <div className="footer-flip-hover">
                  <div className="footer-nav-link nav">About</div>
                  <div className="footer-nav-link hover text-[#ff2424]">About</div>
                </div>
              </NavLink>
            </li>
            <li className="lg:mx-2 group">
              <NavLink to="/Service" className="footer-link w-inline-block">
                <div className="footer-flip-hover">
                  <div className="footer-nav-link nav">Services</div>
                  <div className="footer-nav-link hover text-[#ff2424]">Services</div>
                </div>
              </NavLink>
            </li>
            <li className="lg:mx-2 group">
              <NavLink to="/portfolio" className="footer-link w-inline-block">
                <div className="footer-flip-hover">
                  <div className="footer-nav-link nav">Portfolio</div>
                  <div className="footer-nav-link hover text-[#ff2424]">Portfolio</div>
                </div>
              </NavLink>
            </li>
            <li className="lg:mx-2 group">
              <NavLink to="/Blog" className="footer-link w-inline-block">
                <div className="footer-flip-hover">
                  <div className="footer-nav-link nav">Blog</div>
                  <div className="footer-nav-link hover text-[#ff2424]">Blog</div>
                </div>
              </NavLink>
            </li>
          </motion.ul>

          <style jsx>{`
        .footer-flip-hover {
          position: relative;
          overflow: hidden;
        }
        .footer-nav-link {
          transition: transform 0.7s ease, color 0.7s ease, opacity 0.6s ease;
        }
        .footer-nav-link.nav {
          transform: translateY(0);
        }
        .footer-nav-link.hover {
          transform: translateY(100%);
          position: absolute;
          top: 0;
          left: 0;
        }
        .footer-link:hover .footer-nav-link.nav {
          transform: translateY(-100%);
          opacity: 0.2;
        }
        .footer-link:hover .footer-nav-link.hover {
          transform: translateY(0);
          color: #ff2424;
        }
      `}</style>
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