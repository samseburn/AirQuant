import { InformationBox, ProductBlueBox } from 'components';
import React from 'react';
import {
  ProductMainImg,
  ProductAirTable,
  InformationBox,
  ProductPiquantExplanation,
} from 'components';

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
      <ProductPiquantExplanation />
      <ProductMainImg />
      {/* <InformationBox /> */}
      <ProductAirTable />
      {/* <ProductMainImg />
      <ProductAirTable /> */}

      {/* <InformationBox /> */}
      {/* <ProductBlueBox /> */}
    </div>
  );
};

export default Product;
