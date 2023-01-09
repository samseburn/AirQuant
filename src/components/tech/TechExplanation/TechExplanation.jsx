import { airquant_10, explanation_phone, explanation_weather } from 'images';
import React from 'react';

const TechExplanation = () => {
  return (
    <div className="TechExplanation">
      <p className="FineDust">
        미세먼지(PM10), 초미세먼지(PM2.5)를 포함한
        <br />
        <span className="FineDustEleven">총 11가지 </span> 항목을 실시간으로
        측정
      </p>
      <div className="TechExplanationPhoneWeb">
        <div className="TechExplantionPhone">
          <img className="TechExplantionPhone1" src={explanation_phone} />
        </div>
        <div className="TechExplanationWeb">
          <p className="TechExplanationWeb1">
            웹/모바일 어플리케이션과 연동하여 이상징후 알림
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
      <div className="TechExplanationDigitalMonitoring">
        <div className="TechExplanationDigital">
          <img className="TechExplanationDigital1" src={explanation_weather} />
        </div>
        <div className="TechExplanationMonitoring">
          <p className="TechExplanationMonitoring1">
            디지털 사이니지와 연동하여
            <br />
            실시간 모니터링 현황 공유
          </p>
          <p className="TechExplanationMonitoring2">
            각종 디지털 정보 디스플레이로
            <br />
            실내 공간 방문자 및 이용자에게
            <br />
            실시간 실내 공기질 현황을 공유합니다.
          </p>
        </div>
      </div>
      <div className="Airquantquality">
        <div className="Airquant">
          <img className="Airquant1" src={airquant_10} />
        </div>
        <div className="AirQuality">
          <p className="AirQuality1">
            공기조화 시스템(HVAC 시스템)과 연동하여
            <br />
            실내 환경 자동 제어
          </p>
          <p className="AirQuality2">
            실내 공기질 유지 기준에 맞춰
            <br />
            실내 공기질 측정 결과를 기반으로
            <br />
            공기조화 시스템(HVAC 시스템)을 제어합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechExplanation;
