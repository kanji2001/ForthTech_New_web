import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/Animation - 1737635556614.json";

function Contact() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section id="Contact" className="bg-background-gray mt-5 sm:mt-0 flex justify-center items-center py-10">
      <div className="container max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Lottie Animation - Hidden on Small Screens */}
          <div className="hidden md:flex justify-center">
            <Lottie options={defaultOptions} height={450} width={450} />
          </div>

          {/* Contact Form & Details */}
          <div className="w-full mt-5">
            <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-8">
              Contact Us
            </h1>

            <div className="border-l-4 border-t-4 border-black p-6 md:p-10 rounded-lg bg-white shadow-lg">
              <div className="grid grid-cols-1 gap-6">
                
                {/* Form Section */}
                <div>
                  <label className="block text-gray-700 text-lg">Enter Name</label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-gray-900 p-2 focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-lg">Email ID</label>
                  <input
                    type="email"
                    className="w-full border-b-2 border-gray-900 p-2 focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-lg">Enter Number</label>
                  <input
                    type="number"
                    className="w-full border-b-2 border-gray-900 p-2 focus:outline-none focus:border-black"
                  />
                </div>

                <button className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-700 transition-all">
                  Submit
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-12 px-4">
              <h2 className="text-2xl font-semibold">Contact</h2>
              <p className="text-gray-600 text-lg">forthtech@info.in</p>

              <h2 className="text-2xl font-semibold mt-6">Based in</h2>
              <p className="text-gray-600 text-lg">Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>

              {/* Social Media Icons */}
              <div className="flex mt-6 space-x-6">
                <a href="#" className="text-gray-700 hover:text-black transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-700 hover:text-black transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-700 hover:text-black transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
