import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LoginSection from "./ServicesBrandingLoginSection";

export default function BrandingPage() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.6, 0.3]);
    const opacity = useTransform(scrollYProgress, [0.3, 0.7, 1], [0, 1, 1]);
    const translateY = useTransform(scrollYProgress, [0, 0.7, 1], [50, 0, -20]);
    const fixed = useTransform(scrollYProgress, (v) => (v > 0.8 ? "fixed" : "relative"));
    const top = useTransform(scrollYProgress, (v) => (v > 0.8 ? "10px" : "auto"));

    return (
        <>    <section ref={sectionRef} className="relative h-[200vh] flex items-center justify-center">
            <div className="sticky top-0 flex flex-col items-center w-full max-w-3xl">
                <motion.img
                    src="./brandingimg.webp"
                    alt="Branding"
                    className="w-full max-w-lg rounded-lg"
                    style={{ scale, position: fixed, top }}
                />
                <motion.div
                    className="mt-4 text-center text-white text-2xl"
                    style={{ opacity, y: translateY }}
                >
                    <h2 className="font-bold text-black">branding</h2>
                    <p className="mt-2 text-black">This is a description of the section.</p>
                </motion.div>
            </div>
        </section>
            <LoginSection />
        </>

    );
} 