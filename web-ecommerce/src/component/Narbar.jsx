import React from "react";
import Login from "./buttons/login";
import Register from "./buttons/register";
import "./styles/navbar.css";
import { Link } from "react-router-dom";
import CartBtn from "./buttons/cartIcon";


/*I use Link to connect cart with route cart */

const Navbar = ({ setShow, size }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"> Home</a>
        <button className="navbar-toggler" type="button">
        </button>
        <div className="collapse navbar-collapse ms-1" >
          <a className="btn btn-outline-secondary ms-2  " aria-current="page" href="/Products"><i className='fa fa-tag fa-2x'></i>
            Product</a>
          <a className="btn btn-outline-warning ms-2" aria-current="page" href="/Fetch"><i className='fa fa-tags fa-2x'></i>
            Fetch Product</a>
        </div>
        <Register />
        <Login />
        <CartBtn />
        <div className="cart nav-link" onClick={() => (setShow(false))}>
          <Link to="/Cart"><i className="fa fa-shopping-cart me-2 fa-2x"></i></Link>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

