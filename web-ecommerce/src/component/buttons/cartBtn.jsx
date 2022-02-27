import React from 'react';
import { useGlobalContext } from '../context'

const CartBtn = () => {
    const { amount } = useGlobalContext()
    return (
        <>       
            <div class="button" >
              <a class="nav-link active " aria-current="page" href="/Cart"><i class='fa fa-shopping-cart me-1 fa-2x'></i>
              {amount}</a>
            </div>
                        
        </>
    )
}

export default CartBtn