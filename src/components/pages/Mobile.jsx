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
        document.body.style.overflow = isMenuOpen ? "auto" : "hidden1";
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
        <>
            <div className="fixed-top">
                <motion.div
                    className="container-fluid bg-dark "
                    style={{
                        height: isMenuOpen ? "100vh" : "auto",
                        overflow: isMenuOpen ? "hidden1" : "visible",
                        transition: "height 0.2s linear",
                    }}
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="logo">
                            <img
                                src="https://via.placeholder.com/100x50"
                                alt="Logo"
                            />
                        </div>

                        <button
                            className="btn"
                            type="button"
                            onClick={updateMenu}
                        >
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
                            >
                                <motion.ul
                                    className="nav flex-column mt-3"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    transition={{ staggerChildren: 0.1, staggerDirection: -1 }}
                                >
                                    <motion.li
                                        className="nav-item mt-3"
                                        variants={itemVariants}
                                        transition={{ duration: 0.1 }}
                                    >
                                        <NavLink
                                            to="/"
                                            className="nav-link text-white"
                                            onClick={closeMenu}
                                        >
                                            Home
                                        </NavLink>
                                    </motion.li>
                                    <motion.li
                                        className="nav-item mt-3"
                                        variants={itemVariants}
                                        transition={{ duration: 0.1 }}
                                    >
                                        <NavLink
                                            to="/About"
                                            className="nav-link text-white"
                                            onClick={closeMenu}
                                        >
                                            About
                                        </NavLink>
                                    </motion.li>
                                    <motion.li
                                        className="nav-item mt-3"
                                        variants={itemVariants}
                                        transition={{ duration: 0.1 }}
                                    >
                                        <NavLink
                                            to="/Services"
                                            className="nav-link text-white"
                                            onClick={closeMenu}
                                        >
                                            Services
                                        </NavLink>
                                    </motion.li>
                                    <motion.li
                                        className="nav-item mt-3"
                                        variants={itemVariants}
                                        transition={{ duration: 0.1 }}
                                    >
                                        <NavLink
                                            to="/Product"
                                            className="nav-link text-white"
                                            onClick={closeMenu}
                                        >
                                            Product
                                        </NavLink>
                                    </motion.li>
                                    <motion.li
                                        className="nav-item mt-3"
                                        variants={itemVariants}
                                        transition={{ duration: 0.1 }}
                                    >
                                        <NavLink
                                            to="/Contact"
                                            className="nav-link text-white"
                                            onClick={closeMenu}
                                        >
                                            Contact
                                        </NavLink>
                                    </motion.li>
                                </motion.ul>

                                <motion.hr
                                    className="text-white mt-4"
                                    variants={itemVariants}
                                    transition={{ duration: 0.1 }}
                                />

                                <motion.div
                                    className="col-lg-3 col-md-6 mt-4 F-links"
                                    variants={sectionVariants}
                                    transition={{
                                        duration: 0.1,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <a
                                        href="mailto:kanjisonagara2001@gmail.com"
                                        className="text-light"
                                        style={{
                                            textDecoration: "none",
                                            padding: "16px 16px",
                                        }}
                                    >
                                        kanjisonagara2001@gmail.com
                                    </a>
                                    <div className="d-md-flex mx-3 py-4">
                                        <i className="fa-brands text-white fa-square-twitter fa-2xl"></i>
                                        <i className="fa-brands text-white fa-facebook fa-2xl mx-2"></i>
                                        <i className="fa-brands text-white fa-instagram fa-2xl mx-2"></i>
                                        <i className="fa-brands text-white fa-linkedin fa-2xl mx-2"></i>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </>
    );
};

export default Mobile;
