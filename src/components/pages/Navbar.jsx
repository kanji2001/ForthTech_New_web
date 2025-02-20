import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShrink(true);
      } else if (currentScrollY < lastScrollY) {
        setShrink(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div className="container mt-2">
        <motion.nav
          className={`navbar fixed-top transition-all duration-300 ${shrink ? 'shrink' : ''}`}
          style={{ paddingTop: '4px', paddingBottom: '0px' }}
        >
          <div className="container flex justify-between items-center">
            <img
              className="navbar-brand w-8"
              src="./images/Logo/forthtechlogo.png"
              alt="Logo"
            />

            {shrink ? (
              <div className="flex items-center">
                <button className="btn btn-warning rounded book-call-btn bg-yellow-500 text-white">Book a Call</button>
                <NavLink to="/Contact" className="btn btn-primary rounded ms-2 bg-blue-500 text-white">
                  Contact
                </NavLink>
              </div>
            ) : (
              <>
                <div>
                  <ul className="navbar-nav flex space-x-4 mb-2 mb-lg-0">
                    <AnimatePresence>
                      <motion.li className={`nav-item ${shrink ? 'shrink' : ''}`} initial="hidden" animate="visible" exit="hidden">
                        <NavLink  className="nav-link text-gray-700" to="/">Home</NavLink>
                      </motion.li>
                      <motion.li className={`nav-item ${shrink ? 'shrink' : ''}`} initial="hidden" animate="visible" exit="hidden">
                        <NavLink className="nav-link text-gray-700" to="/About">About</NavLink>
                      </motion.li>
                      <motion.li className={`nav-item ${shrink ? 'shrink' : ''}`} initial="hidden" animate="visible" exit="hidden">
                        <NavLink className="nav-link text-gray-700" to="/Service">Services</NavLink>
                      </motion.li>
                      <motion.li className={`nav-item ${shrink ? 'shrink' : ''}`} initial="hidden" animate="visible" exit="hidden">
                        <NavLink className="nav-link text-gray-700" to="/Product">Product</NavLink>
                      </motion.li>
                      <motion.li className={`nav-item ${shrink ? 'shrink' : ''}`} initial="hidden" animate="visible" exit="hidden">
                        <NavLink className="nav-link text-gray-700" to="/Blog">Blog</NavLink>
                      </motion.li>
                    </AnimatePresence>
                  </ul>
                </div>

                <NavLink to="/contact" className="btn btn-primary rounded bg-blue-500 text-white">
                  Contact
                </NavLink>
              </>
            )}
          </div>
        </motion.nav>
      </motion.div>
    </>
  );
};

export default Navbar;