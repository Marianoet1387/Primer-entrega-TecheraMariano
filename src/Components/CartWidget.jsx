import React from 'react'
import iconCarrito from '../img/iconCarrito.png'

const CartWidget = () => {
  return (
    <div className="CartWidget" >
      <img className="imgCarrito" src={iconCarrito} alt="Logo" />
      <p>5</p>
    </div>
  )
}

export default CartWidget