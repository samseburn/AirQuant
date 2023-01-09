import React from 'react';
// import CompanyMainImg from '../../../images/Company/company_main.png';
import { company_main } from 'images';

const CompanyIntro = () => {
  return (
    <div className="ComponyIntro">
      <hr className="IntroTopHr" />
      <p className="IntroTitle">Expose Light, Analyze Right</p>

      <div className="IntroContents">
        <img src={company_main} className="IntroImg" />
        <div className="IntroText">
          <div className="IntroTopText">
            파이퀀트는 분광 분석 기반의
            <br />
            물질 성분 분석 솔루션을 제공하며,
            <br />
            휴대용 분광기술을 통해
            <br />
            <span className="IntroLargeText">
              우리 모두가 <span className="IntorBlueText">‘퀀트’</span>가 되는
              세상을 꿈꿉니다.
            </span>
          </div>
          <div className="IntroBottomText">
            <strong>주요 제품</strong>
            <br />
            에어퀀트(실내 공기질 모니터링), 워터스캐너(수질분석),
            <br />
            콜리퀀트(물속 대장균 검출), 스킨 스캐너(피부 상태 측정)
          </div>
        </div>
      </div>

      <hr className="IntroBottomHr" />
    </div>
  );
};

export default CompanyIntro;
