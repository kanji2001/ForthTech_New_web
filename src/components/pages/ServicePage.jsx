import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import firstAnimation from "../../lotties/abc1.json";
import thirdAnimation from "../../lotties/abc2.json";
import DigitalDesignSection from "./DigitalDesignSection";

export default function ServicePage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const h2Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 1], [0, 0.01, 0.2, 0.4, 1, 1]);
  const pOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.5, 1], [0, 0, 0.2, 0.8, 1]);

  return (

    <>

    <section className="h-[75vh] flex flex-col items-center justify-center text-center  bg-black text-white ">
    <motion.h1 
      // initial={{ opacity: 0, y: -50 }} 
      // animate={{ opacity: 1, y: 0 }} 
      // exit={{ opacity: 0, y: -50 }}
      // transition={{ duration: 1 }}
      className="text-[22vw] leading-[0%] font-medium "
    >
      Services
    </motion.h1>

  </section>

    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center text-center -mt-1 bg-black text-white px-4 sm:px-6 py-12">
      <motion.h2 className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-medium" style={{ opacity: h2Opacity }}>
        Branding
      </motion.h2>

      <motion.p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-full sm:max-w-xl" style={{ opacity: pOpacity }}>
        A powerful instrument to set the company's positioning and establish a visual language to follow across the whole path.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12 w-full max-w-6xl">
        {/* Left Column: Lottie Animations */}
        <div className="flex flex-col items-center md:items-start gap-3 lg:gap-5 w-full">
          {/* First Animation */}
          <div className="w-full max-w-[350px] lg:max-w-[520px] p-2 h-auto bg-[#36343463] rounded-sm">
            <Lottie animationData={firstAnimation} loop={true} />
          </div>

          <div className="flex justify-center md:justify-start items-center gap-2">
            {/* Static SVG */}
            <img
              src="https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66b600632a9416273fae8554_branding_2.svg"
              alt="Branding Icon"
              className="w-[55%] sm:w-60 lg:w-85 p-2 bg-[#36343463] rounded-lg"
            />
            {/* Third Animation */}
            <div className="w-[30%] sm:w-30 lg:w-43 p-2 bg-[#36343463] rounded-sm">
              <Lottie animationData={thirdAnimation} loop={true} />
            </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-6 text-left w-full px-4 sm:px-0">
          <div>
            <h3 className="text-2xl sm:text-xl lg:text-3xl font-semibold">Platforms</h3>
            <ul className="text-[16px] sm:text-base lg:text-lg text-gray-300 list-disc leading-7 lg:leading-8 mt-2 pl-5 marker:text-red-500">
              <li>UX Audit</li>
              <li>Wireframes</li>
              <li>User Flows</li>
              <li>Prototyping</li>
              <li>Design System</li>
              <li>Wireframes</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl sm:text-xl lg:text-3xl font-semibold">Websites</h3>
            <ul className="text-[16px] sm:text-base lg:text-lg text-gray-300 leading-7 lg:leading-8 mt-2 list-disc pl-5 marker:text-red-500">
              <li>Interactive </li>
              <li>Design System</li>
              <li>Wireframes</li>
              <li>Art Direction</li>
              <li>Responsive</li>
              <li>UI Kit</li>
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
    <DigitalDesignSection/>
    <DigitalDesignSection/>
    <DigitalDesignSection/>
    </>
  );
}