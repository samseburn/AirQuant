import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { CompanyLEDChart } from 'components';

const CompanyLED = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="CompanyLED">
      <h1 className="CompanyLED-title" data-aos="fade-up">
        단일/다중 LED 사용 신호대잡음비 비교
      </h1>
      <div className="CompanyLED-charts" data-aos="fade-up">
        <CompanyLEDChart />
      </div>
      <div className="CompanyLED-content" data-aos="fade-up">
        코드의 길이가 길어지거나 주파수가 낮을수록 신호대잡음비가 개선됨
        <br />두 개의 LED가 켜져있을 경우 신호대잡음비가 개선되지만, 단일 LED
        사용 시와 큰 차이 없음
      </div>
    </div>
  );
};

export default CompanyLED;
