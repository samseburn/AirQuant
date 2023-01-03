import { buildQueries } from '@testing-library/react';
import React from 'react';

const ProductPiquantExplanation = () => {
  return (
    <div className="parent">
      "
      <div className="parent1">
        <span className="Num1">
          <br />
          파이퀀트는 4차 산업의 핵심 기술인 IoT 기술과 빅데이터를 이용해
          <br />
          실시간으로 실내 공기질을 정확하게 측정하는
          <br />
          실내 공기질 통합 모니터링 IoT 솔루션,
          <span className="AirQuant"> 에어퀀트</span>를 개발했습니다.
        </span>
        <br />
        <br />
        <br />
        <span className="Num2">
          에어퀀트는 관리자가
          <span className="blue1"> 유해물질로부터 실내 환경 보호</span>
          하여
          <br />
          <span className="blue2">안전하고 쾌적한 실내환경을 조성</span>
          하는 데 기여합니다.
        </span>
        <br />
      </div>
      "
    </div>
  );
};

export default ProductPiquantExplanation;
