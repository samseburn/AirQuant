import React from 'react';

const ProductBackground = () => {
  return (
    <div className="ProductBackground">
      <div className="ProductBackground_box">
        <div className="ProductBackground_box_text">
          <div className="ProductBackground_box_text_first">
            <span className="ProductBackground_box_text_first_br">
              파이퀀트는 4차 산업의 핵심 기술인{' '}
            </span>
            IoT 기술과 빅데이터를 이용해
            <br />
            실시간으로 실내 공기질을 정확하게 측정하는
            <br />
            <span className="ProductBackground_box_text_first_br">
              실내 공기질 통합 모니터링 IoT 솔루션,{' '}
            </span>
            에어퀀트를 개발했습니다.
          </div>
          <div className="ProductBackground_box_text_second">
            <span className="ProductBackground_box_text_second_br">
              에어퀀트는 관리자가 유해물질로부터{' '}
            </span>
            실내 환경 보호하여
            <br />
            <span className="ProductBackground_box_text_second_br">
              안전하고 쾌적한 실내환경을{' '}
            </span>
            조성하는 데 기여합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBackground;
