import React from 'react';
import {
  ProductBlueBox,
  ProductGraphText,
  ProductMainImg,
  ProductAirTable,
  ProductPiquantExplanation,
  ProductAirquantImg,
  InformationBox,
  ProductYoutubeFirst,
  ProductYoutubeSecond,
} from 'components';

const Product = () => {
  return (
    <div>
      <ProductMainImg />
      <ProductPiquantExplanation />
      <InformationBox />
      <ProductGraphText />
      <ProductYoutubeSecond />
      <ProductBlueBox />
      <ProductAirTable />
      <ProductAirquantImg />
    </div>
  );
};

export default Product;
