import './App.css';
import Navbar from './component/Narbar';
import Home from './component/Home';
import Product from './component/Products';
import ProductsDetail from './component/ProductsDetail';
import Footer from './component/Footer';
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Products" element={ <Product/>} />
        <Route exact path="/Products/:id" element={ <ProductsDetail/>} />
      </Routes>
      <Product/>
    <Footer/>
    </>
  );
}

export default App;
