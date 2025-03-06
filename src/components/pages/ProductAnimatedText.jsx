import { useState, useEffect } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";

const AnimatedText = ({ letters = "" }) => {  // Ensure letters is always defined
  const [isMobile, setIsMobile] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const texts = useMotionValue(0); // Ensure this is a motionValue

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 765);
      setIsLargeScreen(window.innerWidth > 1440);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ensure letters is an array before mapping
  const letterArray = typeof letters === "string" ? letters.split("") : letters;
  
  return (
    <h1 className="text-center text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold max-w-xl lg:max-w-2xl leading-snug">
      {letterArray.map((letter, i) => {
        const opacityValue = useTransform(
          texts,
          isMobile || isLargeScreen
            ? [0, 0.2, 0.4, 0.6, 0.8, 1] // Evenly spread for both mobile and large screens
            : [i / letterArray.length, (i + 1) / letterArray.length], // Original for mid-sized screens
          isMobile || isLargeScreen
            ? [0, 0.4, 0.6, 0.8, 1, 1]
            : [0, 1]
        );

        return (
          <motion.span
            key={i}
            className="inline-block mr-1 sm:mr-2"
            style={{ opacity: opacityValue }}
          >
            {letter}
          </motion.span>
        );
      })}
    </h1>
  );
};

export default AnimatedText;
