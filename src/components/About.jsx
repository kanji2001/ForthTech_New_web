import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function About() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  return (
    <section className='bg-black w-full flex justify-center items-center py-16 sm:py-20 overflow-hidden'>
      <div className='container px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 text-white max-w-6xl space-y-10'>

        {/* Main Text */}
        <p className='text-2xl font-sans leading-relaxed sm:text-3xl lg:text-4xl'>
          Welcome to the core of innovation at ForthTech, where technology meets transformation! Here, we don’t just create solutions; we redefine possibilities. Our team is a fusion of expertise, crafting designs that inspire, engineering that empowers, and strategies that drive results.
        </p>

        <div className='space-y-4'>
          <p className='text-lg sm:text-xl lg:text-2xl'>
            Join us on a journey where innovation speaks louder than ideas. Let’s build the future of your vision together!
          </p>
        </div>

        {/* Stats Section */}
        <div ref={ref} className='flex justify-center sm:justify-start'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 py-10 text-center w-full max-w-lg'>

            {/* Animated Counter 1 */}
            <div>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl text-text-red font-bold'>
                {inView ? <CountUp start={0} end={1000} duration={3} separator="," /> : "0"}+
              </h1>
              <p className='text-lg sm:text-xl'>Campaigns Launched</p>
            </div>

            {/* Animated Counter 2 */}
            <div>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl text-text-red font-bold'>
                {inView ? <CountUp start={0} end={250} duration={3} suffix="M+" separator="," /> : "0M+"}
              </h1>
              <p className='text-lg sm:text-xl'>Campaign Reach</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
