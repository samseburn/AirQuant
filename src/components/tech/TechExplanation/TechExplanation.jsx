import {
  airquant_10,
  airquant_13,
  explanation_phone0,
  explanation_weather0,
} from 'images';
import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

const TechExplanation = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="TechExplanation">
      {/* <div className="FineDust" data-aos="fade-up">
        <span className="TechExplanation_space">미세먼지(PM10),</span>{' '}
        <span className="TechExplanation_space">
          초미세먼지(PM2.5)를 포함한 <br />
        </span>
        <span className="TechExplanation_space">
          <span className="FineDustEleven">총 11가지 </span> 항목을 실시간으로
          측정
        </span>
      </div> */}
      <div className="TechExplanationPhoneWeb" data-aos="fade-up">
        <div className="TechExplantionPhone">
          <img
            className="TechExplantionPhone1"
            src={explanation_phone0}
            alt=""
          />
        </div>
        <div className="TechExplanationWeb">
          <div className="TechExplanationWeb1">
            웹/모바일 어플리케이션과 <br />
            연동하여 이상징후 알림
            <div className="TechExplanationWeb2">
              실내 공기질을 측정 및 기록하고 <br />
              웹/모바일 어플리케이션과 연동하여 <br />
              실내 공기질 유지 기준 초과 시 <br />
              알림이 울립니다.
            </div>
          </div>
        </div>
      </div>
      <div className="TechExplanationDigitalMonitoring" data-aos="fade-up">
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

        <img
          className="TechExplanationDigital1"
          src={explanation_weather0}
          alt=""
        />
      </div>
      <div className="Airquantquality" data-aos="fade-up">
        <div className="Airquant">
          <img className="Airquant1" src={airquant_10} alt="" />
          <img className="Airquant2" src={airquant_13} alt="" />
        </div>
        <div className="AirQuality">
          <div className="AirQuality1">
            공기조화 시스템 <br />
            (HVAC 시스템)과 <br />
            연동하여 실내환경 <br />
            자동제어
          </div>
          <div className="AirQuality2">
            실내 공기질 측정 결과를 <br />
            기반으로 공기조화 시스템 <br />
            (HVAC 시스템)을 제어합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechExplanation;
