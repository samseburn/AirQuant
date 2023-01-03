import React, { useState } from 'react';
import { AnswerBox, QuestionBox } from 'components';
import './box.scss';

const Box = (props) => {
  //답변영역이 나타나고 사라지는것을 결정하는 state
  const [open, setOpen] = useState(false);

  //아이콘 클릭시 open의 boolean 값을 변경(사라지고 생기고)하는 이벤트 함수
  const openHandler = () => {
    setOpen((open) => !open);
  };

  return (
    <div className="box">
      <div className="questionBox" onClick={() => openHandler()}>
        <div className="title">명의변경은 어떻게 하나요?</div>
        <div className="icon">✅</div>
      </div>
      <AnswerBox open={open}>고객센터로 문의주시기 바랍니다.</AnswerBox>
    </div>
  );
};

export default Box;
