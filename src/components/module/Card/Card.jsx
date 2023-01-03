import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
