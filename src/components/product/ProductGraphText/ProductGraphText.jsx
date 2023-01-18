import React, { useEffect } from 'react';
import { ProductGraph } from '../ProductGraph';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { ProductYoutubeSecond } from '../ProductYoutubeSecond';

const ProductGraphText = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="Product__">
      {/* <div className="Product__Graph__Main" data-aos="fade-up"> */}
      <div className="Product__Graph__Main">
        <div className="Product__p_text_Main">
          <div className="Product__p_text_Main_small">DISEASE CHART</div>
          인구 1 만명당
          <br />
          환경성 질환 진료 실인원 추이
        </div>
        <p className="Product__p_text_inhauniv">출처 : 인하대병원 (2020)</p>
        <div className="Product__In_Graph">
          <ProductGraph />
        </div>
        {/* <span
          className="Product__div_text_health"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          건강에 미치는 악영향은 실제로 나타나는 중
        </span> */}
        {/* <ProductYoutubeSecond className="ProductGraph__LineChart"/> */}
      </div>
    </div>
  );
};

export default ProductGraphText;
