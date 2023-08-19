import React from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)

  const removeList = () => {//implementa la funcionalidad para dejar el carrito vacío
    cart.clear()
    localStorage.setItem("Cart", JSON.stringify(cart))
}
const deleteItem = () => { //implementa la funcionalidad para borrar un producto del carrito
    let item = cart.findIndex((prod) => prod.id === (e.target.id))
    if (item > -1) {
        cart.splice(item, 1)
        localStorage.setItem("Cart", JSON.stringify(cart))
    }
}

  return (
    <div>
      Cart
    </div>
  )
}

export default Cart