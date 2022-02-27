import React, { useState, useEffect } from "react";
import "./cart.css";
import {NavLink} from 'react-router-dom'

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
    <article>
    <header>
    <h2>your cart <i class='fa fa-shopping-basket me-1 fa-2x'></i></h2>
    </header>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>{price} Kr</span>
      </div>
      <div className="checkout">
      <NavLink to="/checkout" className= "btn btn-success ms-2">Process to Checkout</NavLink>
      </div>
    </article>
    </>
  );
};

export default Cart;
