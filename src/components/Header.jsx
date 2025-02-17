import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import { animate, motion } from 'framer-motion';


function Header() {
    const [menu , setMenu] = useState(false)
    const toggleMenu = () =>{
        setMenu(!menu);
    }
  return (
    <>
        <header className="bg-[#314026] text-white py-4 sticky top-0 shadow-lg z-50">
                    <div className="mx-auto flex justify-between items-center px-[30px] sm:px-[100px]">
                        <div className="ml-4">
                            <img src="download.jpg" alt="Logo" className="h-16 w-16 rounded-full" />
                        </div>
                        <div className='hidden md:block'>
                            <nav className="space-x-6 mr-4">
                                <NavLink to='/'  className="hover:text-green-500  text-lg font-semibold">Home</NavLink>
                                <NavLink to='About'  className="hover:text-green-500  text-lg font-semibold">About</NavLink>
                                <NavLink to='Service'  className="hover:text-green-500  text-lg font-semibold">Service</NavLink>
                                <NavLink to='Product'  className="hover:text-green-500  text-lg font-semibold">Product</NavLink>
                                <NavLink to='Contact'  className="hover:text-green-500  text-lg font-semibold">Contact Us</NavLink>
                                <NavLink to='Blog'  className="hover:text-green-500  text-lg font-semibold">Blog</NavLink>

                            </nav>

                        </div>
                        <div className='md:hidden'>
                        <motion.button onClick={toggleMenu} whileTap={{ scale: 1.2 }} className="text-white focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </motion.button>
                        </div>
                    </div>

                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: menu ? 1 : 0, y: menu ? 0 : -190 }} 
                    transition={{ type: "spring", stiffness: 120 }} 
                    className={`md:hidden ${menu ? 'block' : 'hidden'} flex justify-center bg-[#314026] text-white py-4`}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: menu ? 1 : 0 }} 
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="space-x-6 flex flex-col space-y-4 mr-4"
                    >
                               <NavLink to='/'  className="hover:text-green-500  text-lg font-semibold">Home</NavLink>
                                <NavLink to='About'  className="hover:text-green-500  text-lg font-semibold">About</NavLink>
                                <NavLink to='Service'  className="hover:text-green-500  text-lg font-semibold">Service</NavLink>
                                <NavLink to='Product'  className="hover:text-green-500  text-lg font-semibold">Product</NavLink>
                                <NavLink to='Contact'  className="hover:text-green-500  text-lg font-semibold">Contact Us</NavLink>
                                <NavLink to='Blog'  className="hover:text-green-500  text-lg font-semibold">Blog</NavLink>

                             </motion.div>
                    </motion.div>

            </header>
    </>
  )
}

export default Header