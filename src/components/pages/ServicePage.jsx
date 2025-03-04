import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import firstAnimation from "../../lotties/abc1.json";
import SecondAnimation from "../../lotties/abc2.json";
import DigitalDesignSection from "./DigitalDesignSection";
import { NavLink, Outlet } from "react-router-dom";
import ThirdAnimation from "../../lotties/abc3.json";
import ForthAnimation from "../../lotties/abc4.json";
import FifthAnimation from "../../lotties/abc5.json";
import SixthAnimation from "../../lotties/abc6.json";
import "./ServicePage.css";

export default function ServicePage() {
  const ref = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const offSetValues = windowWidth < 768 ? ["start 120%", "end start"] : ["start end", "end start"];

  const {scrollYProgress } =useScroll({
    target: ref,
    offset: offSetValues
  })

  const h2Opacity = useTransform(scrollYProgress, [0, 0.35, 1], [0, 1, 1]);
  const pOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.9, 1]);

  return (

    <>

      <section className="h-[100vh] flex flex-col items-center justify-center text-center  bg-black text-white ">
        <motion.h1
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="text-[22vw] leading-[0%] font-medium "
        >
          Services
        </motion.h1>

      </section>

      <section ref={ref} className="min-h-screen flex flex-col items-center justify-center text-center -mt-1 bg-background-black text-white px-4 sm:px-6 py-12">
        <motion.p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-full sm:max-w-xl" style={{ opacity: pOpacity }}>Proficiency</motion.p>
        <motion.h2 className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-medium" style={{ opacity: h2Opacity }}>
          Robotics
        </motion.h2>

        <motion.p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-full sm:max-w-xl" style={{ opacity: pOpacity }}>
          Expertise in designing and developing advanced robotic solutions to enhance automation, efficiency, and performance across diverse industries.
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
                <Lottie animationData={SecondAnimation} loop={true} />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-6 text-left w-full px-4 sm:px-0 custom_responsive">
            <div className="">
              <h3 className="text-xl sm:text-xl lg:text-3xl font-semibold">Robot Development</h3>
              <ul className="text-[14px] sm:text-base lg:text-lg text-gray-300 list-disc leading-7 lg:leading-8 mt-2 pl-5 marker:text-red-500">
                <li>Robotics Systems</li>
                <li>Control & Navigation</li>
                <li>AI & Machine Learning</li>
                <li>Motion Planning</li>
                <li>Perception & Vision Systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl sm:text-xl lg:text-3xl font-semibold">Automation </h3>
              <ul className="text-[14px] sm:text-base lg:text-lg text-gray-300 leading-7 lg:leading-8 mt-2 list-disc pl-5 marker:text-red-500">
                <li>Autonomous Systems </li>
                <li>IoT Integration</li>
                <li>Logistics & Warehouse</li>
                <li>Medical & Healthcare</li>
              </ul>
            </div>
            <div className="flex justify-center sm:justify-start col-span-2 ">
              {/* <NavLink to="/service/brandingPage"> */}
              <button className="bg-button-red hover:bg-hover-blue text-white h-[55px] sm:h-[10vh] w-full sm:w-[110px] md:w-[120px] lg:w-[175px] rounded-lg font-semibold">
                View Details
              </button>
              {/* </NavLink> */}


            </div>
          </div>
        </div>
      </section>
      <DigitalDesignSection
        title="Product Development"
        description="Product development is an iterative process of designing, testing, and refining ideas to create functional, market-ready solutions by integrating user needs, technology, and business goals."
        animations={[
          [
            { type: "lottie", src: ThirdAnimation },
            { type: "lottie", src: ForthAnimation, bg: true },
            { type: "image", src: "https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66b601b5a8038eb545635723_branding-3_3.svg", alt: "Search Image", bg: true },
          ],
          [
            { type: "lottie", src: FifthAnimation, bg: true },
            { type: "lottie", src: SixthAnimation },
          ],
          [
            { type: "image", src: "https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66b601b53b749d656b2f4077_branding-3_1.svg", bg: true },
            { type: "image", src: "https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66b601ddc409dd0564d34376_branding-3_2.svg", bg: true },
            { type: "image", src: "https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66b601b5ae0ee5128ad33621_branding-3_4.svg", bg: true },
          ],
        ]}
        sections={[
          { title: "User Needs", items: ["Functionality", "Usability", "Experience", "Demand", "Satisfaction"] },
          { title: "Technology", items: ["Innovation", "Feasibility", "Efficiency", "Scalability", "Integration"] },
          { title: "Business Goals", items: ["Profitability", "Market Fit", "Growth", "Sustainability", "Strategy"] },
        ]}
      />
      <DigitalDesignSection
        title="Development"
        description="
Software development is the process of designing, coding, testing, and refining applications to create efficient, user-centric solutions that meet technical and business requirements."
        animations={[
          [
            { type: "lottie", src: ThirdAnimation },
            { type: "lottie", src: ForthAnimation, bg: true },
            { type: "image", src: "https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66b601b5a8038eb545635723_branding-3_3.svg", alt: "Search Image", bg: true },
          ],
          [
            { type: "lottie", src: FifthAnimation, bg: true },
            { type: "lottie", src: SixthAnimation },
          ],
          [
            { type: "image", src: "https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66b601b53b749d656b2f4077_branding-3_1.svg", bg: true },
            { type: "image", src: "https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66b601ddc409dd0564d34376_branding-3_2.svg", bg: true },
            { type: "image", src: "https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66b601b5ae0ee5128ad33621_branding-3_4.svg", bg: true },
          ],
        ]}
        sections={[
          { title: "Full Stack", items: ["Frontend", "Backend", "Database", "API", "Deployment"] },
          { title: "Design", items: ["Aesthetics", "User Experience (UX)", "User Interface (UI)", "Prototyping", "Typography"] },
          { title: "Marketing", items: ["SEO (Search Engine Optimization)", "Content Marketing", "Social Media Marketing", " PPC (Pay-Per-Click)", "Email Marketing"] },
        ]}
      />

    </>
  );
}