import {
  airquant_03,
  airquant_04,
  airquant_05,
  airquant_09,
  airquant_10,
  airquant_11,
} from 'images';
import React from 'react';

const ProductAirquantImg = () => {
  return (
    <div className="Airquant_Main">
      <div className="Airquant_Main_Content">
        <div className="Airquant_Main_Content1">
          기대 이상의 것도 감지해내는 <span className='Airquant_Main_title'>에어퀀트</span>
        </div>
      </div>
      <div className="Airquant_Flex">
        <img className="Airquant_Main1" src={airquant_09} />
        <img className="Airquant_Main2" src={airquant_10} />
        </div>
        <div className='Airquant_img_second'>
        <img className="Airquant_Main3" src={airquant_05} />
        </div>
        <div className='Airquant_img_third'>
        <img className="Airquant_Main4" src={airquant_11} />
        <img className="Airquant_Main5" src={airquant_03} />
        <img className="Airquant_Main6" src={airquant_04} />
        </div>
      </div>
  );
};

export default ProductAirquantImg;
