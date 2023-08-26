import React,{ useContext }  from 'react'
import { Button } from '@chakra-ui/react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/ShoppingCartContext'

const Cart = () => {
  const { cart, clear, total } = useContext(CartContext)
  return (
    <>
      {cart.length
        ? <div className='Cart-container'>
            {cart.map((item) => <CartItem key={item.id} item={item} />)}
            <div className='cart-finalamount'>
              <h1>Final amount: $USD {total()}</h1>
              <Button variant='solid' colorScheme='red' size='md' onClick={clear}>Clear cart</Button>
              <Button variant='solid' colorScheme='blue' size='md'> 
                <Link to={"/checkout"}>
                  Finalize purchase   
                </Link>
              </Button>
            </div>
          </div>
        : <div className='cart-finalamount'>
            <h3>Your cart is empty</h3>
            <Button variant='solid' colorScheme='blue' size='md' >
              <Link to={"/"}> 
                Go to buy
              </Link>
            </Button>
        </div>
      }
    </>
  )
}

export default Cart

