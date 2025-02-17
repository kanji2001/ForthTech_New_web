import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion"; // Importing useInView hook

const AnimatedTextWord = ({ text }) => {
  const words = text.split(" ");
  
  // Variants for Container of words
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Scroll-triggered animation logic
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation happens once when the element enters the viewport
    threshold: 0.1, // Trigger animation when 10% of the element is visible
  });

  return (
    <motion.div
      ref={ref} // Reference to the container
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem", height: "100%", width: "100%" }}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Trigger animation when inView becomes true
    //   animate={"visible"} // Trigger animation when inView becomes true
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
