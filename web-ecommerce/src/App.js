import './App.css';
import React, { useState, useEffect } from "react";
import Navbar from './component/Narbar';
import Home from './component/Home';
import Product from './component/Products';
import ProductsDetail from './component/ProductsDetail';
import Footer from './component/Footer';
import { Routes, Route, Link } from "react-router-dom";
import Cart from './component/cart';
import Checkout from './component/checkout';
import FetchProducts from './component/FetchProducts'
import CartContainer from './component/context/CartContainer';
import data from "./Data.json"
import "./component/styles/SearchForm.css"
import { AuthProvider } from './component/buttons/Auth'
import Dashboard from './dashboard'
import Diliver from './component/Diliver'

/*Routing with React */
/*useState to show the products in the cart that click from buy button*/
function App() {
  const [searchTerm, setSearchTerm] = useState("");
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
              <Route path="/" element={<Home />} />
              <Route path="/Products" component={<Product />} />
              <Route path="/Products/:id" element={<ProductsDetail />} />
              <Route path="/Fetch" element={<FetchProducts />} />
              <Route path="/Cart" component={<Cart />} />
              <Route path="/Checkout" element={<Checkout cart={cart}/>} />
              <Route path="/CartContainer" element={<CartContainer cart={cart}/>} />
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
            {show ? (
              <Product handleClick={handleClick} />
            ) : (
              <Checkout cart={cart} setCart={setCart}/>
            )
            }
            <FetchProducts />
            {/* Search function Here 
            and I don't know yet I will out search bar on the top or below */}
            {/* Search function Here*/}
            <div className="templateContainer">
              <a className="nav-link active " aria-current="page" href="/"><i className="btn-close float-end" aria-label="close"></i>
              </a>
              <div className="text-center">
                <div className="cart nav-link" onClick={() => (setShow(false))}>
                  <button className="btn btn-primary"> Search</button>
                  <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }} />
                  <Link to="/Cart"><i className="fa fa-shopping-cart me-2 fa-2x"></i></Link>
                  <span>{cart.length}</span>
                </div>

              </div>

              <div className="template_Container">
                {
                  data
                    .filter((val) => {
                      if (searchTerm === "") {
                        return val;
                      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                      }
                    })
                    .map((val) => {
                      return (
                        <div className="template" key={val.id}>
                          <img src={val.img} alt="" height="100px" />
                          <h3>{val.title}</h3>
                          <p className="price">{val.price} Kr</p>
                          <button onClick={() => handleClick(val)}>Add to Cart</button>
                        </div>
                      )
                    })
                }
              </div>
            </div>
            <Footer/>
          </React.Fragment>
      }
    </div>
  );
}

export default App;