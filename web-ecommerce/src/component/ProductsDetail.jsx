import React from 'react'
import { useParams } from 'react-router-dom'
import DATA from '../Data';

const ProductsDetail = () =>{
    const proid = useParams();
    const proDetail = DATA.filter(x=>x.id == proid.id)
    const product = proDetail[0];
    console.log(product);

    const handleCart = (product) => {
        
    }

    return (
        <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src = {product.img} alt={product.title} height="480px" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{product.title}</h1>
                    <hr/>
                    <h2 className="my-4">{product.price}{" "} Kr</h2>
                    <p className = "lead">{product.desc}</p>
                    <button onClick={() =>handleCart(product)}className="btn btn-outline-primary my-5">Add to cart</button>
                </div>
            </div>

        </div>
        </>
    )

}

export default ProductsDetail