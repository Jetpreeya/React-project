import './App.css';
import React, { useState, useEffect } from "react";
import Navbar from './component/Narbar';
import Home from './component/Home';
import Product from './component/Products';
import ProductsDetail from './component/ProductsDetail';
import Footer from './component/Footer';
import { Routes, Route} from "react-router-dom";
import Cart from './component/cart';
import Checkout from './component/checkout';

/*Routing with React */
/*useState to show the products in the cart that click from buy button*/ 
function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
 
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };
 
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;
 
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
 
  useEffect(() => {
    console.log("cart change");
  }, [cart]);
 
  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Products" component={ <Product/>} />
        <Route exact path="/Products/:id" element={ <ProductsDetail/>} />
        <Route exact path="/Cart" component={ <Cart/>} />
        <Route exact path="/checkout" element={ <Checkout/>} />
      </Routes>
      {show ? (
        <Product handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    <Footer/>
    </React.Fragment>
 
  );
}
 
export default App;

