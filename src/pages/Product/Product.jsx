import React from 'react';
import {
  ProductMainImg,
  ProductAirTable,
  InformationBox,
  ProductPiquantExplanation,
} from 'components';

const Product = () => {
  return (
    <div>
      <ProductPiquantExplanation />
      <ProductMainImg />
      {/* <InformationBox /> */}
      <ProductAirTable />
    </div>
  );
};

export default Product;
