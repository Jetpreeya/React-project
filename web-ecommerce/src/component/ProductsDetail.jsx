import { useParams } from 'react-router'
import DATA from '../Data';

const ProductsDetail = ({ item, handleClick }) => {
    const proid = useParams();
    const proDetail = DATA.filter(x => x.id == proid.id)
    const product = proDetail[0];
    console.log(product);
    /*UseState Hook*/
    
    return (
        <>
            <div className="container my-5 py-3">
                <a class="nav-link active " aria-current="page" href="/Products"><button className="btn-close float-end" aria-label="close"></button></a>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.img} alt={product.title} height="380px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">

                        <h1 className="display-5 fw-bold">{product.title}</h1>
                        <hr />
                        <h2 className="my-4">{product.price}{" "} Kr</h2>
                        <p className="lead">{product.desc}</p>
                        {/* Using Dom event(button onClick) */}
                        <button className='btn btn-outline-primary my-5' onClick={() => handleClick(item)}>Add to Cart</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsDetail