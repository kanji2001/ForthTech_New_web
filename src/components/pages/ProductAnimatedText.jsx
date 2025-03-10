import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedText() {
  const text = "We prove, design, implement, and market your idea with absolute transparency and efficiency in its core";
  const letters = text.split(""); 
  const ref = useRef(null);


  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 100%"],
  });

  return (
    <div ref={ref} className="flex justify-center items-center min-h-[50vh] overflow-hidden">
      <h1 className="text-center text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold max-w-2xl leading-snug">
        {letters.map((letter, i) => {
         
          const start = (i + 1) / letters.length;
          const end = i / letters.length;

          const opacity = useTransform(scrollYProgress, [end, start], [0, 1]);


          return (
            <motion.span
              key={i}
              className="inline-block"
              style={{ opacity}}
              transition={{
                duration: 10, 
                ease: "easeOut",
                delay: i * 0.8,
              }}
            >
              {letter === " " ? "\u00A0" : letter} 
            </motion.span>
          );
        })}
      </h1>
    </div>
  );
}



