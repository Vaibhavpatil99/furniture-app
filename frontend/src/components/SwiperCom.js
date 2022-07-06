import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const SwiperCom = () => {
  return (
    <>
    <div className="my-12">
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"5"}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 0,
          stretch: 100,
          depth: 250,
          modifier: 1,
          slideShadows: true,
          
      }}
      pagination={true}
      navigation={true}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >

      <SwiperSlide className=" p-4 border rounded-lg shadow-lg flex flex-col justify-ceeter items-center bg-white">
        <img className="" src="https://naturalveneers.s3.ap-south-1.amazonaws.com/site_product_images/thumbsmall/0_27618100_1563451317.jpg" />
        <h2 className="my-3 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, deleniti deserunt dicta voluptas</h2>
        <button className=' bg-black text-white px-2 py-1 text-lg rounded-lg shadow-lg mb-3 hover:bg-white hover:text-black duration-300 border'>Explore More</button>
      </SwiperSlide>
      <SwiperSlide className=" p-4 border rounded-lg shadow-lg flex flex-col justify-ceeter items-center bg-white">
        <img className="" src="https://naturalveneers.s3.ap-south-1.amazonaws.com/site_product_images/thumbsmall/0_08639100_1563451648.jpg" />
        <h2 className="my-3 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, deleniti deserunt dicta voluptas</h2>
        <button className=' bg-black text-white px-2 py-1 text-lg rounded-lg shadow-lg mb-3 hover:bg-white hover:text-black duration-300 border'>Explore More</button>
      </SwiperSlide>
      <SwiperSlide className=" p-4 border rounded-lg shadow-lg flex flex-col justify-ceeter items-center bg-white">
        <img className="" src="https://naturalveneers.s3.ap-south-1.amazonaws.com/site_product_images/thumbsmall/0_00939300_1563451756.jpg" />
        <h2 className="my-3 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, deleniti deserunt dicta voluptas</h2>
        <button className=' bg-black text-white px-2 py-1 text-lg rounded-lg shadow-lg mb-3 hover:bg-white hover:text-black duration-300 border'>Explore More</button>
      </SwiperSlide>
      <SwiperSlide className=" p-4 border rounded-lg shadow-lg flex flex-col justify-ceeter items-center bg-white">
        <img className="" src="https://naturalveneers.s3.ap-south-1.amazonaws.com/site_product_images/thumbsmall/0_20223000_1563451006.jpg" />
        <h2 className="my-3 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, deleniti deserunt dicta voluptas</h2>
        <button className=' bg-black text-white px-2 py-1 text-lg rounded-lg shadow-lg mb-3 hover:bg-white hover:text-black duration-300 border'>Explore More</button>
      </SwiperSlide>
      <SwiperSlide className=" p-4 border rounded-lg shadow-lg flex flex-col justify-ceeter items-center bg-white">
        <img className="" src="https://naturalveneers.s3.ap-south-1.amazonaws.com/site_product_images/thumbsmall/0_73396600_1563451291.jpg" />
        <h2 className="my-3 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, deleniti deserunt dicta voluptas</h2>
        <button className=' bg-black text-white px-2 py-1 text-lg rounded-lg shadow-lg mb-3 hover:bg-white hover:text-black duration-300 border'>Explore More</button>
      </SwiperSlide>
      <SwiperSlide className=" p-4 border rounded-lg shadow-lg flex flex-col justify-ceeter items-center bg-white">
        <img className="" src="https://naturalveneers.s3.ap-south-1.amazonaws.com/site_product_images/thumbsmall/0_82610300_1563451463.jpg" />
        <h2 className="my-3 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, deleniti deserunt dicta voluptas</h2>
        <button className=' bg-black text-white px-2 py-1 text-lg rounded-lg shadow-lg mb-3 hover:bg-white hover:text-black duration-300 border'>Explore More</button>
      </SwiperSlide>
{/*       
      <SwiperSlide>
        <img className="" src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="https://swiperjs.com/demos/images/nature-5.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="https://swiperjs.com/demos/images/nature-6.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="https://swiperjs.com/demos/images/nature-7.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="https://swiperjs.com/demos/images/nature-8.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="https://swiperjs.com/demos/images/nature-9.jpg" />
      </SwiperSlide> */}
    </Swiper>
    </div>
  </>
  )
}

export default SwiperCom