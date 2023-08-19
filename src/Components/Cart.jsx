import React from 'react'

const Cart = () => {
  
  const removeList = () => {//implementa la funcionalidad para dejar el carrito vacío
    cart.clear()
    localStorage.setItem("Cart", JSON.stringify(cart))
  }
  const deleteItem = (id) => { //implementa la funcionalidad para borrar un producto del carrito
    let indice = cart.findIndex((prod) => prod.id === (e.target.id))
    if (indice > -1) {
      cart.splice(indice, 1)
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