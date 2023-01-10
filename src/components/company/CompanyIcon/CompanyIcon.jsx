import React, { useEffect } from 'react';
import { company_product, company_product_drawing } from 'images';

import Aos from 'aos';
import 'aos/dist/aos.css';

const CompanyIcon = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="CompanyIcon">
      <h1 className="CompanyIcon-title-scrolled" data-aos="fade-up">
        파이퀀트는 하마쯔사의 소형 분광기 모듈을 사용합니다
        <br />
        &#40;C12666MA&#41;
      </h1>
      <div className="CompanyIcon-imgs-scrolled" data-aos="fade-up">
        <div className="CompanyIcon-imgs-item imageLeft">
          <img src={company_product} alt="module" />
        </div>
        <div className="CompanyIcon-imgs-item imageRight">
          <img src={company_product_drawing} alt="model drawing" />
        </div>
      </div>
      <div className="CompanyIcon-icons-scrolled">
        <div className="CompanyIcon-icons-item small" data-aos="fade-up">
          <div className="CompanyIcon-icons-item-img small-icon"></div>
          <span>
            <b>작은 사이즈</b>
          </span>
          <span>
            파이퀀트의 분광 분석 장비는
            <br /> 한 손으로 들 만큼 작은 사이즈 입니다.
          </span>
        </div>
        <div
          className="CompanyIcon-icons-item price"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div className="CompanyIcon-icons-item-img price-icon"></div>
          <span>
            <b>낮은 가격</b>
          </span>
          <span>
            파이퀀트 분광 분석 장비는
            <br /> 약 $60,000가 넘는 기존 분광 분석 장비의
            <br /> 가격보다 저렴합니다.
          </span>
        </div>
        <div
          className="CompanyIcon-icons-item accuracy"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="CompanyIcon-icons-item-img accuracy-icon"></div>
          <span>
            <b>높은 정확도</b>
          </span>
          <span>
            파이퀀트의 분광 분석 장비는 <br />약 $60,000가 넘는 기존 분광 분석
            장비와
            <br /> 유사한 성능을 보유하고 있습니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompanyIcon;
