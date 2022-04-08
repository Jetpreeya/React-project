import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const FetchProducts = ({ handleClick }) => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://course-api.com/react-useReducer-cart-project");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false); 
                /*If change from false to true the products will not show up*/
                setError()     
            }
            return () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                componentMounted = false;
            }          
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    };

    if (error) {
        return (
            <div className="App">
                <p>Error fetching data :(</p>
            </div>
        );
    }
    const ShowProducts = () => {
        return (
            <>
                {filter.map((item,id)  => {
                    return (
                        <>
                            <div className="col-md-3 mb-4" key={id}>
                                <div className="card h-100 text-center p-4" key={id}>
                                    <img src={item.img} className="card-img-top" alt={item.title} height="180px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{item.title.substring(0, 12)}</h5>
                                        <p className="card-text">{item.price} Kr</p>
                                        <div className="btn btn-success">
                                        <button Click={() => handleClick(item.id)}>Add to Cart</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        );
        
    };

    return (
        <div >
            <div className="container" >
                <div className="row">
                <div className = "text-center">
                        <hr />
                        <h1>Fetch Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center" >
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>

        </div>
    )
}

FetchProducts.propTypes = {
    id : PropTypes.number,
    price : PropTypes.number,
    title : PropTypes.string,
}

export default FetchProducts