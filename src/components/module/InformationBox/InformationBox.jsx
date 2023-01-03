import React from 'react';

const InformationBox = () => {
  return (
    <div className="InformationBox">
      <p>실내 공기질을 왜 정확하게 모니터링 해야할까요?</p>

      <div className="imgBox">
        <div className="title">건물 외부 대비 심각한 공기 질 오염</div>
        <div className="imgContent">
          <div className="leftChild">이미지</div>
          <div className="rightChild">
            <span>실내</span>공기 오염물질의 농도
            <br />
            실외 대비 <span>2배에서 5배 (최대 100배 이상)</span>
          </div>
        </div>
      </div>
      <div className="dangerBox">
        <div className="title">공기 질 오염의 위험성</div>
        <div className="content">
          <div className="contentFirst">
            <span>집중력 저하나 호흡기 질환</span>을 유발/악화
          </div>
          <div className="contentSecond">
            아토피, 천식, 알레르기 비염 등 각종 환경성 질환의 원인
            <br />
            신체 기관이 발달과정에 영향을 줄 수 있음
          </div>
          <div className="contentThird">
            특히 알레르기 비염의 경우 유전적 요인과 환경적 요인이 합쳐져 생기는
            질환으로,
            <br />
            최근 실내 위주의 생활이 늘어나면서 발병 빈도가 높아지고 있음
          </div>
          <div className="contentBottom">
            심장병이나 암, 호흡기 질환과 같은 <span>만성 질환</span>이 발생할
            가능성 증가
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationBox;
