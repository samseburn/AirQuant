import React, { useEffect, useState } from 'react';

const AnswerBox = (props) => {
  //answerbox가 시간에 따라 나타나고 사라지도록 설정(boolean)
  const [visibility, setVisibility] = useState(false);

  //open state 값이 변경될 때 함수가 실행된다
  //AnswerBox가 false가 됨과 동시에 바로 사라지기 때문에 fadeOut 애니메이션이 제대로 동작하기 위해서는
  //animation-duration만큼의 시간동안 HTML DOM이 사라지지 않게 해줘야 한다.
  useEffect(() => {
    if (props.open) {
      setTimeout(() => {
        setVisibility(true);
      }, 100);
    } else {
      setTimeout(() => {
        setVisibility(false);
      }, 100);
    }
  }, [props.open]);

  return (
    // state에 따라 클래스명을 변경하여 스타일을 지정하기
    //{props.children} : 상위 컴포넌트에서 AnswerBox 컴포넌트 내에 작성한 내용이 여기로 전달됨
    <div className={`answerBox ${props.open ? 'fadeIn' : 'fadeOut'}`}>
      {visibility && props.children}
      {/* {true && props.children} */}
      {/* {false && props.children}  거짓 && 참 => 거짓(출력안됨) */}
    </div>
  );
};

export default AnswerBox;
