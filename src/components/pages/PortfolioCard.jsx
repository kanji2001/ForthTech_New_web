import React from 'react';
import { useParams } from 'react-router-dom';
import portfolioData from './portfolioData';


export default function PortfolioDetail() {
    const { id } = useParams();
    const project = portfolioData.find(p => p.id === parseInt(id));

    if (!project) return <h2>Project not found</h2>;

    return (
        <div className="max-w-[1200px] mx-auto bg-white">
            {/* ✅ Section 1: Full width and full height image without cut */}
            <div className="w-full h-[350px] sm:h-[95vh] flex justify-center items-center ">
                <img
                    src={project.image1}
                    alt={project.title}
                    className="w-full h-full object-contain object-center"
                    loading="lazy"
                />
            </div>

            {/* ✅ Section 2: Main Heading and Description */}
            <div className="container mx-auto md:py-10 px-5">
                <h1 className="text-6xl font-bold mb-1 text-center sm:text-start">{project.title}</h1>
                <h6 className='text-3xl font-medium mb-4 text-center sm:text-start'>{project.title2}</h6>
                <p className="mt-10">{project.smallDes}</p>

                <h6 className='text-xl font-medium  mt-5'>Biomimicry and Robotics</h6>
                <p className="text-justify">{project.titleDes1}</p>
                <h6 className='text-xl font-medium  mt-5'>Control Systems and Kinematics</h6>
                <p className="text-justify">{project.titleDes2}</p>
                <h6 className='text-xl font-medium  mt-5'>Machine Vision</h6>
                <p className="text-justify">{project.titleDes3}</p>
            </div>

            {/* ✅ Section 3: Two-column grid - Image Left, Text Right */}
            <div className="container mx-auto grid md:grid-cols-2 gap-10 py-10 px-5 items-center">
                <div className="flex justify-center">
                    <img
                        src={project.image2}
                        alt={project.title}
                        className="w-[400px] md:w-[400px] rounded-lg object-contain"
                        loading='lazy'
                        
                    />
                </div>
                <div className="mt-5 md:mt-0 md:order-1">
                    <h2 className="text-4xl font-bold mb-3">Inspiration</h2>
                    <p className="text-justify">{project.sec2Des}</p>
                </div>
            </div>


            {/* ✅ Section 4: Two-column grid - Content Left, Two Images Right */}
            <div className="container mx-auto grid md:grid-cols-2 gap-15 md:py-10 px-5 items-center">
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-2xl font-semibold text-justify mb-3">{project.sec4Title}</h2>
                    <p className="text-justify mt-10"> <span className='font-bold'>Gait Analysis:</span> {project.sec4FirstP}</p>
                    <p className="text-justify mt-3"> <span className='font-bold'>Walking:</span> {project.sec4SecondP}</p>
                    <p className="text-justify mt-3"> <span className='font-bold'>Trot:</span> {project.sec4ThirdP}</p>
                    <p className="text-justify mt-3"> <span className='font-bold'>pace:</span> {project.sec4ForthP}</p>
                    <p className="text-justify mt-3"> <span className='font-bold'>Gallop:</span> {project.sec4FifthP}</p>

                </div>
                <div className="grid grid-rows-2 gap-5">
                    <img
                        src={project.image3}
                        alt={project.title}
                        className="w-full h-auto object-cover "
                        loading="lazy"
                    />
                    <img
                        src={project.image4}
                        alt={project.title}
                        className="w-full h-auto object-cover -mt-5"
                        loading="lazy"
                    />
                </div>
            </div>

            {/* ✅ Section 5: Two-column grid - Four Images Left, Content Right */}
            <div className="container mx-auto grid md:grid-cols-2 gap-10  md:py-10 px-5 items-center">
                <div className="grid grid-cols-1 gap-10">
                    <img src={project.image25} alt={project.title}
                    loading="lazy" />
                </div>
                <div>
                    <h2 className="text-5xl font-extrabold mb-3">Current Market</h2>
                    <p className="text-justify mt-3">{project.sec5FirstP}</p>
                </div>
            </div>


            {/* section 6 */}
            <div className="container mx-auto grid md:grid-cols-2 gap-10 mt-10 sm:mt-0 md:py-10 px-5 items-center">
                <div>
                    <h2 className="text-5xl font-extrabold mb-3">Mood Board</h2>
                    <p className="text-justify mt-3">{project.sec6FirstP}</p>
                </div>
                <div className="grid grid-cols-1 gap-2">
                    <img
                        src={project.image26}
                        className="w-full object-cover rounded-lg"
                        loading="lazy"
                    />
                </div>

            </div>

            {/* section 7 */}
            <div className="container w-full h-[300px] px-5.5 md:px-0 sm:h-[600px] md:h-[700px] lg:h-[800px] flex justify-center items-center ">
                <img
                    src={project.image13}
                    alt={project.title}
                    className="container w-full h-full object-contain"
                    loading="lazy"
                />
            </div>

            {/* section 8 */}

            <div className="container mx-auto grid md:grid-cols-1 md:py-10 px-5 items-center">

                <div className="grid grid-cols-2 gap-4">
                    <img
                        src={project.image14}
                        alt={project.title}
                        className="w-full object-cover rounded-lg"
                        loading="lazy"
                    />
                    <img
                        src={project.image15}
                        alt={project.title}
                        className="w-full object-cover rounded-lg"
                        loading="lazy"
                    />
                    <img
                        src={project.image16}
                        alt={project.title}
                        className="w-full object-cover rounded-lg"
                        loading="lazy"
                    />
                    <img
                        src={project.image17}
                        alt={project.title}
                        className="w-full object-cover rounded-lg"
                        loading="lazy"
                    />
                </div>
                <p className="text-justify mt-5">{project.sec8FirstP}</p>
                <p className="text-justify mt-5">{project.sec8SecondP}</p>
                <p className="text-justify mt-5">{project.sec8ThirdP}</p>

            </div>

            {/* section 9 */}

            <div className="container mx-auto md:py-10 px-5 ">
                <div className="p-5">
                    <img
                        src={project.image18}
                        alt={project.title}
                        className="w-full h-auto object-contain"
                        loading="lazy"
                    />
                </div>
                <p className="text-justify mt-5">{project.sec9FirstP}</p>

            </div>

            {/* section 10 */}

            <div className="container mx-auto py-10 px-5 ">
                <div className="p-5">
                    <img
                        src={project.image19}
                        alt={project.title}
                        className="w-full h-auto object-contain"
                        loading="lazy"
                    />
                </div>
                <p className="text-justify mt-5">{project.sec10FirstP}</p>
            </div>

            {/* section 11 */}

            <div className="container mx-auto md:py-10 px-5 ">
                <div className="">
                    <img
                        src={project.image20}
                        alt={project.title}
                        className="w-full h-auto object-contain"
                        loading="lazy"
                    />
                </div>
            </div>

            {/* section 12 */}

            <div className="container mx-auto md:py-10 px-5 ">
                <div className="">
                    <img
                        src={project.image21}
                        alt={project.title}
                        className="w-full h-auto object-contain"
                        loading="lazy"
                    />
                </div>
            </div>

            {/* section 13 */}

            <div className="container mx-auto md:py-10 px-5 ">
                <div className="">
                    <img
                        src={project.image22}
                        alt={project.title}
                        className="w-full h-auto object-contain"
                        loading="lazy"
                    />
                </div>
            </div>

            {/* section 14 */}

            <div className="container mx-auto md:py-10 px-5 ">
                <div className="">
                    <img
                        src={project.image24}
                        alt={project.title}
                        className="w-full h-auto object-contain"
                        loading="lazy"
                    />
                </div>
            </div>

            {/* section 14 */}

            <div className="container mx-auto py-5 md:py-10 px-5 ">
                <div className="">
                    <img
                        src={project.image23}
                        alt={project.title}
                        className="w-full h-auto object-contain"
                        loading="lazy"
                    />
                </div>
            </div>


        </div>
    );
}
