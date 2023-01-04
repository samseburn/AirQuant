import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, id }) => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate(`/case/${id}`);
  };

  return (
    <div className="card" onClick={handleClickCard}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
