import React, { useContext } from "react"
import { CartContext } from "../context/ShoppingCartContext"

const CartItem = ({item}) => {
    const {deletItem}= useContext(CartContext)
  return (
    <div className='d-felx justify-content-around aling-items-center '>
        <img src={item.image} alt={item.name} width={"140rem"}/>
        <p>{item.name}</p>
        <p>${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Sub total : ${item.quantity * item.price}</p>
        <button className='btn btn-dangerus' onClick={()=>deletItem(item.id)}>X</button>
    </div>
  )
}

export default CartItem 