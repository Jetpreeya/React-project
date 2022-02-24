import './App.css';
import Navbar from './component/Narbar';
import Home from './component/Home';
import Product from './component/Products';
import ProductsDetail from './component/ProductsDetail';
import Footer from './component/Footer';
import { Routes, Route} from "react-router-dom";
import CartContainer from './component/CartContainer';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Products" component={ <Product/>} />
        <Route exact path="/Products/:id" element={ <ProductsDetail/>} />
        <Route exact path="/Cart" element={ <CartContainer/>} />
      </Routes>
      <Product/>
    <Footer/>
    </>
  );
}

export default App;