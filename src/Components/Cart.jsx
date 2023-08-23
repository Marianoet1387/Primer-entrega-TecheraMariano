import React from 'react'
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
import { CartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react'

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)

  const clearCart = ()=>{
    setCart([])
  }
  const isInCart = (itemId)=>{
    return cart.some(p => p.id === itemId)
  }
  const removeItem = (itemId) =>{
    const cartUpdated = cart.filter(p =>p.id !== itemId)
    setCart(cartUpdated)
  }

  const sumaTotal = ()=>{
  console.log(cart)
}

  return (
    <>
      {/*cart.map((p) => {
        <div key={p.id}>
          <TableContainer>
            <Table variant='striped' colorScheme='teal'>
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Quantity</Th>
                  <Th>Remove</Th>
                  <Th isNumeric>Price</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Total</Th>
                  <Th isNumeric>{sumaTotal}</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </div>
      })*/


      }
    </>
  )
}

export default Cart

