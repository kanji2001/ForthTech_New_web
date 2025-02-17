import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import classicPizza1 from "../../images/first.webp";
import thinAndCrispyPizza1 from "../../images/second.webp";
import thinAndCrispyPizza2 from "../../images/third.webp";
import thickCrustPizza1 from "../../images/four.webp";
import thickCrustPizza2 from "../../images/first.webp";

const HorizontalScrollSection = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const xScroll = useTransform(scrollYProgress, [0, 1], ["0%", "-81%"]);

  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.4], [1.1, 0.6]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6], [1.2, 0.6]);
  const opacity4 = useTransform(scrollYProgress, [0.7, 0.8], [2.5, 0.8]);
  const opacity5 = useTransform(scrollYProgress, [1, 1], [6, 1]);

  return (
    <section ref={scrollRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-10 h-screen flex items-center overflow-hidden">
        <motion.div className="flex space-x-4 w-[500vw]" style={{ x: xScroll }}>
          {/* First div */}
          <motion.div
            className="flex-shrink-0 w-screen h-screen flex items-center justify-center p-8"
            style={{ opacity: opacity1 }}
          >
            <div className="flex w-full h-full flex-row">
              <div className="w-[30%] flex flex-col items-start justify-center p-8 bg-black rounded-lg text-white">
                <h1 className="text-4xl md:text-5xl lg:text-[100px] font-bold">2017</h1>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">
                  Focus on advanced visual design that sets startups apart.
                </p>
              </div>
              <div className="w-[100%] flex items-center justify-center p-8 bg-black rounded-lg">
                <img
                  src={classicPizza1}
                  alt="Pizza"
                  className="w-[100%] h-[100%] object-contain rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Second div */}
          <motion.div
            className="flex-shrink-0 w-screen h-screen flex items-center justify-center p-8"
            style={{ opacity: opacity2 }}
          >
            <div className="flex w-full h-full flex-row-reverse">
              <div className="w-[30%] flex flex-col items-start justify-center p-8 bg-black rounded-lg text-white">
                <h1 className="text-4xl md:text-5xl lg:text-[100px] font-bold">2019</h1>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">
                  Expansion of services in UX and branding.
                </p>
              </div>
              <div className="w-[100%] flex items-center justify-center p-8 bg-black rounded-lg">
                <img
                  src={thinAndCrispyPizza1}
                  alt="Pizza"
                  className="w-[100%] h-[100%] object-contain rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Third div */}
          <motion.div
            className="flex-shrink-0 w-screen h-screen flex items-center justify-center p-8"
            style={{ opacity: opacity3 }}
          >
            <div className="flex w-full h-full flex-row">
              <div className="w-[30%] flex flex-col items-start justify-center p-8 bg-black rounded-lg text-white">
                <h1 className="text-4xl md:text-5xl lg:text-[100px] font-bold">2021</h1>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="w-[100%] flex items-center justify-center p-8 bg-black rounded-lg">
                <img
                  src={thinAndCrispyPizza2}
                  alt="Pizza"
                  className="w-[100%] h-[100%] object-contain rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Fourth div */}
          <motion.div
            className="flex-shrink-0 w-screen h-screen flex items-center justify-center p-8"
            style={{ opacity: opacity4 }}
          >
            <div className="flex w-full h-full flex-row-reverse">
              <div className="w-[30%] flex flex-col items-start justify-center p-8 bg-black rounded-lg text-white">
                <h1 className="text-4xl md:text-5xl lg:text-[100px] font-bold">2024</h1>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">
                  Numquam, possimus. Saepe dolor deleniti doloremque.
                </p>
              </div>
              <div className="w-[100%] flex items-center justify-center p-8 bg-black rounded-lg">
                <img
                  src={thickCrustPizza1}
                  alt="Pizza"
                  className="w-[100%] h-[100%] object-contain rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Fifth div */}
          <motion.div
            className="flex-shrink-0 w-screen h-screen flex items-center justify-center p-8"
            style={{ opacity: opacity5 }}
          >
            <div className="flex w-full h-full flex-row">
              <div className="w-[30%] flex flex-col items-start justify-center p-8 bg-black rounded-lg text-white">
                <h1 className="text-4xl md:text-5xl lg:text-[100px] font-bold">2024</h1>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">
                  Recusandae ex reprehenderit asperiores sed et.
                </p>
              </div>
              <div className="w-[100%] flex items-center justify-center p-8 bg-black rounded-lg">
                <img
                  src={thickCrustPizza2}
                  alt="Pizza"
                  className="w-[100%] h-[100%] object-contain rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollSection;
