import React from 'react';
import { useGlobalContext } from '../context/context'

const CartBtn = () => {
    const { amount } = useGlobalContext()
    return (
        <>       
            <div class="button" >
              <a class="nav-link active " aria-current="page" href="/CartContainer"><i class='fa fa-inbox me-1 fa-2x'></i>
              {amount}</a>
            </div>


        </>
    )
}

export default CartBtn

