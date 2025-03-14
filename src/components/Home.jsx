import React, { useState } from 'react';
import animationData from "../lotties/Animation - 1737712534697.json";
import Lottie from 'react-lottie';

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

    const [clicked, setClicked] = useState(false);
  
    const handleClick = () => {
      setClicked(true);
      document.getElementById("targetSection")?.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <>
      {/* Home Section */}
      {/* <section id="Home" className="h-[800px] w-[100vw] bg-background-gray relative flex flex-col justify-between pt-[100px]">
        <div className='relative h-full w-full'>
          <div className="flex flex-col md:px-12 lg:px-20 lg:flex-row justify-around items-center space-y-8 px-4 lg:space-y-0 lg:space-x-12 text-white">
            
            <div className=" lg:text-left flex justify-center flex-col space-y-6">
              <h1 className="text-4xl sm:text-5xl flex text-center
                lg:text-6xl font-semibold self-center text-text-red">This is our home page</h1>
              <p className="text-lg flex text-center text-text-black max-w-lg mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet accusantium inventore adipisci
                voluptatem, doloremque soluta hic cum reiciendis sit.
              </p>
              <div className='flex justify-center'>
              <button className="px-6 py-2 bg-button-red text-text-white  font-semibold rounded-lg shadow-md hover:bg-hover-blue hover:text-white transition-colors duration-800">
                Learn More
              </button>
              </div>
            </div>

            <div className="">
              <Lottie options={defaultOptions} height={300} width={300} />
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto bottom-0 absolute">
            <path
              fill="#94bf73"
              fillOpacity="1"
              d="M0,160L40,165.3C80,171,160,181,240,186.7C320,192,400,192,480,165.3C560,139,640,85,720,85.3C800,85,880,139,960,154.7C1040,171,1120,149,1200,138.7C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section> */}

      <div className= " bg-white w-full flex flex-col items-center justify-start  mb-10">
              <div className="text-center md:text-start space-y-2 mt-20">
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


    </>
  );
}

export default Home;
