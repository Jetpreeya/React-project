import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'


const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}
        <div className='center'>
        <h2>your bag</h2>
        </div>
        <div className='row'>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
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
    </section>
  )
}

export default CartContainer
