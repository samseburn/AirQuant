import { useState, useEffect } from 'react';

export const useScroll = (el) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', onCheckScroll);
    return () => {
      window.removeEventListener('scroll', onCheckScroll);
    };
  });

  const onCheckScroll = () => {
    const ele = document.querySelector(el);
    const eleY = ele.getBoundingClientRect().y;
    const windowY = Math.ceil(window.innerHeight / 2); //기준은 여기서 고정값으로 넣어도 되고, 또다른 parameter로 받아도 된다.
    if (eleY <= windowY) {
      setIsShow(true);
      console.log(`isShow: ${isShow}`);
    }
  };
  return { isShow };
};
