import React, { useState, useEffect} from "react";
import "./styles/cart.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

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
    <h2>your cart <i className='fa fa-shopping-basket me-1 fa-2x'></i></h2>
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
      </article>
      <div className="checkout">
      <Link to="/Checkout" className= "btn btn-success ms-2"> Process to Checkout</Link>
      </div>
    </>
  );
};

Cart.propTypes = {
  price : PropTypes.number,
  amount: PropTypes.number
}

export default Cart;