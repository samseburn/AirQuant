import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

function ToTheTop() {
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const handleFollow = () => {
    setScrollY(window.scrollY || document.documentElement.scrollTop);
    if (ScrollY > 1000) {
      // 1000 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 1000 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0); // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  });

  return (
    <div className="wrap">
      <button
        className={`topBtn${BtnStatus ? '-active' : ''}`} // 버튼 노출 여부
        onClick={handleTop} // 버튼 클릭시 함수 호출
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
}

export default ToTheTop;
