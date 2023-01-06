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
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      spaceBetween={5}
      slidesPerView={2}
      breakpoints={{
        768: { slidesPerView: 3 },
        1280: { slidesPerView: 5 },
      }}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <div className="SwiperSlideContainer">
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
          <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220425_283%2F1650861360561RDVVU_JPEG%2F51997259262825961_1771468103.jpg&type=sc960_832" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_3552026%2F35520263070.20221029142558.jpg&type=sc960_832" />
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
