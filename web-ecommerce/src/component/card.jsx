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
      <NavLink to= {`/products/${item.id}`} class="btn btn-outline-primary"><p>{title}</p> </NavLink>
        <p>Price - {price} Kr</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;