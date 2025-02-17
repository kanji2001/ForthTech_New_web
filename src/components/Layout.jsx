import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet

import Header from './Header';
import Footer from './Footer';

function Layout() {
    return (
        <div className='w-screen'>
            <Header />
            
            <Outlet />
            
            <Footer />

            {/* <div className='bg-[#c7cfb7] flex justify-center items-center h-fit py-1.5 px-5 sm:px-0 text-center'>
                <span>© Copyright 2025 | All rights reserved by 
                    <span className='text-red-700'> Forth</span>
                    <span className='text-black'>Tech 2025</span>
                </span>
            </div> */}
        </div>
    );
}

export default Layout;
