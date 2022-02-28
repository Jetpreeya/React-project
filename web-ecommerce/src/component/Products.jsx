import React from 'react'
import DATA from '../Data'
import Cards from "./card"; 
import "./product.css";

const Product = ({ handleClick }) => {
    return (
      <section>
        {DATA.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    );
  };
  
  export default Product;
