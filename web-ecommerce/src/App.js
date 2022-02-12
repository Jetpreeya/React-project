import './App.css';
import Navbar from './component/Narbar';
import Home from './component/Home';
import Product from './component/Products';
import ProductsDetail from './component/ProductsDetail';
import Footer from './component/Footer';
import { BrowserRouter as Switch,Route  } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar/>
     <Home />
    <Product />
    
    
    </>
  );
}

export default App;
