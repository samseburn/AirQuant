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
        <div className="TechConBoxLeft">
          <div className="TechConLeftChild">
            <img className="TechConLeftChild_Img" src={leftChildImg} />
            <div className="TechConLeftChild_text">
              <div className="TechConLeftChild_text_content">{leftChild}</div>
            </div>
          </div>
        </div>
        {/* 오른쪽 */}
        <div className="TechConBoxright">
          <div className="TechConRightChild">
            <img className="TechConRightChild_Img" src={rightChildImg} />
            <div className="TechConRightChild_text">
              <div className="TechConRightChild_text_content">{rightChild}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechConvenience;
