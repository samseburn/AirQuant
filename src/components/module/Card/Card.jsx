import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, id, image }) => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate(`/case/${id}`);
  };

  return (
    <aritcle className="card" onClick={handleClickCard}>
      <div
        className="image-box"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card-info">
        <div>
          <span className="case-cate">적용사례 {id}</span>
          <h1 className="card-title">{title}</h1>
        </div>
      </div>
    </aritcle>
  );
};

export default Card;
