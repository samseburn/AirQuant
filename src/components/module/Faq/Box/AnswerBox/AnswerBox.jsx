import React, { useEffect, useState } from 'react';
import './AnswerBox.scss';

const AnswerBox = (props) => {
  const [visibility, setVisibility] = useState(false);

  //open state 값이 변경될 때 함수가 실행된다
  //AnswerBox가 false가 됨과 동시에 바로 사라지기 때문에 fadeOut 애니메이션이 제대로 동작하기 위해서는
  //animation-duration만큼의 시간동안 HTML DOM이 사라지지 않게 해줘야 한다.
  useEffect(() => {
    if (props.open) {
      setVisibility(true);
    } else {
      setTimeout(() => {
        setVisibility(false);
      }, 400);
    }
  }, [props.open]);

  return (
    // state에 따라 클래스명을 변경하여 스타일을 지정하기
    <div className={`answerBox ${props.open ? 'fadeIn' : 'fadeOut'}`}>
      {visibility && props.children}
    </div>
  );
};

export default AnswerBox;
