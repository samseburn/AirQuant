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
import { ProductBackground } from 'components/product/ProductBackground';

const Product = () => {
  return (
    <div>
      <ProductMainImg />
      {/* <ProductPiquantExplanation /> */}
      <InformationBox />
      <ProductBackground />
      <ProductGraphText />
      <ProductBlueBox />
      <ProductAirTable />
      {/* <ProductAirquantImg /> */}
    </div>
  );
};

export default Product;
