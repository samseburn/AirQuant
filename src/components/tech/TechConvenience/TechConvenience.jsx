import { TechImgBox } from 'components/module/TechImgBox';
import React from 'react';

const TechConvenience = ({
  title,
  leftChild,
  rightChild,
  rightChildImg,
  leftChildImg,
  idx,
}) => {
  console.log(idx);
  return (
    <div className={`TechConvenience ${idx % 2 === 0 ? 'reverse' : ''}`}>
      <div className="TechConvenience_title">{title}</div>
      <div className={`TechConvenience_content`}>
        {/* 왼쪽 */}
        <TechImgBox text={leftChild} img={leftChildImg} />

        {/* 오른쪽 */}
        <TechImgBox text={rightChild} img={rightChildImg} />
      </div>
    </div>
  );
};

export default TechConvenience;
