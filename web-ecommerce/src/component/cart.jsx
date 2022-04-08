import React, { useState, useEffect} from "react";
import "./Styles/Cart.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Cart = ({ cart, setCart, handleChange,setShow }) => {
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

  if (cart.length === 0) {
    return (
      <>
        <div className = "text-center" style = {{height:"90vh"}}>
          <h2>Your cart <i className="fa fa-shopping-basket fa-2x" aria-hidden="true"></i></h2>
          <h4 className='empty-cart'>is currently empty</h4>
          </div>
          </>
    )
  }

  return (
    <>
    <article>
    <div className = "text-center">
    <h2>Your cart <i className='fa fa-shopping-basket me-1 fa-2x'></i></h2>
    </div>
    {/* Rendering of a list key and  Props*/}
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
      <div className="total" >
        <span>Total Price </span>
        <span>{price} Kr</span>
      </div>
      </article>
      <br></br>
      <div className="cart nav-link" onClick={() => (setShow(false))}>
      <div className = "text-center" style = {{height:"50vh"}}>
      <Link to="/Checkout" className= "btn btn-success"> Process to Checkout</Link>
      </div>
      </div>
      
    </>
  );
};

Cart.propTypes = {
  price : PropTypes.number,
  amount: PropTypes.number
}

export default Cart;