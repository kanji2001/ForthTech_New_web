import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet

import Header from './Header';
import Footer from './Footer';
import Blog from './pages/Blog';
import All from './pages/All';

function Layout1() {
    return (
        <div className='w-screen'>
            <Blog/>
            <Outlet />
            

            {/* <div className='bg-[#c7cfb7] flex justify-center items-center h-fit py-1.5 px-5 sm:px-0 text-center'>
                <span>© Copyright 2025 | All rights reserved by 
                    <span className='text-red-700'> Forth</span>
                    <span className='text-black'>Tech 2025</span>
                </span>
            </div> */}
        </div>
    );
}

export default Layout1;
