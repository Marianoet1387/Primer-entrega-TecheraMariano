import React from 'react'
import iconCarrito from '../assets/iconCarrito.png'

import { CartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react'


const CartWidget = ({}) => {
  const { cart, setCart } = useContext(CartContext)
 
 
  return (
    <div className="CartWidget" >
      <img className="imgCarrito" src={iconCarrito} alt="Logo" />
      <p>{}</p>
    </div >
  )
}

export default CartWidget