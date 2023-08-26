import React, { useContext } from "react"
import { CartContext } from "../context/ShoppingCartContext"
import { Button } from '@chakra-ui/react'
const CartItem = ({ item }) => {
  const { deleteItem } = useContext(CartContext)
  return (
    <div className='cartItem'>
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>$USD {item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Sub total : $USD {item.quantity * item.price}</p>
      <Button variant='solid' colorScheme='red' size='sm' onClick={() => deleteItem(item.id)}>X</Button>
    </div>
  )
}

export default CartItem 