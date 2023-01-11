import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, id, image }) => {
  console.log(image);
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate(`/case/${id}`);
  };

  return (
    <div className="card" onClick={handleClickCard}>
      <div
        className="image-box"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
