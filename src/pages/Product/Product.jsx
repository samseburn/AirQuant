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
import { TechMeasurementTable } from 'components/module/TechMeasurementTable';

const Product = () => {
  return <div>
    <ProductMainImg/>
    <ProductPiquantExplanation/>
    <InformationBox/>
    <ProductYoutubeFirst/>
    <ProductGraphText/>
    <ProductYoutubeSecond/>
    <ProductBlueBox/>
    <ProductAirTable/>
    <ProductAirquantImg/>
  </div>;
};

export default Product;
