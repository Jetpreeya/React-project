import React from "react";
import Login from "./buttons/login";
import Register from "./buttons/register";
import "./styles/navbar.css";
import { Link } from "react-router-dom";
/*I use Link to connect cart with route cart */

const Navbar = ({ setShow, size }) => {
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

