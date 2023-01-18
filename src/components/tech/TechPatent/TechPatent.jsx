import React, { Component } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { patent_01, patent_02, patent_03, patent_04, patent_05 } from 'images';

const TechPatent = () => {
  return (
    <div className="patent_container">
      <div className="patent_container1">
        <div className="swiper-button-prev"></div>
        <div className="patent_center">
          <div className="patent">에어퀀트 인증 및 특허</div>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 3 },
              1280: { slidesPerView: 5 },
            }}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            // autoplay={{ delay: 1500 }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img src={patent_01} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={patent_02} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={patent_03} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={patent_04} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={patent_05} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={patent_01} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={patent_02} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  );
};
export default TechPatent;
