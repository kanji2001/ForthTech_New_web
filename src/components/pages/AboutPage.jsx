import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import './AboutPage.css'
import HorizontalScrollSection from './HorizontalScrollSection'
function AboutPage() {
  const count = useMotionValue(10000)
  const rounded = useTransform(() => Math.round(count.get()))
  const [displayCount, setDisplayCount] = React.useState(0);

  useEffect(() => {
    window?.scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayCount(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  const count1 = useMotionValue(4450)
  const rounded1 = useTransform(() => Math.round(count1.get()))
  const [displayCount1, setDisplayCount1] = React.useState(0);

  useEffect(() => {
    const unsubscribe = rounded1.on("change", (latest) => {
      setDisplayCount1(latest);
    });
    return () => unsubscribe();
  }, [rounded1]);


  const count2 = useMotionValue(30)
  const rounded2 = useTransform(() => Math.round(count2.get()))
  const [displayCount2, setDisplayCount2] = React.useState(0);

  useEffect(() => {
    const unsubscribe = rounded2.on("change", (latest) => {
      setDisplayCount2(latest);
    });
    return () => unsubscribe();
  }, [rounded2]);

  const count3 = useMotionValue(37000)
  const rounded3 = useTransform(() => Math.round(count3.get()))

  const [displayCount3, setDisplayCount3] = React.useState(0);

  useEffect(() => {
    const unsubscribe = rounded3.on("change", (latest) => {
      setDisplayCount3(latest);
    });
    return () => unsubscribe();
  }, [rounded3]);

  const count4 = useMotionValue(0)
  const rounded4 = useTransform(() => Math.round(count4.get()))
  const [displayCount4, setDisplayCount4] = React.useState(0);

  useEffect(() => {
    const unsubscribe = rounded4.on("change", (latest) => {
      setDisplayCount4(latest);
    });
    return () => unsubscribe();
  }, [rounded4]);

  useEffect(() => {
    const controls = animate(count, 100000, { duration: 2 });
    return () => controls.stop();
  }, []);

  useEffect(() => {
    const controls1 = animate(count1, 5450, { duration: 2 });
    return () => controls1.stop();
  }, []);

  useEffect(() => {
    const controls2 = animate(count2, 160, { duration: 2 });
    return () => controls2.stop();
  }, []);

  useEffect(() => {
    const controls3 = animate(count3, 38000, { duration: 2 });
    return () => controls3.stop();
  }, []);

  useEffect(() => {
    const controls4 = animate(count4, 11, { duration: 2 });
    return () => controls4.stop();
  }, []);

  const rightFirstSectionRef = useRef(null);
  const FirstIsInView = useInView(rightFirstSectionRef, { amount: 0.2 })

  const rightSecondSectionRef = useRef(null);
  const SecondIsInView = useInView(rightSecondSectionRef, { amount: 0.3 })

  const rightThirdSectionRef = useRef(null);
  const ThirdIsInView = useInView(rightThirdSectionRef, { amount: 0.4 })

  const rightForthSectionRef = useRef(null);
  const ForthIsInView = useInView(rightForthSectionRef, { amount: 0.5 })

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
      <div className='bg-background-gray mt-9 md:mt-0'>
        <section>
          <div className="flex flex-col items-center">
            {/* Main Content Area */}
            <div className="w-full flex flex-col items-center justify-start mt-20">
              <div className="text-center md:text-start space-y-2">
                <h6 className="font-bold text-2xl tracking-wider">
                  <span className="text-[#ff2424]">Forth</span><span>Tech</span>
                </h6>

                <span className="text-4xl font-semibold tracking-wider">
                  TRANSFORMING IDEAS
                </span>
                <div className="text-center md:text-start space-y-2 tracking-wider">
                  <span className="text-4xl font-semibold">INTO IMPACTFUL</span>
                </div>
                <div className="text-center md:text-start space-y-2 tracking-wider">
                  <span className="text-4xl font-semibold">ADVERTISING</span>
                </div>
                <div className="text-center md:text-start space-y-2 tracking-wider">
                  <span className="text-4xl font-semibold">CAMPAIGNS</span>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <section className="flex justify-center items-center w-auto">
              <div className="my-14 w-auto">
                <video src="LandingVideo.mp4" className="w-auto" autoPlay loop muted></video>
              </div>
            </section>

            {/* Grid Section */}
            <section className="container mx-auto py-14 px-15" style={{ textAlign: 'justify' }}>
              {/* First Section - 2 Column Grid */}
              <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-12 md:col-span-4">
                  <h2 className="text-lg font-bold">Innovating Today for a Smarter Tomorrow</h2>
                </div>
                <motion.div className="col-span-12 md:col-span-8"
                  ref={rightFirstSectionRef}
                  initial={!isMobile ? { y: 50, opacity: 0 } : { y: 0, opacity: 1 }}
                  animate={!isMobile && FirstIsInView ? { y: 0, opacity: 1 } : {}}
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
                    Innovating solutions to transform your business and ideas into reality
                  </p>
                </div>
                <div className="col-span-12 md:col-span-8 grid grid-cols-12 gap-6">
                  <motion.div
                    ref={rightSecondSectionRef}
                    initial={!isMobile ? { y: 50, opacity: 0 } : { y: 0, opacity: 1 }}
                    animate={!isMobile && SecondIsInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="col-span-12 sm:col-span-6 md:col-span-6">
                    <p className="text-md font-normal">Nr. 01</p>
                    <h3 className="text-lg font-semibold mt-2">Robotics Solutions</h3>
                    <p className="text-gray-500">
                      We design and develop advanced robotic systems tailored for specific tasks, offering precision, flexibility, and innovation to meet your unique requirements.
                    </p>
                  </motion.div>
                  <motion.div
                    ref={rightSecondSectionRef}
                    initial={!isMobile ? { y: 50, opacity: 0 } : { y: 0, opacity: 1 }}
                    animate={!isMobile && SecondIsInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="col-span-12 sm:col-span-6 md:col-span-6">
                    <p className="text-md font-normal">Nr. 02</p>
                    <h3 className="text-lg font-semibold mt-2">Automation Solutions</h3>
                    <p className="text-gray-500">
                      Our automation services streamline processes with smart technologies, increasing efficiency and reducing operational costs for businesses across industries.
                    </p>
                  </motion.div>
                  <motion.div
                    ref={rightThirdSectionRef}
                    initial={!isMobile ? { y: 50, opacity: 0 } : { y: 0, opacity: 1 }}
                    animate={!isMobile && ThirdIsInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="col-span-12 sm:col-span-6 md:col-span-6">
                    <p className="text-md font-normal">Nr. 03</p>
                    <h3 className="text-lg font-semibold mt-2">Product Design & Prototyping</h3>
                    <p className="text-gray-500">
                      We craft innovative product designs and prototypes, turning your concepts into market-ready solutions with precision and creativity.
                    </p>
                  </motion.div>
                  <motion.div
                    ref={rightThirdSectionRef}
                    initial={!isMobile ? { y: 50, opacity: 0 } : { y: 0, opacity: 1 }}
                    animate={!isMobile && ThirdIsInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="col-span-12 sm:col-span-6 md:col-span-6">
                    <p className="text-md font-normal">Nr. 04</p>
                    <h3 className="text-lg font-semibold mt-2">Software Development</h3>
                    <p className="text-gray-500">
                      Our software development expertise ensures robust, scalable, and user-centric applications tailored to your business needs.
                    </p>
                  </motion.div>
                  <motion.div
                    ref={rightForthSectionRef}
                    initial={!isMobile ? { y: 50, opacity: 0 } : { y: 0, opacity: 1 }}
                    animate={!isMobile && ForthIsInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="col-span-12 sm:col-span-6 md:col-span-6">
                    <p className="text-md font-normal">Nr. 05</p>
                    <h3 className="text-lg font-semibold mt-2">Website Development</h3>
                    <p className="text-gray-500">
                      We build engaging and responsive websites that amplify your online presence and captivate your audience.
                    </p>
                  </motion.div>
                  <motion.div
                    ref={rightForthSectionRef}
                    initial={!isMobile ? { y: 50, opacity: 0 } : { y: 0, opacity: 1 }}
                    animate={!isMobile && ForthIsInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="col-span-12 sm:col-span-6 md:col-span-6">
                    <p className="text-md font-normal">Nr. 06</p>
                    <h3 className="text-lg font-semibold mt-2">Application Development</h3>
                    <p className="text-gray-500">
                      From mobile apps to enterprise software, we develop innovative applications that drive user engagement and business growth.
                    </p>
                  </motion.div>
                </div>
              </div>

            </section>

          </div>
        </section>

        <HorizontalScrollSection />

        <section>
          <div className='m-10'>
            <div className='flex sm:flex-row sm:justify-around justify-center items-center  flex-col '>
              <div className='my-6'>

                <motion.pre className="text-5xl font-bold bg-text-red bg-clip-text text-transparent text-center">
                  {`${displayCount}+`}
                </motion.pre>

                <p className='text-center text-2xl'>Customers</p>
              </div>
              <div className='my-6'>
                <motion.pre className="text-5xl font-bold bg-text-red bg-clip-text text-transparent text-center">
                  {`${displayCount1}+`}
                </motion.pre>
                <p className='text-center text-2xl'>Global Employees</p>
              </div>
              <div className='my-6'>
                <motion.pre className="text-5xl font-bold bg-text-red bg-clip-text text-transparent text-center">
                  {`${displayCount2}+`}
                </motion.pre>
                <p className='text-center text-2xl'>Customer countries and territories</p>
              </div>

            </div>
          </div>
        </section>


        <section className='py-10'>
          <div className='flex justify-center items-center '>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4'>
              <div className=' flex justify-center items-center'>
                <div className="relative w-[250px] h-[250px]">
                  <img
                    src="image.png"
                    alt="Star Shaped Image"
                    className="w-full h-full object-cover clip-star"
                  />
                </div>
              </div>
              <div>
                <div className='m-10'>
                  <div className='flex  justify-center items-center  flex-col'>
                    <h1 className='text-3xl mb-6  sm:text-5xl text-center'>Be a force for good</h1>
                    <p className='text-md  mb-6  sm:text-2xl text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium id ipsam ea mollitia neque, incidunt hic esse veritatis cum fugiat!</p>
                    <button className='bg-text-red text-white hover:bg-hover-blue hover:text-white px-3 rounded-lg py-2' onClick={() => { }}>Our websiite</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='pb-20'>
          <div className='m-10'>
            <div className='flex sm:flex-row sm:justify-around justify-center items-center  flex-col '>

              <div className='my-6'>
                <motion.pre className="text-5xl font-bold bg-text-red bg-clip-text text-transparent text-center">
                  {`${displayCount3}+`}
                </motion.pre>
                <p className='text-center text-2xl'>Customers Lorem, ipsum.</p>
              </div>
              <div className='my-6'>
                <motion.pre className="text-5xl font-bold bg-text-red bg-clip-text text-transparent text-center">
                  {`${displayCount4}+`}
                </motion.pre>
                <p className='text-center text-2xl'>Customers Lorem, ipsum.</p>
              </div>


            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutPage