import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext()
  
  if (cart.length === 0) {
    return (
      <>
        <div className = "text-center">
          <h2>Your cart <i className="fa fa-shopping-basket fa-2x" aria-hidden="true"></i></h2>
          <h4 className='empty-cart'>is currently empty</h4>
          </div>
          </>   
    )
  }
  return (
    <>
    <div className = "text-center">
        <div className='center'>
        <h2>Your cart <i className="fa fa-shopping-basket fa-2x" aria-hidden="true"></i></h2>
        </div>
        <div className='container'>
        <div className='row justify-content-center'>
        <div className="col-5">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
        </div>
        </div>
        </div>
        <hr />
        <div className='cart-total'>
          <h4>
            Total <span>{total} Kr</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={clearCart}>
          clear cart
        </button>
      </div>
      </>

  )
}

export default CartContainer
