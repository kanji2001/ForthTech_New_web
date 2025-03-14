import React, { useState } from 'react'
import ClientSection from './pages/ClientPage';

function Service() {

    const [expand, setExpand] = useState(false);
    document.querySelectorAll('.hover-effect').forEach(el => {
        el.addEventListener('click', () => {
          el.classList.toggle('hovered');
        });
      });

    return (
        <>
            <div className='w-full overflow-x-hidden bg-background-gray'>
                <div className='sm:m-10 md:m-20 m-4'>
                    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3   '>
                        <div className=''>
                            <div className="w-full space-y-6 p-6 rounded-2xl transition duration-900 ">
                                <h1 className='sm:text-3xl font-semibold md:text-4xl text-2xl'>Flow Mobility</h1>
                                <div className='border-t-2 sm:border-t-4 border-[#ff2424] w-10 sm:w-15'></div>

                                {/* Text with image effect on hover */}
                                <p className='text-md text-gray-600 sm:text-lg transition-all duration-500 relative
        hover:text-transparent hover:bg-[url("/ClientLogo/hero.69.jpg")] hover:bg-cover hover:bg-center hover:bg-no-repeat hover:w-full hover:h-full hover:rounded-[20px]'>
                                    The project aimed to tackle the inefficiencies and physical demands of manual material handling in construction.
                                    Traditional methods are time-consuming, physically taxing, and often unsafe, especially when transporting materials
                                    over long distances or to higher floors. Our robot was designed to automate this process, addressing multiple
                                    technical and operational challenges to improve productivity and safety.
                                </p>

                                <div className='flex justify-start items-center'>
                                    <h1 className='text-xl mr-4'>View More</h1>
                                    <button className='rounded-full p-2 border-gray-200 border-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M13 5H19V11" />
                                            <path d="M19 5L5 19" />
                                        </svg>
                                    </button>
                                </div>
                            </div>



                        </div>
                        <div className=''>
                            <div className="w-full space-y-6 p-6 rounded-2xl  transition duration-900 ">
                                <h1 className='sm:text-3xl font-semibold md:text-4xl text-2xl'>Bark Bot </h1>
                                <div className='border-t-2 sm:border-t-4 border-[#ff2424] w-10 sm:w-15'>  </div>
                                <p className='text-md text-gray-600 sm:text-lg hover-effect'>
                                    Bark Bot is an advanced, affordable quadruped robot designed to replicate the natural
                                    movement of a dog. With its vision to revolutionize industries, Bark Bot is a fully automated
                                    solution, capable of performing tasks efficiently and enhancing operations across various
                                    industrial applications.
                                </p>
                                <div className='flex justify-start items-center'>
                                    <h1 className='text-xl mr-4 '>View More</h1>
                                    <button className='rounded-full  p-2  border-gray-200 border-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className=''>
                            <div className="w-full space-y-6 p-6 rounded-2xl  transition duration-900 ">
                                <h1 className='sm:text-3xl font-semibold md:text-4xl text-2xl'>Solar Panel Robot</h1>
                                <div className='border-t-2 sm:border-t-4 border-[#ff2424] w-10 sm:w-15'>  </div>
                                <p className='text-md text-gray-600 sm:text-lg hover-effect'>
                                    Solar Panel Cleaning Robot is an innovative solution
                                    designed to enhance the efficiency of solar energy
                                    systems. Engineered for precision, it ensures thorough
                                    cleaning of panels, removing dust and debris to
                                    maximize energy output. With automated operation and
                                    minimal water usage, this eco-friendly robot is perfect for
                                    maintaining solar installations in diverse environments,
                                    reducing manual effort and maintenance costs.
                                </p>
                                <div className='flex justify-start items-center'>
                                    <h1 className='text-xl mr-4 '>View More</h1>
                                    <button className='rounded-full  p-2  border-gray-200 border-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className=''>
                            <div className="w-full space-y-6 p-6 rounded-2xl  transition duration-900 ">
                                <h1 className='sm:text-3xl font-semibold md:text-4xl text-2xl'>Hexapod</h1>
                                <div className='border-t-2 sm:border-t-4 border-[#ff2424] w-10 sm:w-15'>  </div>
                                <p className='text-md text-gray-600 sm:text-lg hover-effect'>
                                    The Hexapod Robot developed by ForthTech is a six-legged robotic system designed for high stability and versatile
                                    movement across various terrains. With its advanced design, it can navigate challenging environments that require
                                    precision and adaptability. Ideal for research, exploration, and industrial applications, the Hexapod offers enhanced mobility
                                    and durability, making it a reliable solution for tasks in diverse fields such as automation, inspection, and remote
                                    operations.
                                </p>
                                <div className='flex justify-start items-center'>
                                    <h1 className='text-xl mr-4 '>View More</h1>
                                    <button className='rounded-full  p-2  border-gray-200 border-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className=''>
                            <div className="w-full space-y-6 p-6 rounded-2xl  transition duration-900 ">
                                <h1 className='sm:text-3xl font-semibold md:text-4xl text-2xl'>WealthAffinity</h1>
                                <div className='border-t-2 sm:border-t-4 border-[#ff2424] w-10 sm:w-15'>  </div>
                                <p className='text-md text-gray-600 sm:text-lg hover-effect'>Outcrowd partnered with Brainforest, an AI-powered productivity platform for students. Our comprehensive brand identity work and intuitive UX/UI design transformed the platform, significantly improving user retention and attracting new investments.</p>
                                <div className='flex justify-start items-center'>
                                    <h1 className='text-xl mr-4 '>View More</h1>
                                    <button className='rounded-full  p-2  border-gray-200 border-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className=''>
                            <div className="w-full space-y-6 p-6 rounded-2xl  transition duration-900 ">
                                <h1 className='sm:text-3xl font-semibold md:text-4xl text-2xl'>Robotics Arm</h1>
                                <div className='border-t-2 sm:border-t-4 border-[#ff2424] w-10 sm:w-15'>  </div>
                                <p className='text-md text-gray-600 sm:text-lg hover-effect'>Outcrowd partnered with Brainforest, an AI-powered productivity platform for students. Our comprehensive brand identity work and intuitive UX/UI design transformed the platform, significantly improving user retention and attracting new investments.</p>
                                <div className='flex justify-start items-center'>
                                    <h1 className='text-xl mr-4 '>View More</h1>
                                    <button className='rounded-full  p-2  border-gray-200 border-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                                    </button>
                                </div>
                            </div>

                        </div>

                        {
                            expand && (
                                <>
                                    <div className=''>
                                        <div className="w-full space-y-6 p-6 rounded-2xl  transition duration-900 ">
                                            <h1 className='sm:text-3xl font-semibold md:text-4xl text-2xl'>HRM</h1>
                                            <div className='border-t-2 sm:border-t-4 border-gray-500 w-10 sm:w-15'>  </div>
                                            <p className='text-md text-gray-600 sm:text-lg'>Outcrowd partnered with Brainforest, an AI-powered productivity platform for students. Our comprehensive brand identity work and intuitive UX/UI design transformed the platform, significantly improving user retention and attracting new investments.</p>
                                            <div className='flex justify-start items-center'>
                                                <h1 className='text-xl mr-4 '>View More</h1>
                                                <button className='rounded-full  p-2  border-gray-200 border-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                    <div className=''>
                                        <div className="w-full space-y-6 p-6 rounded-2xl hover:bg-red-200 transition duration-900 ">
                                            <h1 className='sm:text-3xl font-semibold md:text-4xl text-2xl'>Vehicle Fitness Center Software</h1>
                                            <div className='border-t-2 sm:border-t-4 border-gray-500 w-10 sm:w-15'>  </div>
                                            <p className='text-md text-gray-600 sm:text-lg'>Outcrowd partnered with Brainforest, an AI-powered productivity platform for students. Our comprehensive brand identity work and intuitive UX/UI design transformed the platform, significantly improving user retention and attracting new investments.</p>
                                            <div className='flex justify-start items-center'>
                                                <h1 className='text-xl mr-4 '>View More</h1>
                                                <button className='rounded-full  p-2  border-gray-200 border-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className=''>
                                        <div className="w-full space-y-6 p-6 rounded-2xl hover:bg-red-200 transition duration-900 ">
                                            <h1 className='sm:text-3xl font-semibold md:text-4xl text-2xl'>Swerve Base Robot</h1>
                                            <div className='border-t-2 sm:border-t-4 border-gray-500 w-10 sm:w-15'>  </div>
                                            <p className='text-md text-gray-600 sm:text-lg'>Outcrowd partnered with Brainforest, an AI-powered productivity platform for students. Our comprehensive brand identity work and intuitive UX/UI design transformed the platform, significantly improving user retention and attracting new investments.</p>
                                            <div className='flex justify-start items-center'>
                                                <h1 className='text-xl mr-4 '>View More</h1>
                                                <button className='rounded-full  p-2  border-gray-200 border-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className=''>
                                        <div className="w-full space-y-6 p-6 rounded-2xl hover:bg-red-200 transition duration-900 ">
                                            <h1 className='sm:text-3xl font-semibold md:text-4xl text-2xl'>Touch Button</h1>
                                            <div className='border-t-2 sm:border-t-4 border-gray-500 w-10 sm:w-15'>  </div>
                                            <p className='text-md text-gray-600 sm:text-lg'>Outcrowd partnered with Brainforest, an AI-powered productivity platform for students. Our comprehensive brand identity work and intuitive UX/UI design transformed the platform, significantly improving user retention and attracting new investments.</p>
                                            <div className='flex justify-start items-center'>
                                                <h1 className='text-xl mr-4 '>View More</h1>
                                                <button className='rounded-full  p-2  border-gray-200 border-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            )
                        }


                    </div>

                    <div className=' flex justify-center m-10'>
                        <button onClick={() => { setExpand(!expand) }} className='bg-button-red px-4 py-2 rounded-lg hover:bg-hover-blue text-white transition-colors duration-800'>
                            {expand ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                </div>
                <ClientSection />
            </div>
        </>
    )
}

export default Service