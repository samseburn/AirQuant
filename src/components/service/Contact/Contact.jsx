import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

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
        <div className="Contact-info-company">
          <span>회사소개</span> <br />
          PiQuant dreams of a world where everyone becomes "Quant" <br />
          by offering an affordable, spectroscopy -based component detector.
        </div>
        <div classNamen="Contact-info-address">
          <span>오시는길</span> <br />
          대한민국 서울특별시 용산구 한강대로 372 C동 2층
        </div>
      </div>
    </div>
  ) : (
    <div className="Contact-error">다시 시도하세요</div>
  );
};

export default Contact;
