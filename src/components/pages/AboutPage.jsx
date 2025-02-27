import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import './AboutPage.css'
import Carousel from '../../components/pages/Carousel'
// import HorizontalScrollSection from './HorizontalScrollSection'
import AboutArticles from '../../components/pages/AboutArticles'
import AboutBottom from '../../components/pages/AboutBottom'
import AboutForthTech from '../../components/pages/AboutForthTech'
import AboutTeam from '../../components/pages/AboutTeam'


function AboutPage() {
  // const count = useMotionValue(10000)
  // const rounded = useTransform(() => Math.round(count.get()))
  // const [displayCount, setDisplayCount] = React.useState(0);

  // useEffect(() => {
  //   window?.scrollTo({ top: 0 })
  // }, [])

  // useEffect(() => {
  //   const unsubscribe = rounded.on("change", (latest) => {
  //     setDisplayCount(latest);
  //   });
  //   return () => unsubscribe();
  // }, [rounded]);

  // const count1 = useMotionValue(4450)
  // const rounded1 = useTransform(() => Math.round(count1.get()))
  // const [displayCount1, setDisplayCount1] = React.useState(0);
  // const [targetSection, SetTargetSection] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = rounded1.on("change", (latest) => {
  //     setDisplayCount1(latest);
  //   });
  //   return () => unsubscribe();
  // }, [rounded1]);


  // const count2 = useMotionValue(30)
  // const rounded2 = useTransform(() => Math.round(count2.get()))
  // const [displayCount2, setDisplayCount2] = React.useState(0);

  // useEffect(() => {
  //   const unsubscribe = rounded2.on("change", (latest) => {
  //     setDisplayCount2(latest);
  //   });
  //   return () => unsubscribe();
  // }, [rounded2]);

  // const count3 = useMotionValue(37000)
  // const rounded3 = useTransform(() => Math.round(count3.get()))

  // const [displayCount3, setDisplayCount3] = React.useState(0);

  // useEffect(() => {
  //   const unsubscribe = rounded3.on("change", (latest) => {
  //     setDisplayCount3(latest);
  //   });
  //   return () => unsubscribe();
  // }, [rounded3]);

  // const count4 = useMotionValue(0)
  // const rounded4 = useTransform(() => Math.round(count4.get()))
  // const [displayCount4, setDisplayCount4] = React.useState(0);

  // useEffect(() => {
  //   const unsubscribe = rounded4.on("change", (latest) => {
  //     setDisplayCount4(latest);
  //   });
  //   return () => unsubscribe();
  // }, [rounded4]);

  // useEffect(() => {
  //   const controls = animate(count, 100000, { duration: 2 });
  //   return () => controls.stop();
  // }, []);

  // useEffect(() => {
  //   const controls1 = animate(count1, 5450, { duration: 2 });
  //   return () => controls1.stop();
  // }, []);

  // useEffect(() => {
  //   const controls2 = animate(count2, 160, { duration: 2 });
  //   return () => controls2.stop();
  // }, []);

  // useEffect(() => {
  //   const controls3 = animate(count3, 38000, { duration: 2 });
  //   return () => controls3.stop();
  // }, []);

  // useEffect(() => {
  //   const controls4 = animate(count4, 11, { duration: 2 });
  //   return () => controls4.stop();
  // }, []);

 

  // for arrow 
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    document.getElementById("targetSection")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className='bg-background-gray mt-0 md:mt-0'>
        <section>
          <div className="flex flex-col items-center">
            {/* Main Content Area */}
            <div className="w-full flex flex-col items-center justify-start mt-20">
              <div className="text-center md:text-start space-y-2">
                <h6 className="font-bold text-2xl tracking-wider mt-3">
                  <span className="text-[#ff2424]">Forth</span><span>Tech</span>
                </h6>

                <span className="text-3xl sm:text-5xl font-semibold tracking-wider">
                  TRANSFORMING IDEAS
                </span>
                <div className="text-center md:text-start space-y-2 tracking-wider">
                  <span className="text-3xl sm:text-5xl font-semibold">INTO IMPACTFUL</span>
                </div>
                <div className="text-center md:text-start space-y-2 tracking-wider">
                  <span className="text-3xl sm:text-5xl font-semibold">SOLUTIONS</span>
                </div>
                <div className="text-center md:text-start space-y-2 tracking-wider">
                  <span className="text-3xl sm:text-5xl font-semibold">DRIVEN BY INNOVATION</span>
                </div>
                <div className="text-center md:text-start space-y-2 tracking-wider">
                  <span className="text-3xl sm:text-5xl font-semibold">POWERED BY EXPERTISE</span>
                </div>
                <div className="text-center md:text-start space-y-2 tracking-wider mt-7">
                  <div className="flex justify-center md:justify-start">
                    <div
                      className={`flex flex-col items-center cursor-pointer transition-transform duration-300 ${clicked ? "translate-y-4" : "hover:translate-y-5"
                        }`}
                      onClick={handleClick}
                    >
                      <div className="w-[1.5px] h-20 bg-black"></div>
                      <div className="w-3 h-3 -mt-3 border-l border-b border-black rotate-[-45deg]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <section id='targetSection' className="flex justify-center items-center w-auto mt-25">
              <div className="my-14 w-auto">
                <video src="LandingVideo.mp4" className="w-auto" autoPlay loop muted></video>
              </div>
            </section>
            <AboutForthTech/>
            <AboutBottom />
            <AboutTeam/>
            <Carousel />
            <AboutArticles />

          </div>
        </section>

        {/* <HorizontalScrollSection /> */}

        {/* <section>
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
        </section> */}
      </div>
    </>
  )
}

export default AboutPage