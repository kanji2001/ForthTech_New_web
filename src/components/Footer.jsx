import React from 'react';

function Footer() {
  return (
    <div className="bg-black p-4 sm:p-10">
      <section className="overflow-x-hidden text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-gray-950 sm:border-gray-400 sm:border-2 rounded-2xl w-full pt-8 sm:pt-[80px] sm:pl-12 gap-5 sm:gap-x-[150px]">
          <div className="w-full sm:w-[90%]">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold">
              Innovate with us
            </h1>
            <p className="mt-4 text-lg sm:text-2xl text-gray-300">
              Our creative solutions have helped clients raise $100+ mln and expand their reach.
            </p>
            <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="bg-white text-black px-4 sm:px-6 py-4 sm:py-8 rounded-2xl text-lg sm:text-2xl hover:bg-[#fe4a23] hover:text-white hover:text-3xl">
                Write us
              </button>
              <button className="bg-white text-black px-4 sm:px-6 py-4 sm:py-8 rounded-2xl text-lg sm:text-2xl hover:bg-[#fe4a23] hover:text-white hover:text-3xl">
                Book a Call
              </button>
            </div>
          </div>

          {/* Image section */}
          <div className="flex justify-center ml-6 sm:ml-0 sm:justify-end items-end">
            <div className="relative border-gray-500 border-t-4 border-l-4 rounded-tl-4xl bg-blue-700 h-[250px] sm:h-[600px] w-full max-w-[500px]">
              <div className="absolute h-[100px] sm:h-[250px] border-t-2 border-l-2 border-gray-500 rounded-3xl bg-amber-100 top-[30%] left-[-15%] sm:right-[40%] w-[60%] sm:w-[450px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="overflow-x-hidden bg-black">
        <div className="sm:py-12">
          <div className="md:flex text-gray-400 md:justify-between">
            <div className="grid p-4 grid-cols-2 gap-y-6 sm:gap-x-[40px] sm:grid-cols-3 text-sm sm:text-lg">
              <div className="space-y-2 sm:space-y-3">
                <h1 className="font-bold text-white pb-2">Cases</h1>
                <p>Fitonist</p>
                <p>Brainforest</p>
                <p>Cybervergent</p>
                <p>Nopan</p>
                <p>Ramos</p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <h1 className="font-bold text-white pb-2">Services</h1>
                <p>Complex solution</p>
                <p>Branding</p>
                <p>Design</p>
                <p>Development</p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <h1 className="font-bold text-white pb-2">About us</h1>
                <p>Numbers</p>
                <p>Missions</p>
                <p>Values</p>
                <p>Clients</p>
              </div>
            </div>

            {/* Contact & Social Links */}
            <div className="p-4 space-y-4">
              <div className="text-xl sm:text-4xl font-semibold text-center">hello@outcrowd.io</div>
              <div className="flex justify-center sm:justify-end space-x-2">
                {["globe", "globe", "instagram", "x", "linkedin"].map((icon, index) => (
                  <button key={index} className="bg-gray-800 p-3 sm:p-4 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`lucide lucide-${icon}`}
                    >
                      {icon === "globe" && (
                        <>
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                          <path d="M2 12h20" />
                        </>
                      )}
                      {icon === "instagram" && (
                        <>
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </>
                      )}
                      {icon === "x" && (
                        <>
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </>
                      )}
                      {icon === "linkedin" && (
                        <>
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </>
                      )}
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="mt-8 grid sm:grid-cols-2 grid-cols-1 text-lg sm:text-xl text-gray-300 border-t border-gray-500 py-4">
        <div className="text-center sm:text-left">Copyright © 2024 Outcrowd Inc. All rights reserved.</div>
        <div className="text-center sm:text-right mt-2 sm:mt-0">LEWES - INDIA</div>
      </div>
    </div>
  );
}

export default Footer;
