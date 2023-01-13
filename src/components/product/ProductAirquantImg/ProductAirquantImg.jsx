import {
  airquant_03,
  airquant_04,
  airquant_05,
  airquant_09,
  airquant_12,
  airquant_13,
  airquant_16,
} from 'images';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
//
const ProductAirquantImg = () => {
  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);
  return (
    <div className="Airquant_Main">
      <div className="Airquant_Main_Content" data-aos="fade-up">
        <div className="Airquant_Dots">
          <div className="Airquant_Main_Dots">..</div>
        </div>
        <div className="Airquant_Main_Content1">
          기대 이상의 것도 감지해내는
          <span className="Airquant_Main_title"> 에어퀀트</span>
        </div>
      </div>
      <div className="Airquant_Flex_Container">
        <div className="Airquant_Flex">
          <div className="Airquant_img_first" data-aos="fade-up">
            <div className="Airquant_Main_1">
              <img className="Airquant_Main1" src={airquant_09} alt="" />
            </div>
            <div className="Airquant_Main_2">
              <img className="Airquant_Main2" src={airquant_13} alt="" />
            </div>
          </div>
          <div className="Airquant_img_second" data-aos="fade-up">
            <div className="Airquant_Main_3">
              <img className="Airquant_Main3" src={airquant_05} alt="" />
            </div>
          </div>
          <div className="Airquant_img_third" data-aos="fade-up">
            <div className="Airquant_Main_4">
              <img className="Airquant_Main4" src={airquant_12} alt="" />
            </div>
            <div className="Airquant_Main_5">
              <img className="Airquant_Main5" src={airquant_03} alt="" />
            </div>
            <div className="Airquant_Main_6">
              <img className="Airquant_Main6" src={airquant_04} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAirquantImg;
