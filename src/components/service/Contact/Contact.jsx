import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { FaBus, FaSubway } from 'react-icons/fa';

const center = {
  // 위도, 경도
  lat: 37.5506226,
  lng: 126.973443,
};
const Contact = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'airquant-374805',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    version: '3.50',
  });
  return isLoaded ? (
    <div className="Contact sm-hidden">
      <GoogleMap
        center={center}
        zoom={20}
        mapContainerClassName="Contact-map"
      ></GoogleMap>
      <div className="Contact-info">
        {/* <div className="Contact-info-company">
          <div className="Contact-info-title">회사소개</div>
          PiQuant dreams of a world where everyone becomes "Quant" <br />
          by offering an affordable, spectroscopy -based component detector.
        </div> */}
        <div className="Contact-info-address">
          <div className="Contact-info-title">오시는길</div>
          대한민국 서울특별시 용산구 한강대로 372 C동 2층
          <div className="Contact-info-address-transport">
            <div className="Contact-info-address-transport-title">
              <FaSubway />
            </div>
            <div className="Contact-info-address-transport-text">
              서울역: 1호선,4호선,경의중앙선,공항철도
              <br />
              서울역 4호선 12번출구에서 도보 10분 거리
            </div>
          </div>
          <div className="Contact-info-address-transport">
            <div className="Contact-info-address-transport-title">
              <FaBus />
            </div>
            <div className="Contact-info-address-transport-text">
              동자경로당: 용산 2번
              <br /> 갈월동역 <br />
              100,150,151,152,162,421,500,501,502, 504,505, 506,507,
              742,750A,750B,752,1711,6001,7016 번 버스
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="Contact-error">다시 시도하세요</div>
  );
};

export default Contact;
