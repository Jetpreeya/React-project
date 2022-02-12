import React from "react";


const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/Products"><i class='fa fa-tag fa-2x'></i>
                    Product</a>
              </li>
            </ul>
            </div>
            

            <div className="buttons">
                <a href="http://localhost:3000/register" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-user me-1 fa-2x"></i> Register</a>
                <a href="http://localhost:3000/login" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-sign-in me-1 fa-2x"></i> Login</a>
                <a href="http://localhost:3000/cart" className="btn btn-outline-dark ms-2">
                <i class='fa fa-shopping-cart fa-2x'></i>Cart(0)</a>
            
          </div>
        </div>
      </nav>
    );
}

export default Navbar;