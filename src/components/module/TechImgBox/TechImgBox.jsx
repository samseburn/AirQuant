import React from 'react';

const TechImgBox = ({ img, text }) => {
  return (
    <div className="TechImgBox">
      <div className="TechImgBox-gradation">
        <img className="img" src={img} alt="" />
      </div>
      <div className="TechImgBox-text">
        <h3 className="TechConLeftChild_text_content">{text}</h3>
      </div>
    </div>
  );
};

export default TechImgBox;
