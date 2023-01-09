import React from 'react';
import { useState, useEffect } from 'react';

const ProductBlueBox = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  }, []);
  return (
    <div className="ProductBlueBox">
      <div
        // 스크롤 위치 확인 필수!
        style={{ backgroundPosition: scrollPosition }}
        className={
          scrollPosition > 4000
            ? 'ProductBlueBox_backGround'
            : 'ProductBlueBox_ScrolledbackGround'
        }
      >
        <div
          className={
            scrollPosition > 4000
              ? 'ProductBlueBox_backGround_Scrolledcontent'
              : 'ProductBlueBox_backGround_content'
          }
        >
          오염원을 명확하게 측정하고, 이를 바탕으로 해결책을 제시하여
          <br />
          <span className="ProductBlueBox_bold">
            공기 질을 개선하는 방법이 필요
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductBlueBox;
