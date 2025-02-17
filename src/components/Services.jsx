import { useState } from "react";

export default function Services() {
  const text = "We prove, design, implement, and market your idea with absolute transparency and efficiency in its core";
  const letters = text.split(" ");
  const [hoverStyles, setHoverStyles] = useState({});

  const handleMouseMove = (e, id) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setHoverStyles((prev) => ({
      ...prev,
      [id]: {
        backgroundImage: `radial-gradient(circle 650px at ${x}px ${y}px, rgba(255, 255, 255, 0.08), transparent 20%)`,
        transition: "background-image 0.3s ease-out",
      },
    }));
  };

  // useEffect(() => {
  //   if (scrollRef.current) {
  //     const scrollbar = Scrollbar.init(scrollRef.current, {
  //       damping: 0.05,
  //       renderByPixels: true,
  //       alwaysShowTracks: false,
  //       continuousScrolling: true,
  //     });

  //     scrollRef.current.style.overflowY = 'hidden';   

  //     return () => {
  //       scrollbar.destroy();
  //     };
  //   }
  // }, []);

  const handleMouseLeave = (id) => {
    setHoverStyles((prev) => ({
      ...prev,
      [id]: {
        transition: "background-image 0.3s ease-in",
      },
    }));
  };

  return (
    <div className="w-full min-h-screen" /* id="smooth-wrapper" ref={scrollRef} overflow-hidden h-screen */>
      <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white px-6 sm:px-10 py-16">
        <h1 className="text-center text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold max-w-xl lg:max-w-2xl leading-snug">
          {letters.map((letter, i) => (
            <span key={i} className="inline-block mr-2">{letter}</span>
          ))}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20 md:gap-x-10 mt-30 max-w-6xl w-full px-2">
          {[ 
            { value: "$300m", text: "In funding clients raised owing to our design work" },
            { value: "60+", text: "World’s biggest international design awards won" },
            { value: "100M", text: "Active users experiencing our design every day via products we made" },
            { value: "24%", text: "Of total marketing budget converted into sales with our branding & mechanics" },
            { value: "24%", text: "Of total marketing budget converted into sales with our branding & mechanics" },
            { value: "24%", text: "Of total marketing budget converted into sales with our branding & mechanics" },
          ].map((item, index) => (
            <div
              key={index}
              className="card bg-[#111] p-6 rounded-xl shadow-lg flex flex-col justify-between w-full h-[300px] sm:h-[320px] relative transition-all"
              style={hoverStyles[index]}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <span className="text-3xl sm:text-4xl font-bold">{item.value}</span>
              <p className="text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
