import { InformationBox } from 'components';
import React from 'react';
import { ProductMainImg, ProductAirTable } from 'components';

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
      <ProductMainImg />
      {/* <InformationBox /> */}
      <ProductAirTable />
    </div>
  );
};

export default Product;
