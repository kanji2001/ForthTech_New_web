import { useInView } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const articles = [
  {
    category: "Contemporary Art",
    title: "Exploring modern posters, art, and their haunting dark themes.",
    date: "July 13, 2024",
    image: "./robotics.png",
    link: "#",
  },
  {
    category: "Packaging",
    title: "Unveiling the influence of branding through packaging designs.",
    date: "July 13, 2024",
    image: "./robotics.png",
    link: "#",
  },
  {
    category: "Contemporary Art",
    title: "Exploring modern posters, art, and their haunting dark themes.",
    date: "July 13, 2024",
    image: "./robotics.png",
    link: "#",
  },
  {
    category: "Packaging",
    title: "Unveiling the influence of branding through packaging designs.",
    date: "July 13, 2024",
    image: "./robotics.png",
    link: "#",
  },
];

export default function AboutArticles() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Run on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="w-full bg-black text-white py-13 px-6 lg:px-20">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            Discover more about what we do
          </h2>
          <p className="text-gray-400 mt-4">
            Information of our past project technology and experiment blogs
          </p>
        </div>

        {/* Articles Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.map((article, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { amount: 0.2, once: true });

            if (isMobile) {
              // Render a normal <a> tag on mobile (no animation)
              return (
                <a key={index} href={article.link} className="group block">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="mt-4">
                    <p className="text-sm text-gray-400 uppercase font-semibold">
                      Category — <span className="text-white">{article.category}</span>
                    </p>
                    <h3 className="mt-2 text-lg font-semibold group-hover:underline">
                      {article.title}
                    </h3>
                    <div className="flex justify-between items-center mt-4 border-t border-gray-700 pt-2">
                      <span className="text-gray-400 text-sm">{article.date}</span>
                      <span className="text-white text-lg">↗</span>
                    </div>
                  </div>
                </a>
              );
            }

            // Render motion.a with animation on desktop
            return (
              <motion.a
                key={index}
                href={article.link}
                className="group block"
                ref={ref}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: "linear" }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="mt-4">
                  <p className="text-sm text-gray-400 uppercase font-semibold">
                    Category — <span className="text-white">{article.category}</span>
                  </p>
                  <h3 className="mt-2 text-lg font-semibold group-hover:underline">
                    {article.title}
                  </h3>
                  <div className="flex justify-between items-center mt-4 border-t border-gray-700 pt-2">
                    <span className="text-gray-400 text-sm">{article.date}</span>
                    <span className="text-white text-lg">↗</span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
