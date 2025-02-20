import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Mobile.css";

const Mobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");

    const updateMenu = () => {
        if (!isMenuOpen) {
            setBurgerClass("burger-bar clicked");
        } else {
            setBurgerClass("burger-bar unclicked");
        }
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setBurgerClass("burger-bar unclicked");
        document.body.style.overflow = "auto";
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
    };

    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.50 },
    };

    return (
        <div className=" container fixed top-0 left-0 w-full z-50">
            <motion.div
                className={`bg-black transition-all duration-200 ${isMenuOpen ? "h-screen overflow-hidden" : "h-auto"}`}
            >
                <div className="flex justify-between items-center p-4">
                    <div className="logo">
                        <img src="https://via.placeholder.com/100x50" alt="Logo" />
                    </div>
                    <button className="btn" type="button" onClick={updateMenu}>
                        <div className="burger-menu">
                            <div className={burger_class}></div>
                            <br />
                            <div className={burger_class}></div>
                        </div>
                    </button>
                </div>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ staggerChildren: 0.2 }}
                            className="flex flex-col items-start px-4 text-white mt-4"
                        >
                            <motion.ul className="flex flex-col space-y-4" initial="hidden" animate="visible" exit="exit" transition={{ staggerChildren: 0.1, staggerDirection: -1 }}>
                                <motion.li className="nav-item mt-2" variants={itemVariants} transition={{ duration: 0.1 }}>
                                    <NavLink to="/" className="nav-link text-white" onClick={closeMenu}>Home</NavLink>
                                </motion.li>
                                <motion.li className="nav-item mt-2" variants={itemVariants} transition={{ duration: 0.1 }}>
                                    <NavLink to="/About" className="nav-link text-white" onClick={closeMenu}>About</NavLink>
                                </motion.li>
                                <motion.li className="nav-item mt-2" variants={itemVariants} transition={{ duration: 0.1 }}>
                                    <NavLink to="/Service" className="nav-link text-white" onClick={closeMenu}>Services</NavLink>
                                </motion.li>
                                <motion.li className="nav-item mt-2" variants={itemVariants} transition={{ duration: 0.1 }}>
                                    <NavLink to="/Product" className="nav-link text-white" onClick={closeMenu}>Product</NavLink>
                                </motion.li>
                                <motion.li className="nav-item mt-2" variants={itemVariants} transition={{ duration: 0.1 }}>
                                    <NavLink to="/Blog" className="nav-link text-white" onClick={closeMenu}>Blog</NavLink>
                                </motion.li>
                                <motion.li className="nav-item mt-2" variants={itemVariants} transition={{ duration: 0.1 }}>
                                    <NavLink to="/Contact" className="nav-link text-white" onClick={closeMenu}>Contact</NavLink>
                                </motion.li>
                               
                            </motion.ul>

                            <motion.hr className="border-white  mt-8 w-4/4" variants={itemVariants} transition={{ duration: 0.1 }} />

                            <motion.div className="text-center mt-6" variants={sectionVariants} transition={{ duration: 0.1, ease: "easeInOut" }}>
                                <a href="mailto:kanjisonagara2001@gmail.com" className="text-light no-underline py-4">
                                    kanjisonagara2001@gmail.com
                                </a>
                                <div className="flex  space-x-3 mt-10">
                                    <i className="fa-brands text-white fa-square-twitter fa-2xl"></i>
                                    <i className="fa-brands text-white fa-facebook px-2 fa-2xl"></i>
                                    <i className="fa-brands text-white fa-instagram px-2 fa-2xl"></i>
                                    <i className="fa-brands text-white fa-linkedin px-2 fa-2xl"></i>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Mobile;
