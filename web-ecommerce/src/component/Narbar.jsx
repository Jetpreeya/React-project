import React from "react";
import Login from "./buttons/login";
import Register from "./buttons/register";
import SearchBar  from "./SearchForm"
import "./styles/navbar.css";
import { Link } from "react-router-dom";
/*I use Link to connect cart with route cart */

const Navbar = ({ setShow, size }) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">Home</a>
          <button className="navbar-toggler" type="button">
          </button>
          <div className="collapse navbar-collapse ms-1" >
              <a className="nav-link active " aria-current="page" href="/Products"><i className='fa fa-tag fa-2x'></i>
                    Product</a>
            </div>
            <SearchBar /> 
            <Register/>
            <Login/>
            <div className="cart nav-link" onClick={() => (setShow(false))}>
            <Link to="/Cart"><i className="fa fa-shopping-cart me-2 fa-2x"></i></Link>
          <span>{size}</span>
        </div>
        </div>
      </nav>
    );
}
export default Navbar;

