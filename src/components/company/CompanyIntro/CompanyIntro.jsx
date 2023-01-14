import React, { useEffect } from 'react';
import { company_main } from 'images';
import { Button } from 'components';

import Aos from 'aos';
import 'aos/dist/aos.css';

const CompanyIntro = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="CompanyIntro" data-aos="fade-up">
      <div className="CompanyIntro-title">
        <hr />
        <h1>Expose Light, Analyze Right</h1>
      </div>
      <div className="CompanyIntro-Contents">
        <img src={company_main} className="CompanyIntro-Contents-Img" alt="" />
        <div className="CompanyIntro-Contents-Text">
          <div className="CompanyIntro-Contents-Text-Top">
            <p className="sm-hidden">
              파이퀀트는 분광 분석 기반의
              <br />
              물질 성분 분석 솔루션을 제공하며, 휴대용 분광기술을 통해
            </p>
            <span className="CompanyIntro-Contents-Text-Top-Large">
              우리 모두가
              <br className="sm-only" />
              <strong className="CompanyIntro-Contents-Text-Top-Large-Blue">
                ‘퀀트’
              </strong>
              가 되는 세상을 꿈꿉니다.
            </span>
          </div>
          <div className="CompanyIntro-Contents-Text-Bottom sm-hidden">
            <h3>주요 제품</h3>

            <p>
              에어퀀트(실내 공기질 모니터링), 워터스캐너(수질분석),
              <br />
              콜리퀀트(물속 대장균 검출), 스킨 스캐너(피부 상태 측정)
            </p>
          </div>
        </div>
      </div>

      <div className="CompanyIntro-Button">
        <Button url="http://www.piquant.asia" text="홈페이지" />
        <Button url="https://blog.naver.com/piquant_asia" text="공식 블로그" />
      </div>

      {/* <hr className="CompanyIntro-BottomHr" /> */}
    </div>
  );
};

export default CompanyIntro;
