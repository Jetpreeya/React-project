import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'
import {NavLink} from 'react-router-dom'

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your cart <i class='fa fa-shopping-basket me-1 fa-2x'></i></h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart '>
      {/* cart header */}
      <header>
        <h2>your cart <i class='fa fa-shopping-basket me-1 fa-2x'></i></h2>
      </header>
      {/* cart items */}
      <div className="container">
                
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
  
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h3>
            Total <span> {total} Kr</span>
          </h3>
        </div>
        <button className='btn clear-btn' onClick={clearCart}>
          clear cart
        </button><hr></hr>
         <NavLink to="/checkout" className= "btn btn-success ms-2">Process to Checkout</NavLink>
      </footer>
    </section>
  )
}

export default CartContainer