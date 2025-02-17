import { animate,motion, useMotionValue, useTransform } from 'framer-motion'
import React, { useEffect } from 'react'
import './AboutPage.css'
import HorizontalScrollSection from './HorizontalScrollSection'
function AboutPage() {
  const count = useMotionValue(10000)
  const rounded = useTransform(() => Math.round(count.get()))
  const [displayCount, setDisplayCount] = React.useState(0);

  useEffect(()=>{
    window?.scrollTo({top:0})
  },[])

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

const text = "Lorem ipsum dolor".split(" ");
const text1 = "Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto velit fuga voluptatem? Vitae at laborum debitis architecto saepe deserunt.".split(" ");
const text2 = "Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto velit fuga v".split(" ");


  return (
    <>
    <div className='bg-[#d6eadf]'>  
    <section>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 h-full   sm:grid-cols-2 '>
          <div className='h-full w-auto text-white p-4 sm:py-10 sm:px-[100px] space-y-4 gap-x-10 px-14 bg-[#314026] flex justify-center items-center'>
                      <div className="App space-y-6">
                              <div className='text-center'>
                              {text.map((el, i) => (
                                <motion.span
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{
                                    duration: 5,
                                    delay: i / 10,
                                  }}
                                  className='text-center text-5xl'
                                  key={i}
                                >
                                  {el}{" "}
                                </motion.span>
                              ))}
                              </div>
                              <div className='text-center'>
                              {text1.map((el, i) => (
                                <motion.span
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{
                                    duration: 5,
                                    delay: i / 10,
                                  }}
                                  className='text-xl text-center'                                 
                                   key={i}
                                >
                                  {el}{" "}
                                </motion.span>
                              ))}
                              </div>
                              <div className='text-center'>
                                
                              {text2.map((el, i) => (
                                <motion.span
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{
                                    duration: 5,
                                    delay: i / 10,
                                  }}
                                  className='text-xl text-center'                                  
                                  key={i}
                                >
                                  {el}{" "}
                                </motion.span>
                              ))}
                              </div>
                            </div>
             </div>
          <motion.div 
           className='h-full  sm:px-[100px] sm:py-10 w-auto flex justify-center items-center bg-[#314026]'>
              <motion.img whileHover={{ scale: 1.2, rotateY: -10, x: -30 }} // Moves left on hover
              whileTap={{ scale: 0.8 }}
              
              
    src="my.jpg" className='rounded-3xl h-[80%] w-[80%]' alt="" />
          </motion.div>
        </div>
      </div>
    </section>


    {/* video  */}
    <section className='flex justify-center items-center'>

      <div className='my-14 h-[300px] ' >
      <video 
          src="1st.mp4" 
          className="h-full" 
          autoPlay 
          loop 
          muted
        ></video>
      </div>

    </section>

    <HorizontalScrollSection/>

    <section>
      <div className='m-10'>
        <div className='flex sm:flex-row sm:justify-around justify-center items-center  flex-col '>
          <div className='my-6'>
            
          <motion.pre className="text-5xl font-bold bg-gradient-to-r from-[#37da4a] to-[#125b22] bg-clip-text text-transparent text-center">
          {`${displayCount}+`}
          </motion.pre>
        
            <p className='text-center text-2xl'>Customers</p>
          </div>
          <div className='my-6'>
          <motion.pre className="text-5xl font-bold bg-gradient-to-r from-[#37da4a] to-[#125b22] bg-clip-text text-transparent text-center">
          {`${displayCount1}+`}
          </motion.pre>
          <p className='text-center text-2xl'>Global Employees</p>
          </div>
          <div className='my-6'>
          <motion.pre className="text-5xl font-bold bg-gradient-to-r from-[#37da4a] to-[#125b22] bg-clip-text text-transparent text-center">
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
                <div  className='flex  justify-center items-center  flex-col'>
                <h1 className='text-3xl mb-6  sm:text-5xl text-center'>Be a force for good</h1>
                <p className='text-md  mb-6  sm:text-2xl text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium id ipsam ea mollitia neque, incidunt hic esse veritatis cum fugiat!</p>
                <button className='bg-green-800 text-white hover:bg-green-600 hover:text-black px-3 rounded-lg py-2' onClick={()=>{}}>Our websiite</button>
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
          <motion.pre className="text-5xl font-bold bg-gradient-to-r from-[#37da4a] to-[#125b22] bg-clip-text text-transparent text-center">
            {`${displayCount3}+`}
          </motion.pre>
            <p className='text-center text-2xl'>Customers Lorem, ipsum.</p>
          </div>
          <div className='my-6'>
          <motion.pre className="text-5xl font-bold bg-gradient-to-r from-[#37da4a] to-[#125b22] bg-clip-text text-transparent text-center">
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