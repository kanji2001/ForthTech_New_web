import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import portfolioData from '../../components/pages/portfolioData';
import ProjectImage from '../../components/pages/Skeleton';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function PortfolioDetail() {
    const { id } = useParams();
    const project = portfolioData.find(p => p.id === parseInt(id));

    if (!project) return <h2>Project not found</h2>;

    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
    const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.7, triggerOnce: false });
    const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.7, triggerOnce: false });
    const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.7, triggerOnce: false });


    return (
        <div className="max-w-[1200px] mx-auto bg-white py-5 px-5 mt-10 sm:mt-0">
            {/* Main container with consistent spacing for all sections */}
            <div className="space-y-8"

            >
                {/* Section 1: Hero image */}
                <div className="w-full h-[250px] sm:h-[95vh] ">
                    <ProjectImage
                        src={project.image1}
                        alt={project.title}
                        className="w-full h-full object-contain object-center"
                        imageId="hero"
                    />
                </div>

                {/* Section 2: Main Heading and Description */}
                <div ref={ref} className="relative">
                    {/* Heading Wrapper with Overflow Hidden */}
                    <div className="relative overflow-hidden h-[100px]">
                        <motion.h1
                            className="text-6xl font-bold absolute w-full text-center sm:text-start lg:mt-25"
                            initial={{ color: "#000000", y: 0 }}
                            animate={{ color: inView ? "#FF2424" : "#000000", y: inView ? "-100%" : "0%" }}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                        >
                            {project.title}
                        </motion.h1>

                        <motion.h1
                            className="text-6xl font-bold absolute w-full text-center sm:text-start lg:mt-25"
                            initial={{ color: "#FF2424", y: "100%" }}
                            animate={{ y: inView ? "0%" : "100%" }}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                        >
                            {project.title}
                        </motion.h1>
                    </div>

                    {/* Other Content (Always Visible) */}
                    <h6 className="text-3xl font-medium mb-4 text-center sm:text-start">{project.title2}</h6>
                    <p className="mt-10">{project.smallDes}</p>

                    <div className="space-y-5 mt-10">
                        <div>
                            <h6 className="text-xl font-medium mb-2">Biomimicry and Robotics</h6>
                            <p className="text-justify">{project.titleDes1}</p>
                        </div>
                        <div>
                            <h6 className="text-xl font-medium mb-2">Control Systems and Kinematics</h6>
                            <p className="text-justify">{project.titleDes2}</p>
                        </div>
                        <div>
                            <h6 className="text-xl font-medium mb-2">Machine Vision</h6>
                            <p className="text-justify">{project.titleDes3}</p>
                        </div>
                    </div>
                </div>


                {/* Section 3: Two-column grid - Image Left, Text Right */}
                <div className="grid md:grid-cols-2 gap-10 items-center" ref={ref2}>
                    <div className="flex justify-center">
                        <ProjectImage
                            src={project.image2}
                            alt={project.title}
                            className="w-full max-w-[400px] rounded-lg object-contain"
                            imageId="inspiration"
                            hoverEffect={true}
                        />
                    </div>
                    <div >
                        <motion.h2
                            initial={{ color: "#000000" }}
                            animate={{ color: inView2 ? "#FF2424" : "#000000" }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold mb-3">Inspiration</motion.h2>
                        <p className="text-justify">{project.sec2Des}</p>
                    </div>
                </div>

                {/* Section 4: Two-column grid - Content Left, Two Images Right */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-semibold text-justify mb-5">{project.sec4Title}</h2>
                        <div className="space-y-3">
                            <p className="text-justify"><span className="font-bold">Gait Analysis:</span> {project.sec4FirstP}</p>
                            <p className="text-justify"><span className="font-bold">Walking:</span> {project.sec4SecondP}</p>
                            <p className="text-justify"><span className="font-bold">Trot:</span> {project.sec4ThirdP}</p>
                            <p className="text-justify"><span className="font-bold">Pace:</span> {project.sec4ForthP}</p>
                            <p className="text-justify"><span className="font-bold">Gallop:</span> {project.sec4FifthP}</p>
                        </div>
                    </div>
                    <div className="grid grid-rows-2 gap-5">
                        <ProjectImage
                            src={project.image3}
                            alt={project.title}
                            className="w-full h-auto object-cover"
                            imageId="gait1"
                        />
                        <ProjectImage
                            src={project.image4}
                            alt={project.title}
                            className="w-full h-auto object-cover"
                            imageId="gait2"
                        />
                    </div>
                </div>

                {/* Section 5: Current Market */}
                <div className="grid md:grid-cols-2 gap-10 items-center" ref={ref3}>
                    <div>
                        <ProjectImage
                            src={project.image25}
                            alt={project.title}
                            className="w-full h-auto object-contain"
                            imageId="market"
                            hoverEffect={true}
                        />
                    </div>
                    <div>
                        <motion.h2
                            initial={{ color: "#000000" }}
                            animate={{ color: inView3 ? "#FF2424" : "#000000" }}
                            transition={{ duration: 0.5 }}
                            className="text-5xl font-extrabold mb-3">Current Market</motion.h2>
                        <p className="text-justify">{project.sec5FirstP}</p>
                    </div>
                </div>

                {/* Section 6: Mood Board */}
                <div className="grid md:grid-cols-2 gap-10 items-center" ref={ref4}>
                    <div>
                        <motion.h2 className="text-5xl font-extrabold mb-3"
                            initial={{ color: "#000000" }}
                            animate={{ color: inView4 ? "#FF2424" : "#000000" }}
                            transition={{ duration: 0.5 }}
                        >Mood Board</motion.h2>
                        <p className="text-justify">{project.sec6FirstP}</p>
                    </div>
                    <div>
                        <ProjectImage
                            src={project.image26}
                            alt="Mood Board"
                            className="w-full object-cover rounded-lg"
                            imageId="moodboard"
                            hoverEffect={true}
                        />
                    </div>
                </div>

                {/* Section 7: Full-width image */}
                <div className="h-[250px] sm:h-[600px] md:h-[450px] lg:h-[600px] xl:h-[700px]">
                    <ProjectImage
                        src={project.image13}
                        alt={project.title}
                        className="w-full h-full object-contain"
                        imageId="fullwidth"
                    />
                </div>

                {/* Section 8: Image grid with descriptions */}
                <div>
                    <div className="grid grid-cols-2 gap-4">
                        <ProjectImage
                            src={project.image14}
                            alt={project.title}
                            className="w-full object-cover rounded-lg"
                            imageId="grid1"
                        />
                        <ProjectImage
                            src={project.image15}
                            alt={project.title}
                            className="w-full object-cover rounded-lg"
                            imageId="grid2"
                        />
                        <ProjectImage
                            src={project.image16}
                            alt={project.title}
                            className="w-full object-cover rounded-lg"
                            imageId="grid3"
                        />
                        <ProjectImage
                            src={project.image17}
                            alt={project.title}
                            className="w-full object-cover rounded-lg"
                            imageId="grid4"
                        />
                    </div>
                    <div className="space-y-5 mt-5">
                        <p className="text-justify">{project.sec8FirstP}</p>
                        <p className="text-justify">{project.sec8SecondP}</p>
                        <p className="text-justify">{project.sec8ThirdP}</p>
                    </div>
                </div>

                {/* Sections 9-14: Consistent image sections */}
                {[
                    { img: project.image18, text: project.sec9FirstP, id: "img9" },
                    { img: project.image19, text: project.sec10FirstP, id: "img10" },
                    { img: project.image20, text: "", id: "img11" },
                    { img: project.image21, text: "", id: "img12" },
                    { img: project.image22, text: "", id: "img13" },
                    { img: project.image24, text: "", id: "img14" },
                    { img: project.image23, text: "", id: "img15" }
                ].map((section, index) => (
                    <div key={index}>
                        <ProjectImage
                            src={section.img}
                            alt={project.title}
                            className="w-full h-auto object-contain"
                            imageId={section.id}
                        />
                        {section.text && <p className="text-justify mt-5">{section.text}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}