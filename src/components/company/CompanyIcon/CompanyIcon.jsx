import React, { useEffect } from 'react';
import { company_product, company_product_drawing } from 'images';

import Aos from 'aos';
import 'aos/dist/aos.css';

const CompanyIcon = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="CompanyIcon">
      <div className="CompanyIcon-title">
        파이퀀트는 하마쯔사의 소형 분광기 모듈을 사용합니다
        <br />
        &#40;C12666MA&#41;
      </div>
      <div className="CompanyIcon-imgs">
        <div className="CompanyIcon-imgs-item imageLeft">
          <img src={company_product} alt="module" />
        </div>
        <div className="CompanyIcon-imgs-item imageRight">
          <img src={company_product_drawing} alt="model drawing" />
        </div>
      </div>
      <div className="CompanyIcon-icons">
        <div
          className="CompanyIcon-icons-item small"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          <div className="CompanyIcon-icons-item-img small-icon"></div>
          <div className="CompanyIcon-icons-item-info">
            <h3>작은 사이즈</h3>
            <p>
              파이퀀트의 분광 분석 장비는
              <br /> 한 손으로 들 만큼 작은 사이즈 입니다.
            </p>
          </div>
        </div>
        <div
          className="CompanyIcon-icons-item price"
          data-aos="fade-up"
          data-aos-duration="750"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
        >
          <div className="CompanyIcon-icons-item-img price-icon"></div>
          <div className="CompanyIcon-icons-item-info">
            <h3>낮은 가격</h3>
            <p>
              파이퀀트 분광 분석 장비는
              <br className="md-hidden" /> 약 $60,000가 넘는 기존 분광 분석
              장비의
              <br className="md-hidden" />
              가격보다 저렴합니다.
            </p>
          </div>
        </div>
        <div
          className="CompanyIcon-icons-item accuracy"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          <div className="CompanyIcon-icons-item-img accuracy-icon"></div>
          <div className="CompanyIcon-icons-item-info">
            <h3>높은 정확도</h3>
            <p>
              파이퀀트의 분광 분석 장비는 <br className="md-hidden" />약
              $60,000가 넘는 기존 분광 분석 장비와
              <br className="md-hidden" /> 유사한 성능을 보유하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyIcon;
