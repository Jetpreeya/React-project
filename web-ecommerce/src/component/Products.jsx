import React from 'react'
import DATA from '../Data'

const Product = () =>{
    const cardItem = (item) =>{
        return(
            <div class="card mb-4" style={{width: "16rem"}}>
  <img src={item.img} class="card-img-top" alt={item.title}/>
  <div class="card-body text-center">
    <h5 class="card-title">{item.title}</h5>
    <p className="lead">{item.price}Kr</p>
    <a href="#" class="btn btn-outline-primary">ADD</a>
  </div>
</div>

        );
    }
    return (
        <div>
            <div className="container py-5"></div>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Product</h1>
                    <hr></hr>

                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {DATA.map(cardItem)}
                </div>
            </div>

        </div>
    )
}

export default Product