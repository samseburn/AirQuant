import React from 'react';

const TechConvenience = ({
  title,
  leftChild,
  rightChild,
  rightChildImg,
  leftChildImg,
}) => {
  return (
    <div className="TechConvenience">
      <div className="TechConvenience_title">{title}</div>
      <div className="TechConvenience_content">
        {/* 왼쪽 */}
        <div className="TechConLeftChild">
          <img className="TechConLeftChild_Img" src={leftChildImg} />
          <div className="TechConLeftChild_text">{leftChild}</div>
        </div>
        {/* 오른쪽 */}
        <div className="TechConRightChild">
          <img className="TechConRightChild_Img" src={rightChildImg} />
          <div className="TechConRightChild_text">{rightChild}</div>
        </div>
      </div>
    </div>
  );
};

export default TechConvenience;
