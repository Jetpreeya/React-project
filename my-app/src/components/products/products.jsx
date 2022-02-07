import React from "react";
import {Grid} from '@material-ui/core';
import Product from './product/product';



//xs={12} mean full width on moblie devices
const Products = () =>{
    return(
<main>
    <Grid container justify = "center" spacing = {4}>
        {Product.map((product) => (
            <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
                <Products product ={product}/>
                </Grid> 
        ))}

    </Grid>
</main>
    );
}

export default Products;