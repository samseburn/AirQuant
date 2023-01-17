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
    googleMapsApiKey: 'AIzaSyARPGXzLqUCHAjdKZtGvuYIeQkzxYWr5MU',
    version: '3.47',
  });
  return isLoaded ? (
    <div className="Contact sm-hidden">
      <GoogleMap
        center={center}
        zoom={20}
        mapContainerClassName="Contact-map"
      ></GoogleMap>
      <div className="Contact-info">
        <div className="info-company">회사소개</div>
        <div className="info-">오시는길</div>
      </div>
    </div>
  ) : (
    <div className="Contact-error">다시 시도하세요</div>
  );
};

export default Contact;
