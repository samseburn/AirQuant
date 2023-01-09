import React, { useEffect } from 'react';
import Aos from 'aos';
import { company_main } from 'images';

import 'aos/dist/aos.css';
import { Button } from 'components/module/Button';

const CompanyIntro = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="fade-up">
      <hr className="Intro-TopHr" />
      <p className="Intro-Title">Expose Light, Analyze Right</p>

      <div className="Intro-Contents">
        <img src={company_main} className="Intro-Contents-Img" />
        <div className="Intro-Contents-Text">
          <div className="Intro-Contents-Text-Top">
            파이퀀트는 분광 분석 기반의
            <br />
            물질 성분 분석 솔루션을 제공하며,
            <br />
            휴대용 분광기술을 통해
            <br />
            <span className="Intro-Contents-Text-Large">
              우리 모두가{' '}
              <span className="Intro-Contents-Text-Large-Blue">‘퀀트’</span>가
              되는 세상을 꿈꿉니다.
            </span>
          </div>
          <div className="Intro-Contents-Text-Bottom">
            <strong>주요 제품</strong>
            <br />
            에어퀀트(실내 공기질 모니터링), 워터스캐너(수질분석),
            <br />
            콜리퀀트(물속 대장균 검출), 스킨 스캐너(피부 상태 측정)
          </div>
        </div>
      </div>

      <Button />

      <hr className="Intro-BottomHr" />
    </div>
  );
};

export default CompanyIntro;
