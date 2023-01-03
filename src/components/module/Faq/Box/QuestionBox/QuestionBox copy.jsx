import React, { useState } from 'react';
import './QuestionBox.scss';

const QuestionBox = () => {
  const [open, setOpen] = useState(true);

  const openHandler = () => {
    setOpen((open) => !open);
    console.log('icon click');
  };

  return (
    <div className="box">
      <div className="questionBox"></div>

      <div className={open ? 'showAnswer' : 'hideAnswer'}>
        고객센터로 문의주세요.
      </div>
    </div>
  );
};

export default QuestionBox;
