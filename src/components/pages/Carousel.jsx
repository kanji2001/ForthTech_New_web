import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center px-5 justify-center relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
        }}
        modules={[Pagination]}
        className="w-full max-w-6xl pb-12"
      >
        <SwiperSlide>
          <div className="flex items-center justify-center h-[300px] bg-gray-800 text-white text-xl font-bold rounded-lg shadow-lg">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[300px] bg-gray-800 text-white text-xl font-bold rounded-lg shadow-lg">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[300px] bg-gray-800 text-white text-xl font-bold rounded-lg shadow-lg">
            Slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[300px] bg-gray-800 text-white text-xl font-bold rounded-lg shadow-lg">
            Slide 4
          </div>
        </SwiperSlide>
      </Swiper>

      
      <div className="swiper-pagination mt-6"></div>
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: white !important; /* White background */
            width: 10px;
            height: 10px;
            border-radius: 50%;
            opacity: 1; /* Fully visible */
            transition: all 0.3s ease-in-out;
          }
          .swiper-pagination-bullet-active {
            background-color: red !important; /* Active dot is red */
            width: 12px;
            height: 12px;
          }
        `}
      </style>
      
    </div>
  );
}
