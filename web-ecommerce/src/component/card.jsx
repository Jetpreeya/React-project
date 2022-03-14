import React from "react";
import { NavLink } from 'react-router-dom';

const Cards = ({ item, handleClick }) => {
  const { title, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
      <div className = "text-center">
      <NavLink to= {`/products/${item.id}`} ><p>{title}</p> </NavLink>
        <p>Price - {price} Kr</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;