import React from 'react';
import './Card.css';

type CardProps = {
    image: string;
    title: string;
    price: string;
    onClick?: () => void;
};

const Card: React.FC<CardProps> = ({ image, title, price, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} className="card-image" />
      <h1 className="card-title">{title}</h1>
      <h3 className="card-price">{price}</h3>
    </div>
  );
};
  
export default Card;