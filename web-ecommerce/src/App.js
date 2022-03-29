import './App.css';
import React, { useState, useEffect } from "react";
import Navbar from './component/Narbar';
import Home from './component/Home';
import Product from './component/Products';
import ProductsDetail from './component/ProductsDetail';
import Footer from './component/Footer';
import { Routes, Route } from "react-router-dom";
import Cart from './component/cart';
import Checkout from './component/checkout';
import FetchProducts from './component/FetchProducts'
// import CartContainer from './component/context/CartContainer';
import "./component/styles/SearchForm.css"
import { AuthProvider } from './component/buttons/Auth'
import Dashboard from './dashboard'
import Diliver from './component/Diliver'


/*Routing with React Router */
/*useState to show the products in the cart that click from buy button*/
function App() {
  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

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
    <div className="App">
      {
        loading ?
          <div className="text-center">
            <h2>Loading...</h2></div>
          :
          <React.Fragment>
            <Navbar setShow={setShow} size={cart.length} />
            <AuthProvider>
            <Routes>
              <Route path="/" element={<Home setShow={setShow}/>} />
              <Route path="/Products" component={<Product />} />
              <Route path="/Products/:id" element={<ProductsDetail />} />
              <Route path="/Fetch" element={<FetchProducts />} />
              <Route path="/Cart" component={<Cart />} />
              <Route path="/Checkout" element={<Checkout cart={cart}/>} />
              {/* <Route path="/CartContainer" element={<CartContainer cart={cart}/>} /> */}
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/deliver" element={<Diliver/>} />
            </Routes>
            </AuthProvider>
            {show ? (
              <Product handleClick={handleClick} />
            ) : (
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            )
            }
            <FetchProducts />
            <Footer/>
          </React.Fragment>
      }
    </div>
  );
}

export default App;