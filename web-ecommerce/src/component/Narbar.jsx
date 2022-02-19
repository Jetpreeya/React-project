import React from "react";
import Login from "./buttons/login";
import Register from "./buttons/register";
import CartBtn from "./buttons/cartBtn";
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
            <Register/>
            <Login/>
            <CartBtn/>
        </div>
      </nav>
    );
}
export default Navbar;