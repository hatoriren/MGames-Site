import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../style/style.css'; 
import home1 from '../img/resident_evil_home.jpeg';
import home2 from '../img/the_last_of_us_home.jpeg';
import home3 from '../img/wukong_home.jpeg';


const Home = () => {
    return (
      <section id="home">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide-container">
          <img src={home1} alt="Resident Evil" />
          <div className="home-text">
            <h1>Resident Evil 4</h1>
            <a href="#" className="btn">Watch Now</a>
          </div>
        </SwiperSlide>
  
        <SwiperSlide className="swiper-slide-container">
          <img src={home2} alt="The Last of Us" />
          <div className="home-text">
            <h1>The Last of Us</h1>
            <a href="#" className="btn">Watch Now</a>
          </div>
        </SwiperSlide>
  
        <SwiperSlide className="swiper-slide-container">
          <img src={home3} alt="Wukong" />
          <div className="home-text">
            <h1>Black Myth: </h1>
            <h1>Wukong</h1>
            <a href="#" className="btn">Watch Now</a>
          </div>
        </SwiperSlide>
  
        
      </Swiper>
      </section>
    );
  }
  
  export default Home;