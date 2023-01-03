import React from 'react';

const TechExplanation = () => {
  return (
    <div className="TechExplanation">
      <p className="FineDust">
        미세먼지(PM10),
        <br />
        초미세먼지(PM2.5)를 포함한
        <br />
        <span className="Fineeleven">총 11가지 </span> 항목을 실시간으로 측정
      </p>
      <br />
      <br />
      <br />
      <div className="TechExplantionPhone"></div>
      <div className="TechExplanationWeb">
        <p className="TechExplanationWeb1">
          웹/모바일 어플리케이션과
          <br />
          연동하여 이상징후 알림
        </p>
        <p className="TechExplanationWeb2">
          실내 공기질을 측정 및 기록하고
          <br />
          웹/모바일 어플리케이션과 연동하여
          <br />
          실내 공기질 유지 기준 초과 시 알림이 울립니다.
        </p>
      </div>
    </div>
  );
};

export default TechExplanation;
