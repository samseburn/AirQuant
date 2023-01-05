import React, { useState } from 'react';
import { AnswerBox } from 'components';
import { FiChevronDown } from 'react-icons/fi';

const Box = ({ question, answer }) => {
  //답변영역이 나타나고 사라지는것을 결정하는 state
  const [open, setOpen] = useState(false);

  //
  //아이콘 클릭시 open의 boolean 값을 변경(사라지고 생기고)하는 이벤트 함수
  const openHandler = () => {
    setOpen((open) => !open);
  };

  return (
    <div className="box">
      <div className="questionBox" onClick={() => openHandler()}>
        <div className="question">{question}</div>
        <div className="icon">
          <FiChevronDown />
        </div>
      </div>
      <AnswerBox open={open}>{answer}</AnswerBox>
    </div>
  );
};

export default Box;
