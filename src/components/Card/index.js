import React from "react";

import "./Card.css";

const Card = ({ id, image, name, price }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="details">
        <div className="name">{name}</div>
        <div className="id">#{id}</div>

        <div className="priceContainer">
          <img className="weth" src="/img/weth.png" alt="Weth" />
          <span className="price">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
