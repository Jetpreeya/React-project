import React from 'react';
import { useGlobalContext } from '../context/context'

const CartBtn = () => {
    const { amount } = useGlobalContext()
    return (
        <>       
            <div className="button" >
              <a className="nav-link active " aria-current="page" href="/CartContainer"><i className='fa fa-inbox me-1 fa-2x'></i>
              {amount}</a>
            </div>


        </>
    )
}

export default CartBtn

