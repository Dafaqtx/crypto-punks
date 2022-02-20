import React from "react";

import "./Card.css";

const Card = ({ id, image, name, price, onClick }) => {
  const handleClick = () => onClick(id);

  return (
    <button className="card" onClick={handleClick}>
      <img src={image} alt={name} />
      <div className="details">
        <div className="heading">
          <span className="name">{name}</span>
          <span className="id">#{id}</span>
        </div>

        <div className="priceContainer">
          <img className="weth" src="/img/weth.png" alt="Weth" />
          <span className="price">{price}</span>
        </div>
      </div>
    </button>
  );
};

export default Card;
