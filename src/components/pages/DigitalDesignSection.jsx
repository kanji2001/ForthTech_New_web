import { motion, useScroll, useTransform } from 'framer-motion';
import Lottie from "lottie-react";
import firstAnimation from "../../lotties/abc3.json";
import secondAnimation from "../../lotties/abc4.json";
import thirdAnimation from "../../lotties/abc5.json";
import fourthAnimation from "../../lotties/abc6.json";

import { useRef } from 'react';

export default function DigitalDesignSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const h2Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 1], [0, 0.02, 0.2, 1, 1, 1]);
    const pOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.5, 1], [0, 0, 0.2, 0.8, 1]);

    return (
        <section ref={ref} className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white -mt-1 p-8">
            <motion.h2
                className="text-[12vw] md:text-[10vw] font-medium"
                style={{ opacity: h2Opacity }}
            >
                Digital Design
            </motion.h2>

            <motion.p
                className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl"
                style={{ opacity: pOpacity }}
            >
                Creating visually stunning and user-friendly digital experiences.
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2 md:gap-6 mt-24 w-full max-w-6xl">
                {/* Left Section: Three-Column Layout */}
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3">
                    <div className="flex flex-col gap-6">
                        <div className="w-18 lg:w-40 md:w-22 r-425 less h-auto">
                            <Lottie animationData={firstAnimation} loop={true} />
                        </div>
                        <div className="w-18 lg:w-40 md:w-22 r-425 less h-auto bg-[#36343463] rounded-sm">
                            <Lottie animationData={secondAnimation} loop={true} />
                        </div>
                        <div className="w-18 lg:w-40 md:w-22 r-425 less h-auto bg-[#36343463] rounded-sm">
                            <img src="https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66b601b5a8038eb545635723_branding-3_3.svg" alt="search image" />
                        </div>
                    </div>
                    <div className="flex -ml-5 mt-12 flex-col gap-5 pad padd pl-4 md:pl-2">
                        <div className="w-25 lg:w-50 r-425 md:w-35 high h-auto bg-[#36343463] rounded-lg">
                            <Lottie animationData={thirdAnimation} loop={true} />
                        </div>
                        <div className="w-25 lg:w-50 r-425 md:w-35 high h-auto">
                            <Lottie animationData={fourthAnimation} loop={true} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 md:pl-4 pl-4">
                        <div className="lg:w-40 md:w-22 r-425 w-18 less h-auto bg-[#36343463] rounded-lg">
                            <img src="https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66b601b53b749d656b2f4077_branding-3_1.svg" alt="" />
                        </div>
                        <div className="lg:w-40 md:w-22 w-18 r-425 less h-auto bg-[#36343463] rounded-lg">
                            <img src="https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66b601ddc409dd0564d34376_branding-3_2.svg" alt="" />
                        </div>
                        <div className="lg:w-40 md:w-22 w-18 r-425 less h-auto bg-[#36343463] rounded-lg">
                            <img src="https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66b601b5ae0ee5128ad33621_branding-3_4.svg" alt="" />
                        </div>
                    </div>
                </div>

                {/* Right Section: Two-Column List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-2 mt-10 md:mt-0 md:pl-8 text-left">
                    <div>
                        <h3 className="text-2xl lg:text-3xl md:text-xl sm:text-sm font-semibold">Platforms</h3>
                        <ul className="text-[16px] lg:text-lg md:text-sm text-gray-300 list-disc leading-7 mt-2 lg:leading-8 md:leading-6 pl-5 marker:text-red-500">
                            <li>UX Audit</li>
                            <li>Wireframes</li>
                            <li>User Flows</li>
                            <li>Prototyping</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl lg:text-3xl md:text-xl sm:text-sm font-semibold">Websites</h3>
                        <ul className="text-[16px] lg:text-lg md:text-sm text-gray-300 leading-7 lg:leading-8 mt-2 md:leading-6 list-disc pl-5 marker:text-red-500">
                            <li>Interactive</li>
                            <li>Design System</li>
                            <li>Wireframes</li>
                            <li>Art Direction</li>
                            <li>Responsive</li>
                            <li>UI Kit</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-xl -mt-19 md:-mt-18  font-semibold">Mobile Apps</h3>
                        <ul className="text-[16px] lg:text-lg md:text-sm text-gray-300 leading-7 lg:leading-8 mt-2 md:leading-6 list-disc pl-5 marker:text-red-500">
                            <li>Research</li>
                            <li>UX Design</li>
                            <li>Prototyping</li>
                            <li>Design System</li>
                            <li>Visual Design</li>
                        </ul>
                    </div>
                    <div className="flex justify-center sm:justify-start col-span-2 ">
                        <button className="bg-red-500 hover:bg-red-600 text-white h-[55px] sm:h-[10vh] w-full sm:w-[110px] md:w-[120px] lg:w-[175px] rounded-lg font-semibold">
                            View Details
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}