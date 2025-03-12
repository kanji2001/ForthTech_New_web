import React from 'react';
import { Link } from 'react-router-dom';
import portfolioData from '../../components/pages/portfolioData';

export default function PortfolioPage() {
    return (
        <div className="w-full py-10 bg-white">
            {portfolioData.map((project, index) => (
                <div 
                    key={project.id} 
                    className={`w-full flex flex-wrap ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-10 pb-10`}
                >
                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <img 
                            src={project.image1} 
                            alt={project.title} 
                            className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-contain object-center rounded-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center px-5 mt-5 md:mt-0">
                        <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                        <p >{project.smallDes}</p><br />
                        <p className='-mt-3 sm:mt-0'>{project.titleDes1}</p>
                        <Link 
                            to={`/portfolio/${project.id}`} 
                            className="w-[110px] mt-7 sm:mt-5 bg-button-red px-4 py-2 rounded-lg 
               hover:bg-hover-blue text-white transition-transform 
               duration-300 ease-in-out transform hover:scale-105"
                        >
                            View More
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
