import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const AboutForthTech = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [triggerRender, setTriggerRender] = useState(false); // Force update when resizing

    // Update `isMobile` on resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setTriggerRender((prev) => !prev); // Force re-render when switching modes
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Unique refs for each animated section
    const sectionRefs = {
        first: useRef(null),
        second: useRef(null),
        third: useRef(null),
        fourth: useRef(null),
    };

    // InView tracking for each section
    const isInView = {
        first: useInView(sectionRefs.first, { amount: 0.2, once: true }),
        second: useInView(sectionRefs.second, { amount: 0.3, once: true }),
        third: useInView(sectionRefs.third, { amount: 0.4, once: true }),
        fourth: useInView(sectionRefs.fourth, { amount: 0.5, once: true }),
    };

    return (
        <section
            className="container mx-auto py-14 px-4 md:px-15"
            style={{ textAlign: "justify" }}
        >
            {/* First Section - 2 Column Grid */}
            <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-12 md:col-span-4">
                    <h2 className="text-lg font-bold">
                        Innovating Today for a Smarter Tomorrow
                    </h2>
                </div>
                <motion.div
                    className="col-span-12 md:col-span-8"
                    ref={sectionRefs.first}
                    initial={!isMobile ? { y: 50, opacity: 0 } : { y: 0, opacity: 1 }}
                    animate={!isMobile && isInView.first ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="text-gray-600">
                        Welcome to Forthtech, your trusted partner for cutting-edge technology solutions. We specialize in robotics, automation, product design, and software development to bring your ideas to life.
                        With a commitment to innovation and excellence, Forthtech transforms concepts into impactful solutions. Whether you’re looking to streamline operations, design a groundbreaking product, or develop bespoke software, we are here to propel your vision forward.
                        Join us in shaping the future, one innovation at a time. Explore how Forthtech can elevate your business today.

                    </p>
                </motion.div>
            </div>

            {/* Second Section - 3 Equal Columns */}
            <div className="grid grid-cols-12 gap-6 mt-10">
                <div className="col-span-12 md:col-span-4 flex flex-col">
                    <h3 className="text-md font-semibold">What We Do?</h3>
                    <p className="text-gray-500">
                    Innovating solutions to transform your business and ideas into reality.
                    </p>
                </div>

                <div className="col-span-12 md:col-span-8 grid grid-cols-12 gap-6">
                    {[
                        { title: "Robotics Solutions", text: "We design and develop advanced robotic systems tailored for specific tasks, offering precision, flexibility, and innovation to meet your unique requirements." },
                        { title: "Automation Solutions", text: "Our automation services streamline processes with smart technologies, increasing efficiency and reducing operational costs for businesses across industries." },
                        { title: "Product Design & Prototyping", text: "We craft innovative product designs and prototypes, turning your concepts into market-ready solutions with precision and creativity." },
                        { title: "Software Development", text: "Our software development expertise ensures robust, scalable, and user-centric applications tailored to your business needs." },
                        { title: "Website Development", text: "We build engaging and responsive websites that amplify your online presence and captivate your audience." },
                        { title: "Application Development", text: "From mobile apps to enterprise software, we develop innovative applications that drive user engagement and business growth." },
                    ].map((item, index) => {
                        const refKey = index < 2 ? "second" : index < 4 ? "third" : "fourth";
                        return (
                            <motion.div
                                key={index}
                                ref={sectionRefs[refKey]}
                                initial={!isMobile ? { y: 50, opacity: 0 } : { y: 0, opacity: 1 }}
                                animate={!isMobile && isInView[refKey] ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="col-span-12 sm:col-span-6 md:col-span-6"
                            >
                                <p className="text-md font-normal">Nr. 0{index + 1}</p>
                                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                                <p className="text-gray-500">{item.text}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutForthTech;
