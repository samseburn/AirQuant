import React, { useState } from "react";
import { airquant_06 } from 'images';


const ProductMainImg = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <>
      <div className="airQuant_Main">
        <div className="airQuant_Main_Background_Image_main">
          <img className='airQuant_Main_Background_Image' src={airquant_06}/>
        </div>
        <div className="airQuant_Title">
          <p className="airQuant_Main_Title">AirQuant</p>
          <p className="airQuant_Sub_Title">
            Integrated Indoor Air Quality Management IoT solution
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductMainImg;
