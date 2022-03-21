import React from 'react';
import { useGlobalContext } from '../context/context'
import { Link } from "react-router-dom";

const CartBtn = () => {
    const { amount } = useGlobalContext()
    return (
        <>       
            <div className="button" >
            <div className ="btn btn-outline-warning ms-1">
            <Link to="/CartContainer"><i className='fa fa-inbox me-1 fa-2x'></i>
              {amount}</Link>
            </div>
            </div>


        </>
    )
}

export default CartBtn

