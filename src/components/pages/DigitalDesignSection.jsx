import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
import "./ServicePage.css";

export default function DigitalDesignSection({
  title = "Digital Design",
  description = "Creating visually stunning and user-friendly digital experiences.",
  animations = [],
  sections = [],
}) {
  const ref = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect (() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  })

  const offSetValues = windowWidth < 768 ? ["start 125%", "end start"] : ["start end", "end start"];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offSetValues
  });

  const h2Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 1], [0, 0.02, 0.2, 1, 1, 1]);
  const pOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.5, 1], [0, 0, 0.9, 1, 1]);

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center text-center bg-background-black text-white -mt-1 p-8">
      <motion.h2 className="text-[12vw] md:text-[10vw] font-medium" style={{ opacity: h2Opacity }}>
        {title}
      </motion.h2>

      <motion.p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl" style={{ opacity: pOpacity }}>
        {description}
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2 md:gap-6 mt-24 w-full max-w-6xl">
        {/* Left Section: Three-Column Layout */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3">
          {animations.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              {column.map((item, index) => (
                <div key={index} className={`w-18 lg:w-40 md:w-22 h-auto ${item.bg ? "bg-[#36343463] rounded-lg" : ""}`}>
                  {item.type === "lottie" ? (
                    <Lottie animationData={item.src} loop={true} />
                  ) : (
                    <img src={item.src} alt={item.alt || "image"} />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Right Section: Two-Column List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-2 mt-10 md:mt-0 md:pl-8 text-left w-full" style={{width : "104%"}} >
          {sections.map((section, index) => (
            <div key={index} className={`${index === 2 ? "third-grid-item" : ""}`}>
              <h3 className="text-xl lg:text-3xl md:text-xl sm:text-sm font-semibold" style={{paddingRight : "9px"}}>{section.title}</h3>
              <ul className="text-[14px] lg:text-lg md:text-sm text-gray-300 list-disc leading-7 mt-2 lg:leading-8 md:leading-6 pl-5 marker:text-red-500 ">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex justify-center sm:justify-start col-span-2 w-full">
            <button className="bg-button-red hover:bg-hover-blue text-white h-[55px] sm:h-[10vh] w-full sm:w-[110px] md:w-[120px] lg:w-[175px] rounded-lg font-semibold">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
 