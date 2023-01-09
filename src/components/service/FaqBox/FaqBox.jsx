import React, { useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const FaqBox = (props) => {
  //답변영역이 나타나고 사라지는것을 결정하는 state
  const [open, setOpen] = useState(false);

  //아이콘 클릭시 open의 boolean 값을 변경(사라지고 생기고)하는 이벤트 함수
  const toggle = () => {
    setOpen(!open);
    console.log('클릭');
  };

  //div 태그에 접근해서 div의 전체 height를 사용하기 위해
  const contentRef = useRef();

  return (
    <div className="faqBox">
      <div className="questionBox" onClick={toggle}>
        <div className={`question ${open ? 'on' : 'off'}`}>
          {props.question}
        </div>

        <div className={`icon ${open ? 'upIcon' : 'downIcon'}`}>
          <FiChevronDown />
        </div>
      </div>

      <div
        className="answer-open"
        ref={contentRef}
        style={
          open
            ? {
                height: contentRef.current.scrollHeight + 'px',
              }
            : { height: '0px' }
        }
      >
        <div className="answer">{props.children}</div>
      </div>
    </div>
  );
};

export default FaqBox;
