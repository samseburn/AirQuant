import { airquant_13, explanation_phone0, explanation_weather0 } from 'images';
import React from 'react';

const TechExplanation = () => {
  return (
    <div className="TechExplanation">
      <div className="FineDust">
        미세먼지(PM10), 초미세먼지(PM2.5)를 포함한
        <br />
        <span className="FineDustEleven">총 11가지 </span> 항목을 실시간으로
        측정
      </div>
      <div className="TechExplanationPhoneWeb">
        <div className="TechExplantionPhone">
          <img className="TechExplantionPhone1" src={explanation_phone0} />
        </div>
        <div className="TechExplanationWeb">
          <div className="TechExplanationWeb1">
            웹/모바일 어플리케이션과 연동하여 이상징후 알림
          </div>
          <div className="TechExplanationWeb2">
            실내 공기질을 측정 및 기록하고
            <br />
            웹/모바일 어플리케이션과 연동하여
            <br />
            실내 공기질 유지 기준 초과 시 알림이 울립니다.
          </div>
        </div>
      </div>
      <div className="TechExplanationDigitalMonitoring">
        <div className="TechExplanationMonitoring">
          <div className="TechExplanationMonitoring1">
            디지털 사이니지와 연동하여
            <br />
            실시간 모니터링 현황 공유
          </div>
          <div className="TechExplanationMonitoring2">
            각종 디지털 정보 디스플레이로
            <br />
            실내 공간 방문자 및 이용자에게
            <br />
            실시간 실내 공기질 현황을 공유합니다.
          </div>
        </div>
        <div className="TechExplanationDigital">
          <img className="TechExplanationDigital1" src={explanation_weather0} />
        </div>
      </div>
      <div className="Airquantquality">
        <div className="Airquant">
          <img className="Airquant1" src={airquant_13} />
        </div>
        <div className="AirQuality">
          <div className="AirQuality1">
            공기조화 시스템(HVAC 시스템)과 연동하여
            <br />
            실내 환경 자동 제어
          </div>
          <div className="AirQuality2">
            실내 공기질 유지 기준에 맞춰
            <br />
            실내 공기질 측정 결과를 기반으로
            <br />
            공기조화 시스템(HVAC 시스템)을 제어합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechExplanation;
