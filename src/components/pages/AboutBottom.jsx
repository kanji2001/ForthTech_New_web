import React, { useEffect, useRef, useState } from 'react'
import { motion , useInView} from "framer-motion";

const AboutBottom = () => {
  

      const BottomSectionRef = useRef(null);
      const BottomIsInView = useInView(BottomSectionRef, { amount: 0.2, once: true })
    
      const [isMobile, setIsMobile] = useState();

       useEffect(() => {
          const handleResize = () => {
            setIsMobile(window.innerWidth < 765);
          };
      
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, [])

  return (
    <>
         <section className="container mx-auto py-14 px-4 sm:px-6 md:px-8">
                      <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
                        {/* Left Side - Image */}
                        <div className="col-span-12 lg:col-span-6">
                          <img
                            src="./robotics.png"
                            alt="Descriptive Alt Text"
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
        
                        {/* Right Side - Text */}
                        <motion.div
                          className="col-span-12 lg:col-span-6 w-full"
                          ref={BottomSectionRef}
                          initial={!isMobile ? { y: 50, opacity: 0 } : { y: 0, opacity: 1 }}
                          animate={!isMobile && BottomIsInView ? { y: 0, opacity: 1 } : {}}
                          transition={{ duration: 0.6, ease: "linear" }}
                        >
                          <h2 className="font-bold text-gray-900 text-lg sm:text-xl leading-relaxed text-center md:text-left">
                            Forthtech began in 2021, founded by a team of four passionate tech enthusiasts driven by a shared vision of innovation and excellence.
                          </h2>
        
                          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-4 text-center md:text-left">
                            Adapting and Evolving
                          </h2>
                          <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify mt-4">
                            Over the years, Forthtech has embraced technological advancements and industry trends, continuously evolving to meet the diverse needs of our clients.
                            With a focus on cutting-edge innovation and a customer-centric approach, we’ve delivered impactful solutions across various domains.
                          </p>
        
                          <hr className="mt-5 opacity-50 mb-4" />
        
                          <div className="grid grid-cols-12 items-center text-center md:text-left">
                            <div className="col-span-12 md:col-span-6">
                              <h2 className="text-4xl sm:text-5xl font-semibold text-[#ff2424]">24 Team</h2>
                              <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-2">
                                Tech Enthusiasts
                              </p>
                            </div>
                            <div className="col-span-12 md:col-span-6 mt-6 md:mt-0">
                              <h2 className="text-4xl sm:text-5xl font-semibold text-[#ff2424]">150+</h2>
                              <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-2">
                                Clients and Companies Connected
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </section>
    </>
  )
}

export default AboutBottom