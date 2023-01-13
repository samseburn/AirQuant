import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

const TechConvenience = ({
  title,
  leftChild,
  rightChild,
  rightChildImg,
  leftChildImg,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="TechConvenience">
      <div className="TechConvenience_title">{title}</div>
      <div className="TechConvenience_content">
        {/* 왼쪽 */}
        <div
          className="TechConLeftChild"
          data-aos="fade-up"
          data-aos-delay="70"
        >
          <img className="TechConLeftChild_Img" src={leftChildImg} />
          <div className="TechConLeftChild_text">{leftChild}</div>
        </div>
        {/* 오른쪽 */}
        <div
          className="TechConRightChild"
          data-aos="fade-up"
          data-aos-delay="70"
        >
          <img className="TechConRightChild_Img" src={rightChildImg} />
          <div className="TechConRightChild_text">{rightChild}</div>
        </div>
      </div>
    </div>
  );
};

export default TechConvenience;
