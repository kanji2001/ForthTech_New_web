import { easeIn, easeInOut, motion, useSpring, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Cards() {
  const ref = useRef(null);
  const { scrollYProgress: cards } = useScroll({ target: ref, offset: ["start 30%", "end 90%"] });
  const { scrollYProgress: texts } = useScroll({ target: ref, offset: ["start 65%", "end 220%"] });

  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 765);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 3, // Adjust for smoother scrolling
      easing: (t) => 1 - Math.pow(1 - t, 10), // Custom easing for fluid effect
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  
  // ! custom control

  // const slowScrollProgress = useTransform(cards, (value) => value * 0.85);

  // const card1X = useTransform(slowScrollProgress, [0, 0.04, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.22, 0.24, 0.26, 0.3], [-380 ,-300, -250, -225, -200, -175, -150, -125, -100, -50, -30, 0], {ease : easeInOut});
  // const card1Rotate = useTransform(slowScrollProgress, [0.2, 0.3], [-10, 0], {ease : easeInOut});
  // const card1Opacity = useTransform(slowScrollProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1], [0, 0.3, 0.7, 0.75, 1, 1, 1], {ease : easeInOut});

  // const card2X = useTransform(slowScrollProgress, [0.3, 0.32, 0.34, 0.36, 0.38, 0.40, 0.42, 0.44, 0.46, 0.48, 0.5 , 0.52, 0.54], [300, 275, 250, 225, 200 ,175, 150, 125, 100, 75 , 50 , 25, 0], {ease : easeInOut}, {ease : easeInOut});
  // const card2Rotate = useTransform(slowScrollProgress, [0.3, 0.5], [15, 0], {ease : easeInOut});
  // const card2Opacity = useTransform(slowScrollProgress, [0, 0.2, 0.3, 0.5, 0.6], [0, 0.3, 0.5, 0.8, 1], {ease : easeInOut});

  // const card3X = useTransform(slowScrollProgress, [0.5, 0.6], [-150, 0], {ease : easeInOut}, {ease : easeInOut});
  // const card3Rotate = useTransform(slowScrollProgress, [0.4, 0.8], [-10, 0], {ease : easeInOut});
  // const card3Opacity = useTransform(slowScrollProgress, [0, 0.5, 0.6, 0.7,  1], [0, 0.3, 0.6, 0.9, 1], {ease : easeInOut});

  // const card4X = useTransform(cards, [0.6, 0.63, 0.66, 0.7, 0.73, 0.76, 0.8, 0.83, 0.86, 0.9], [300, 275, 250, 200, 175, 125, 100, 75, 50, 0], {ease : easeInOut}, {ease : easeInOut});
  // const card4Rotate = useTransform(cards, [0.6, 0.9], [11, 0], {ease : easeInOut});
  // const card4Opacity = useTransform(cards, [0, 0.5, 0.7, 0.8, 0.9, 1], [0, 0, 0.3, 0.6, 0.9, 1], {ease : easeInOut}); 

  // ! using slower scrollY

  const slowScrollProgress = useSpring(
    useTransform(cards, (value) => value * 1.5), 
    { stiffness: 50, damping: 7, mass : 0.3,  }
  );
  

  const card1X = useTransform(slowScrollProgress, [0, 0.4], [-380, 0], { ease: easeInOut });
  const card1Rotate = useTransform(slowScrollProgress, [0, 0.4], [-15, 0], { ease: easeInOut });
  const card1Opacity = useTransform(slowScrollProgress, [0, 0.4], [0, 1], { ease: easeInOut });
  
  const card2X = useTransform(slowScrollProgress, [0.5, 0.8], [300, 0], { ease: easeInOut });
  const card2Rotate = useTransform(slowScrollProgress, [0.5, 0.8], [15, 0], { ease: easeInOut });
  const card2Opacity = useTransform(slowScrollProgress, [0.5, 0.8], [0, 1], { ease: easeInOut });

  const card3X = useTransform(slowScrollProgress, [0.8, 1.15], [-300, 0], { ease: easeInOut });
  const card3Rotate = useTransform(slowScrollProgress, [0.8, 1.15], [-15, 0], { ease: easeInOut });
  const card3Opacity = useTransform(slowScrollProgress, [0.8, 1.15], [0, 1], { ease: easeInOut });

  const card4X = useTransform(slowScrollProgress, [1.2, 1.45], [200, 0], { ease: easeInOut });
  const card4Rotate = useTransform(slowScrollProgress, [1.2, 1.45], [15, 0], { ease: easeInOut });
  const card4Opacity = useTransform(slowScrollProgress, [1.2, 1.45], [0, 1], { ease: easeInOut });

  // ! using Spring

  // const slowScrollProgress =useSpring( useTransform(cards, (value) => value * 0.75), {stiffness : 80, damping : 20 , threshold : 0.6}) ;

  // const card1X = useSpring(useTransform(slowScrollProgress, [0, 0.1], [-380, 0], { ease: easeInOut }), { stiffness: 50, damping:18 , threshold : 0.5});
  // const card1Rotate = useSpring(useTransform(slowScrollProgress, [0, 0.2], [-10, 0], { ease: easeInOut }), { stiffness: 40, damping: 18, });
  // const card1Opacity = useSpring(useTransform(slowScrollProgress, [0, 0.2], [0, 1], { ease: easeInOut }), { stiffness: 40, damping: 18, });
  
  // const card2X = useSpring(useTransform(slowScrollProgress, [0.2, 0.3], [300, 0], { ease: easeInOut }), { stiffness: 40, damping: 18 , threshold : 0.1});
  // const card2Rotate = useSpring(useTransform(slowScrollProgress, [0.2, 0.3], [10, 0], { ease: easeInOut }), { stiffness: 40, damping: 18, threshold : 0.1 });
  // const card2Opacity = useSpring(useTransform(slowScrollProgress, [0.2, 0.3], [0, 1], { ease: easeInOut }), { stiffness: 40, damping: 18, threshold : 0.1 });

  // const card3X = useSpring(useTransform(slowScrollProgress, [0.4, 0.5], [-300, 0], { ease: easeInOut }), { stiffness: 40, damping: 18, threshold : 0.1 });
  // const card3Rotate = useSpring(useTransform(slowScrollProgress, [0.4, 0.5], [-10, 0], { ease: easeInOut }), { stiffness: 40, damping: 18, threshold : 0.1 });
  // const card3Opacity = useSpring(useTransform(slowScrollProgress, [0.4, 0.5], [0, 1], { ease: easeInOut }), { stiffness: 40, damping: 18, threshold : 0.1 });

  // const card4X = useSpring(useTransform(slowScrollProgress, [0.6, 0.7], [210, 0], { ease: easeInOut }), { stiffness: 50 , damping: 20 , threshold : 0.1});
  // const card4Rotate = useSpring(useTransform(slowScrollProgress, [0.6, 0.7], [10, 0], { ease: easeInOut }), { stiffness: 40, damping: 18, threshold : 0.1 });
  // const card4Opacity = useSpring(useTransform(slowScrollProgress, [0.6, 0.7], [0, 1], { ease: easeInOut }), { stiffness: 40, damping: 18, threshold : 0.1 });

  if (typeof window !== "undefined") {
    document.body.style.overflow = "scroll"; 
    document.body.style.scrollBehavior = "smooth"; 
  }

  const text = "We prove, design,implement, and market your idea with absolute transparency and efficiency in it's core";
  const letters = text.split(" ");

  return (
   <div ref={ref} className="bg-black min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-8 md:px-10 py-16 overflow-hidden">
  {/* <h1 className="text-center text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold max-w-xl lg:max-w-2xl leading-snug">
    {letters.map((letter, i) => (
      <motion.span 
        key={i}
        className="inline-block mr-1 sm:mr-2"
        style={{
          opacity: !isMobile 
            ? useTransform(texts, [i / letters.length, (i + 1) / letters.length], [0, 1]) 
            : useTransform(texts, [0,  1], [0.1, 1]),
          transition: "opacity 1s ease"
        }}
      >
        {letter}
      </motion.span>
    ))}
  </h1> */}

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-10 md:gap-14 mt-12 max-w-6xl w-full px-4">
    
    {/* Card 1 */}
    <motion.div 
      className="bg-[#111] p-6 rounded-xl shadow-lg flex flex-col justify-between w-full h-auto sm:h-[320px]"
      style={{
        x: !isMobile ? card1X : 0,
        rotate: !isMobile ? card1Rotate : 0,
        opacity: !isMobile ? card1Opacity : 1
      }}
    >
      <div className="flex flex-col items-start">
        <img src="./ClientLogo/cardFirstdata.webp" alt="first card logo" 
          className="w-24 sm:w-40 md:w-52 lg:w-60 self-start"
        />
        <h1 className="text-2xl sm:text-4xl md:text-[64px] lg:text-[88px] font-bold mt-4 sm:mt-7">
          $300m
        </h1>
        <p className="text-xs sm:text-sm md:text-base mt-4 sm:mt-6">
          In funding clients raised owing to our design work
        </p>
      </div>
    </motion.div>

    {/* Card 2 */}
    <motion.div 
      className="bg-[#111] p-6 rounded-xl shadow-lg flex flex-col justify-between w-full h-auto sm:h-[320px] sm:mt-15"
      style={{
        x: !isMobile ? card2X : 0,
        rotate: !isMobile ? card2Rotate : 0,
        opacity: !isMobile ? card2Opacity : 1
      }}
    >
      <div className="flex flex-col items-start">
        <img src="./ClientLogo/cardFirstdata.webp" alt="first card logo"
          className="w-24 sm:w-40 md:w-52 lg:w-60 self-start"
        />
        <h1 className="text-2xl sm:text-4xl md:text-[64px] lg:text-[88px] font-bold mt-4 sm:mt-7">
          60+
        </h1>
        <p className="text-xs sm:text-sm md:text-base mt-4 sm:mt-6">
          In funding clients raised owing to our design work
        </p>
      </div>
    </motion.div>

    {/* Card 3 */}
    <motion.div 
      className="bg-[#111] p-6 rounded-xl shadow-lg flex flex-col justify-between w-full h-auto sm:h-[320px] sm:-mt-15 "
      style={{
        x: !isMobile ? card3X : 0,
        rotate: !isMobile ? card3Rotate : 0,
        opacity: !isMobile ? card3Opacity : 1
      }}
    >
      <div className="flex flex-col items-start">
        <img src="./ClientLogo/cardFirstdata.webp" alt="first card logo"
          className="w-24 sm:w-40 md:w-52 lg:w-60 self-start"
        />
        <h1 className="text-2xl sm:text-4xl md:text-[64px] lg:text-[88px] font-bold mt-4 sm:mt-7">
          100M
        </h1>
        <p className="text-xs sm:text-sm md:text-base mt-4 sm:mt-6">
          In funding clients raised owing to our design work
        </p>
      </div>
    </motion.div>

    {/* Card 4 */}
    <motion.div 
      className="bg-[#111] p-6 rounded-xl shadow-lg flex flex-col justify-between w-full h-auto sm:h-[320px]"
      style={{
        x: !isMobile ? card4X : 0,
        rotate: !isMobile ? card4Rotate : 0,
        opacity: !isMobile ? card4Opacity : 1
      }}
    >
      <div className="flex flex-col items-start">
        <img src="./ClientLogo/cardFirstdata.webp" alt="first card logo"
          className="w-24 sm:w-40 md:w-52 lg:w-60 self-start"
        />
        <h1 className="text-2xl sm:text-4xl md:text-[64px] lg:text-[88px] font-bold mt-4 sm:mt-7">
          24%
        </h1>
        <p className="text-xs sm:text-sm md:text-base mt-4 sm:mt-6">
          In funding clients raised owing to our design work
        </p>
      </div>
    </motion.div>

  </div>
</div>

  );
}