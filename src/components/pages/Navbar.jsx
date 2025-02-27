// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { NavLink } from "react-router-dom";
// import "./Navbar.css"; 

// const Navbar = () => {
//   const [shrink, setShrink] = useState(false);

//   useEffect(() => {
//     let lastScrollY = 0;

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setShrink(currentScrollY > lastScrollY);
//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.div className="mt-0">
//       <motion.nav
//         className={`fixed top-1 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 navbar-width 
//     ${shrink ? "w-2/6 md:w-2/4  bg-black shadow-lg" : "w-1/2 md:w-4/6 bg-black"}
//     rounded-xl p-2 flex items-center justify-between w-full`}
//       >

//         <div className="flex items-center">
//           <img
//             className="w-10 h-10 md:w-8 md:h-8"
//             src="./images/Logo/forthtechlogo.png"
//             alt="Logo"
//           />
//         </div>

//         <div className="flex-1 flex justify-center">
//           <motion.ul
//             className="flex space-x-6 md:space-x-3 text-white md:text-[12px] ml-6 lg:ml-10 lg:text-[14px] items-center"
//             initial={{ opacity: 1, width: "auto" }}
//             animate={{ opacity: shrink ? 0 : 1, width: shrink ? 0 : "auto", }}
//             transition={{ duration: 0.6, ease: "linear" }}
//             style={{ overflow: "hidden" }}
//           >
//             <li><NavLink className="lg:mx-3" to="/">Home</NavLink></li>
//             <li><NavLink className="lg:mx-3" to="/About">About</NavLink></li>
//             <li><NavLink className="lg:mx-3" to="/Service">Services</NavLink></li>
//             <li><NavLink className="lg:mx-3" to="/Product">Product</NavLink></li>
//             <li><NavLink className="lg:mx-3" to="/Blog">Blog</NavLink></li>
//           </motion.ul>
//         </div>

//         <div className="flex items-center">
//           <motion.button
//             className="px-4 py-1 md:px-2 md:py-1 md:text-sm lg:px-4 lg:py-2 bg-yellow-500 text-white rounded"
//             initial={{ opacity: 0, display: "none" }}
//             animate={{ opacity: shrink ? 1 : 0, display: shrink ? "block" : "none" }}
//             transition={{ opacity: { duration: 0.6, ease: "linear" } }}
//           >
//             Book a Call
//           </motion.button>

//           <NavLink
//             to="/Contact"
//             className="ml-2 px-4 py-2 md:px-3 md:py-1 md:text-sm lg:px-4 lg:py-2 bg-blue-500 text-white rounded"
//           >
//             Contact
//           </NavLink>
//         </div>
//       </motion.nav>

//     </motion.div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShrink(currentScrollY > lastScrollY );
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div className="mt-0">
      <motion.nav
        className={`fixed top-1 left-1/2 transform -translate-x-1/2 z-50 transition-w duration-600 navbar-width 
        bg-black shadow-lg rounded-xl p-2 flex items-center justify-between mt-2`}
        initial={{ width: "50%" }}
        animate={{ width: shrink ? "42%" : "55%" }}
        transition={{ duration: 0.1, ease: "linear" }}
      >
        <div className="flex items-center ml-3.5">
         <NavLink to="/"><h1><span className="text-text-red text-xl lg:text-2xl font-bold">Forth</span><span className="text-text-white text-xl lg:text-2xl font-bold">Tech</span></h1></NavLink>
        </div>

        <div className="flex-1 flex justify-center overflow-hidden">
          <motion.ul
            className="flex space-x-6 md:space-x-3 text-white md:text-[12px] ml-6 lg:ml-10 lg:text-[14px] items-center"
            initial={{ opacity: 1, display: "flex" }}
            animate={{ opacity: shrink ? 0 : 1, display: shrink ? "none" : "flex" }}
            transition={{ duration: 0.1, ease: "linear" }}
          >
            {/* <li><NavLink className="lg:mx-2" to="/">Home</NavLink></li> */}
            <li><NavLink className="lg:mx-2" to="/About">About</NavLink></li>
            <li><NavLink className="lg:mx-2" to="/Service">Services</NavLink></li>
            <li><NavLink className="lg:mx-2" to="/Service">Portfolio</NavLink></li>
            {/* <li><NavLink className="lg:mx-2" to="/Product">Product</NavLink></li>  */}
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
