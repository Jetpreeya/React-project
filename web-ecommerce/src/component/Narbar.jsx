import React  from "react";
import Login from "./buttons/login";
import Register from "./buttons/register";
import "./styles/navbar.css";
import { Link } from "react-router-dom";
// import CartBtn from "./buttons/cartIcon";

/*I use Link to connect cart with route cart */
const Navbar = ({ setShow, size }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
      <div className="container-fluid">
      <Link to="/"><img src ={"https://cdn-icons.flaticon.com/png/512/2981/premium/2981313.png?token=exp=1648216059~hmac=b49f1530b0561c7bc4c006139546876e"} alt="Logo" height="70px"/>
      <i className='btn btn-outline fa  me-2 fa-x'>
      </i></Link>
        {/* <a className="navbar-brand" href="/"> Home</a> */}
        <button className="navbar-toggler" type="button">
        </button>
        <div className="collapse navbar-collapse ms-1 " >
          <div className ="btn btn-outline-warning ms-2">
          <Link to="/Products"><i className='fa fa-tag fa-2x'>Product</i></Link>
          </div>
          <div className ="btn btn-outline-warning ms-2">
          <Link to="/Fetch"><i className='fa fa-tags fa-2x'></i>Fetch Product</Link>
          </div>
          </div>
        <Register />
        <Login />
        {/* <CartBtn /> */}
        <div className="cart nav-link" onClick={() => (setShow(false))}>
          <Link to="/Cart"><i className="fa fa-shopping-cart me-2 fa-2x"></i></Link>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

