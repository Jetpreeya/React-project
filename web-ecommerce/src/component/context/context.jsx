import React, { useContext, useReducer, useEffect,  } from 'react'
import Data from '../../Data'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: Data,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }
  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch()
    const cart = await response.json()
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  }
  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
