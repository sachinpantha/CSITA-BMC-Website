import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/autoplay';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Testidata } from "./Testidata";
import { Partdata } from "./Partdata";
import "./Testimonials.css";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);   //import swipercore to use autoplay
const Testimonials = () => {
  return (
    <div  className="myReview">
      <div className="WellWishers">
        <h2>What our wellwishers say</h2>
      </div>
    <div>
      <Swiper
        slidesPerView={1}
        loop={true}
            autoplay={true}  //For autoenabling the swiper functionality with infinite loop
            speed={3000} 
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Testidata.map((item, key) => {  //While rendering data on screen return the component with small brackets
          return (
            <div>
              <SwiperSlide>
                <div className="parentwrapper">
                  <div className="slidewrapper">
                    <img className="wrapperimg" src={item.image} alt="" />
                    <h5>{item.Name}</h5>
                  </div>
                  <p className="para">{item.testimony}</p>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
      <div className="SwiperHeading">
        <h2>We've worked with</h2>
      </div>
      <div className="imagePartners">
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 1000,
          }}
          speed={3000}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper2"
        >
          {Partdata.map((item, key) => {
            return (
              <div>
                <SwiperSlide>
                  <img className="wrapperimg" src={item.Image} alt="" />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
