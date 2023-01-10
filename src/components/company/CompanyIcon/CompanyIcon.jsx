import React, { useEffect, useState } from 'react';
import { company_product, company_product_drawing } from 'images';

const CompanyIcon = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    console.log('Company Icon Component Rendered :: In');
    return () => {
      // 스크롤 이벤트가 적용된 컴포넌트를 나가게 되면 적용 x 하기 위해,,
      window.removeEventListener('scroll', updateScroll);
      console.log('Compnay Icon Component Rendered :: Out');
    };
  }, []);

  console.log(window.scrollY);

  return (
    <div className="CompanyIcon">
      <h1
        className={
          scrollPosition > 1000
            ? 'CompanyIcon-title-scrolled'
            : 'CompanyIcon-title'
        }
      >
        파이퀀트는 하마쯔사의 소형 분광기 모듈을 사용합니다
        <br />
        &#40;C12666MA&#41;
      </h1>
      <div
        className={
          scrollPosition > 1200
            ? 'CompanyIcon-imgs-scrolled'
            : 'CompanyIcon-imgs'
        }
      >
        <div className="CompanyIcon-imgs-item imageLeft">
          <img src={company_product} alt="module" />
        </div>
        <div className="CompanyIcon-imgs-item imageRight">
          <img src={company_product_drawing} alt="model drawing" />
        </div>
      </div>
      <div
        className={
          scrollPosition > 1700
            ? 'CompanyIcon-icons-scrolled'
            : 'CompanyIcon-icons'
        }
      >
        <div className="CompanyIcon-icons-item small">
          <div className="CompanyIcon-icons-item-img small-icon"></div>
          <span>
            <b>작은 사이즈</b>
          </span>
          <span>
            파이퀀트의 분광 분석 장비는
            <br /> 한 손으로 들 만큼 작은 사이즈 입니다.
          </span>
        </div>
        <div className="CompanyIcon-icons-item price">
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
        <div className="CompanyIcon-icons-item accuracy">
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
