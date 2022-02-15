import React from "react";
import { NavLink } from "react-router-dom";
import './Home.css';

const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
        <div class="container-fluid">
        <a class="navbar-brand" href="/">Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-1" >
              <a class="nav-link active " aria-current="page" href="/Products"><i class='fa fa-tag fa-2x'></i>
                    Product</a>
            </div>
            
            <div className="buttons">
                <NavLink to ="/register" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-user me-1 fa-2x"></i> Register</NavLink>
                <NavLink to ="/login" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-sign-in me-1 fa-2x"></i> Login</NavLink>
                <NavLink to ="/cart" className="btn btn-outline-dark ms-2">
                <i class='fa fa-shopping-cart fa-2x'></i>Cart(0)</NavLink>
          </div>
        </div>
      </nav>
    );
}
export default Navbar;