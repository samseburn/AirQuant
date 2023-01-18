import React from 'react';
import {
  MainImg_bottom_01,
  MainImg_bottom_02,
  MainImg_bottom_03,
} from 'images';

const ProductImgBottom = () => {
  return (
    <div className="ProductImgBottom">
      <div className="ProductImgBottom_title">
        <span className="ProductImgBottom_title_br">지금 당장 </span>에어퀀트를
        만나보세요
      </div>
      <div className="ProductImgBottom_imgs">
        <img
          className="ProductImgBottom_imgs_One"
          src={MainImg_bottom_01}
          alt=""
        />
        <img
          className="ProductImgBottom_imgs_Two"
          src={MainImg_bottom_02}
          alt=""
        />
        <img
          className="ProductImgBottom_imgs_Three"
          src={MainImg_bottom_03}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductImgBottom;
