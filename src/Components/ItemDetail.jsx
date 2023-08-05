import React from 'react'
import { Card, Image, CardBody, CardFooter, Stack, Heading, Button, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'


const ItemDetail = ({ products }) => {
  const {id} = useParams()

  const filteredProducts = products.filter((prod)=> prod.id == id)
  
  return (
    <div>
      {filteredProducts.map((prod) => {
        return (
          <div key={prod.id}>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'>
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={prod.image}
                alt='Caffe Latte'
              />
              <Stack>
                <CardBody>
                  <Heading size='md'>{prod.name}</Heading>
                  <Text py='2'>
                    {prod.description}
                  </Text>
                  <Button variant='solid' colorScheme='blue' size='lg'>
                    Buy
                  </Button>
                </CardBody>
                <CardFooter>
                  <ItemCount />
                </CardFooter>
              </Stack>
            </Card>
          </div>
        )
      })
      }
    </div>
  )
}

export default ItemDetail