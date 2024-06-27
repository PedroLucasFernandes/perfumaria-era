import React from 'react';
import './Card.css';

type CardProps = {
    image: string;
    title: string;
    year: string;
    onClick?: () => void;
};

const Card: React.FC<CardProps> = ({ image, title, year, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} className="card-image" />
      <h1 className="card-title">{title}</h1>
      <h3 className="card-year">{year}</h3>
    </div>
  );
};
  
export default Card;