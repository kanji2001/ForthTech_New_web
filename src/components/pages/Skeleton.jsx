// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export default function ProjectImage({ src, alt, className, imageId, hoverEffect = false }) {
//     const [loaded, setLoaded] = useState(false);

//     return (
//         <div className={`relative ${className}`}>
        
//             {!loaded && (
//                 <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg" />
//             )}

//             <motion.img
//                 src={src}
//                 alt={alt}
//                 className={`w-full h-full object-contain transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
//                 onLoad={() => setLoaded(true)}
//                 initial={hoverEffect ? { scale: 0.9 } : {}} 
//                 animate={hoverEffect ? { scale: 1 } : {}} 
//                 whileHover={hoverEffect ? { scale: 1.1 } : {}} 
//                 transition={{ duration: 0.5, ease: "easeOut" }} 
//             />
//         </div>
//     );
// }


import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectImage({ src, alt, className, hoverEffect = false }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden rounded-lg ${className}`}>
            {!loaded && <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg" />}

            <div className="w-full h-full overflow-hidden">
                <motion.img
                    src={src}
                    alt={alt}
                    className={`w-full h-full object-contain transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
                    onLoad={() => setLoaded(true)}
                    {...(hoverEffect
                        ? { initial: { scale: 1 }, whileHover: { scale: 1.1 }, transition: { duration: 0.5, ease: "easeOut" } }
                        : {})} 
                />
            </div>
        </div>
    );
}
