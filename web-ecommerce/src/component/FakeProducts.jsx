import React, { useState, useEffect } from "react";

const FakeProducts = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false); /*If change from false to true the products will not show up*/
                setError()
                console.log(filter)
            }
            return () => {
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
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height="180px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                        <p className="card-text">{product.price} Kr</p>
                                        <a href="/" className="btn btn-success">Buy</a>
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
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-5">
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

export default FakeProducts