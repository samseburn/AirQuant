import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { ScrollSection } from 'utils';

const ProductBlueBox = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);

  // const updateScroll = () => {
  //   setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', updateScroll);
  // }, []);

  // const scrollRef = useRef();

  // let scroll;
  // scrollRef.current == undefined
  //   ? (scroll = 0)
  //   : (scroll = scrollRef.current.getBoundingClientRect().top);

  // const absoluteTop = window.pageYOffset + scroll;

  return (
    // <div className="ProductBlueBox" ref={scrollRef}>
    //   <div
    //     // 스크롤 위치 확인 필수!
    //     style={{ backgroundPosition: scrollPosition }}
    //     className={
    //       scrollPosition > absoluteTop - 200
    //         ? 'ProductBlueBox_backGround'
    //         : 'ProductBlueBox_ScrolledbackGround'
    //     }
    //   >
    //     <div
    //       className={
    //         scrollPosition > absoluteTop - 200
    //           ? 'ProductBlueBox_backGround_Scrolledcontent'
    //           : 'ProductBlueBox_backGround_content'
    //       }
    //     >
    //       <span className="ProductBlueBox_backGround_content_br">
    //         오염원을 명확하게 측정하고,
    //       </span>{' '}
    //       이를 바탕으로 해결책을 제시하여
    //       <br />
    //       <span className="ProductBlueBox_bold">
    //         공기 질을 개선하는 방법이 필요
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <>
      <ScrollSection
        name={'scroll-section'}
        children={
          <div className="scroll-section-text">
            <h1>오염원을 명확하게 측정하고,</h1>
          </div>
        }
      />
      <ScrollSection
        name={'scroll-section-reverse'}
        children={
          <div className="scroll-section-reverse-text">
            <h1>공기 질을 개선하는 방법이 필요</h1>
          </div>
        }
      />
    </>
  );
};

export default ProductBlueBox;
