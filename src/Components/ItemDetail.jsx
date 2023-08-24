import React, {useState, useContext } from 'react'
import { Card, Image, CardBody, CardFooter, Stack, Heading, Button, Text } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/ShoppingCartContext'

const ItemDetail = ({ products }) => {
  const [quantityAdded, setQuantityAdded] = useState("")
  const {addItem} = useContext(CartContext)
  
  const onAdd = (quantity) => {
    console.log(`${quantity}`)
    setQuantityAdded(quantity)
  }
  
  return (
    <div>
        <div key={products.id}>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'>
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src={products.image}
              alt={products.name}
            />
            <Stack>
              <CardBody>
                <Heading size='md'>{products.name}</Heading>
                <Text py='2'>
                  {products.description}
                </Text>
              </CardBody>
              <CardFooter>
              {
                !quantityAdded
                  ? <ItemCount initial={1} stock={products.stock} onAdd={onAdd} />
                  : <Link to={"/cart"}>
                    <Button variant='solid' colorScheme='blue' size='lg'>
                      Go to Cart
                    </Button>
                  </Link>
              }
                { /* <Link to={"/"}>
                    <Button variant='solid' colorScheme='blue' size='lg'>
                      Return
                    </Button>
                </Link>*/}
              </CardFooter>
            </Stack>
          </Card>
        </div>
    </div>
  )
}

export default React.memo(ItemDetail)