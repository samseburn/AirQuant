import { table_logo } from 'images';
import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { ProductYoutubeFirst } from '../ProductYoutubeFirst';

const InformationBox = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="InformationBox">
      <p className="InformationBox_bigTitle" data-aos="fade-up">
        실내 공기질을 왜 정확하게 모니터링 해야할까요?
      </p>

      {/* 박스1 */}

      <div className="InformationBox_firstBox" data-aos="fade-up">
        <div className="InformationBox_title">
          건물 외부 대비 심각한 공기 질 오염
        </div>

        <div className="imgContent">
          <img src={table_logo} alt="" className="imgContent_leftChild" />
          <div className="imgContent_rightChild">
            <span className="imgContent_rightChild_blue">실내공기 </span>
            오염물질의 농도
            <br />
            실외 대비{' '}
            <span className="imgContent_rightChild_blue">
              2배에서 5배 (최대 100배 이상)
            </span>
          </div>
        </div>
      </div>

      {/* 박스2 */}

      <div className="InformationBox_secondBox" data-aos="fade-up">
        <div className="InformationBox_title">공기 질 오염의 위험성</div>
        <div className="InformationBox_secondBox_content">
          <div className="dangerContentFirst">
            <span className="dangerContentFirst_colorChange">
              집중력 저하나 호흡기 질환
            </span>
            을 유발/악화
          </div>
          <div className="dangerContentSecond">
            아토피, 천식, 알레르기 비염 등 각종 환경성 질환의 원인
            <br />
            신체 기관이 발달과정에 영향을 줄 수 있음
          </div>
          <div className="dangerContentThird">
            특히 알레르기 비염의 경우 유전적 요인과 환경적 요인이 합쳐져 생기는
            질환으로,
            <br />
            최근 실내 위주의 생활이 늘어나면서 발병 빈도가 높아지고 있음
          </div>
          <div className="dangerContentBottom">
            심장병이나 암, 호흡기 질환과 같은
            <span className="dangerContentBottom_colorChange"> 만성 질환</span>
            이 발생할 가능성 증가
          </div>
        </div>
      </div>
      <ProductYoutubeFirst />
    </div>
  );
};

export default InformationBox;
