import React, { Component } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { patent_01, patent_02, patent_03, patent_04, patent_05 } from 'images';

export default () => {
  return (
    <div className='patent_container'>
      <div className="patent_center">
        <div className="patent">에어퀀트 인증 및 특허</div>
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={2}
          breakpoints={{
            768: { slidesPerView: 3 },
            1280: { slidesPerView: 5 },
          }}
          loop={true}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={patent_01} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={patent_02} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={patent_03} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={patent_04} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={patent_05} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={patent_01} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={patent_02} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
