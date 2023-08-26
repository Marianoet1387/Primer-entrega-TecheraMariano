import React, { useContext }from 'react'
import iconCarrito from '../assets/iconCarrito.png'
import { CartContext } from '../context/ShoppingCartContext'

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext)
  return (
    <div className="CartWidget" >
      <img className="imgCarrito" src={iconCarrito} title='Cart'  alt="Logo" />
      {cartQuantity() > 0 && <p>{cartQuantity()}</p>}
    </div >
  )
}

export default CartWidget