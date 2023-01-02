import { InformationBox } from 'components';
import React from 'react';

const Product = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>제품소개 페이지 입니다.</p>

      <InformationBox />
    </div>
  );
};

export default Product;
