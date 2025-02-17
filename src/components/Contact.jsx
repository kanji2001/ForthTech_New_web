import React from 'react';
import Lottie from 'react-lottie';
import animationData from "../lotties/Animation - 1737635556614.json";

function Contact() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <section id='Contact' className='bg-[#dde5b4] flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full h-auto md:h-[700px]'>
                <div className='mt-14 hidden md:block'>
                    <Lottie
                        options={defaultOptions}
                        height={600}
                        width={600}
                    />
                </div>

                <div className='w-full md:h-[auto]'>
                    <div className='mt-10'>
                        <h1 className='sm:text-7xl text-5xl'>Contact us</h1>
                    </div>

                    <div className='border-l-6 border-t-6 flex justify-center pt-10 mt-12 h-auto w-full'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-4'>
                            {/* Form Section */}
                            <div className='ml-10'>
                                <div className='space-y-4'>
                                    <div>
                                        <label htmlFor="name" className='block text-gray-700 text-2xl sm:text-3xl'>Enter Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className='w-full pt-4  border-b-2 border-gray-900 focus:outline-none focus:border-black'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className='block pt-6 text-gray-700 text-2xl sm:text-3xl'>Email ID:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className='w-full border-b-2 pt-4 border-gray-900 focus:outline-none focus:border-black'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="number" className='block pt-6 text-gray-700 text-2xl sm:text-3xl'>Enter Number:</label>
                                        <input
                                            type="number"
                                            id="number"
                                            className='w-full  border-b-2 pt-4 border-gray-900 focus:outline-none focus:border-black'
                                        />
                                    </div>
                                    <div className='mt-14 pb-16'>
                                        <button className='w-full  bg-black text-white p-3 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>

                        
                            <div>
                                <div className='ml-10'>
                                    <div>
                                        <h1 className='text-2xl sm:text-4xl pb-4'>Contact</h1>
                                        <p className='text-md sm:text-2xl'>forthtech@info.in</p>
                                    </div>
                                    <div className='mt-[50px]'>
                                        <h1 className='text-2xl sm:text-4xl pb-4'>Based in</h1>
                                        <p className='text-md sm:text-2xl'>Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
                                    </div>
                                    <div className='flex mt-[50px] mb-[50px] justify-start space-x-16'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                                 
                </div>
            </div>
        </section>
    );
}

export default Contact;
