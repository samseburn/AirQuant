import { CaseItem } from 'pages';
import React, { useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const FaqBox = (props) => {
  //답변영역이 나타나고 사라지는것을 결정하는 state
  const [open, setOpen] = useState(false);
  const [activeIndex, setactiveIndex] = useState('');

  // let openanswer;
  // active ? (openanswer = '100px') : (openanswer = '0px');

  //아이콘 클릭시 open의 boolean 값을 변경(사라지고 생기고)하는 이벤트 함수
  const toggle = (e) => {
    setOpen(!open);
    setactiveIndex(e.target.idx);

    console.log('클릭');
  };

  // const active =
  //   idx == activeIndex
  //     ? {
  //         height: contentRef.current.scrollHeight + 'px',
  //       }
  //     : { height: '0px' };

  //div 태그에 접근해서 div의 전체 height를 사용하기 위해
  const contentRef = useRef();

  return (
    <div className="faqBox">
      <div className="questionBox" onClick={toggle} idx={props.idx}>
        <div className={`question ${open ? 'open' : 'close'}`}>
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
          // height : openanswer
          open
            ? {
                height: contentRef.current.scrollHeight + 'px',
              }
            : { height: '0px' }
        }
      >
        <div className="answer">{props.answer}</div>
      </div>
    </div>
  );
};

export default FaqBox;
