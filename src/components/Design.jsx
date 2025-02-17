import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutPage from './pages/AboutPage';
import Service from './Service';
import Product from './Product';
import Contact from './Contact';
import Layout from './Layout'; // Import Layout
import { motion, useScroll } from 'framer-motion';
import Allpage from './Allpage';
import ServicePage from './pages/ServicePage';
import ProductPage from './pages/ProductPage';
import ProductPage1 from './pages/ProductPage1';
import Blog from './pages/Blog';
import Branding from './pages/Branding';
import Layout1 from './Layout1';
import SuccessStory from './pages/SuccessStory';
import Designing from './pages/Designing';
import LeaderShip from './pages/LeaderShip';
import All from './pages/All';
import ScrollToTop from './ScrollTop';

function Design() {
    const { scrollYProgress } = useScroll();

    return (
        <Router>
        <ScrollToTop/>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    scrollbarWidth: 'auto',
                    height: '5px',
                    position: 'sticky',
                    top: 0,
                    transformOrigin: '0%',
                    background: 'green',
                    zIndex: 1000
                }}
            />
            
            <div className='w-screen'>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Allpage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="service" element={<ServicePage />} />
                        <Route path="product" element={<ProductPage1 />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="blog/" element={<Layout1 />}>
                            <Route index element={<All />} /> 
                            <Route path="all"  element={<All  />} /> 
                            <Route path="branding" element={<Branding />} />
                            <Route path="design" element={<Designing />} />
                            <Route path="SuccessStory" element={<SuccessStory />} />
                            <Route path="leaderShip" element={<LeaderShip />} />
                            </Route>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}
export default Design;
