import { Faq } from 'components';
import React from 'react';

const Service = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      고객문의 페이지 입니다.
      <Faq />
    </div>
  );
};

export default Service;
