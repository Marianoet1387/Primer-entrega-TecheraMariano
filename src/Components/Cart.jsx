import React,{ useContext }  from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/ShoppingCartContext'

const Cart = () => {
  const { cart, clear, total } = useContext(CartContext)

  return (
    <>
      {cart.length
        ? <div>
          {cart.map((item) => <CartItem key={item.id} item={item} />)}
          <p>Total a pagar: ${total()}</p>
          <div>
            <button onClick={clear}>Vaciar carrito</button>
            <Link to="/checkout">Termine compra </Link>
          </div>
        </div>
        : <div>
          <h3>Tu carrito esta vacio</h3>
          <Link to="/" /> Go to buy<Link />
        </div>

      }
    </>
  )
}

export default Cart

