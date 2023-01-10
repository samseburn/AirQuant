import {
  airquant_03,
  airquant_04,
  airquant_05,
  airquant_09,
  airquant_12,
  airquant_13,
} from 'images';
import React from 'react';
//
const ProductAirquantImg = () => {
  return (
    <div className="Airquant_Main">
      <div className="Airquant_Main_Content">
        <div className="Airquant_Main_Content1">..</div>
        <div className="Airquant_Main_Content2">
          기대 이상의 것도 감지해내는
          <span className="Airquant_Main_title"> 에어퀀트</span>
        </div>
      </div>
      <div className="Airquant_Flex">
        <div className="Airquant_img_first">
          <div className="Airquant_Main_1">
            <img className="Airquant_Main1" src={airquant_09} />
          </div>
          <div className="Airquant_Main_2">
            <img className="Airquant_Main2" src={airquant_13} />
          </div>
        </div>
        <div className="Airquant_img_second">
          <div className="Airquant_Main_3">
            <img className="Airquant_Main3" src={airquant_05} />
          </div>
        </div>
        <div className="Airquant_img_third">
          <div className="Airquant_Main_4">
            <img className="Airquant_Main4" src={airquant_12} />
          </div>
          <div className="Airquant_Main_5">
            <img className="Airquant_Main5" src={airquant_03} />
          </div>
          <div className="Airquant_Main_6">
            <img className="Airquant_Main6" src={airquant_04} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAirquantImg;
