import React from 'react'
import { Card, Image, CardBody, CardFooter, Stack, Heading, Button, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { Link } from 'react-router-dom'

const ItemDetail = ({ products }) => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  
  useEffect(() => {
    const db = getFirestore()

    const oneItem = doc(db, "phones", `${id}`)

    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct(snapshot.data());
      } else {
        console.log("No such document", product)
      }
    })
  }, [])

  const filteredProducts = products.filter((prod) => prod.id == id)

  return (
    <div>
      {filteredProducts.map((prod) => (
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
                <Link to={"/cart"}>
                  <Button variant='solid' colorScheme='blue' size='lg'>
                    Comprar
                  </Button>
                </Link>
                <Link to={"/"}>
                  <Button variant='solid' colorScheme='blue' size='lg'>
                    Return
                  </Button>
                </Link>
              </CardBody>
              <CardFooter>
                <ItemCount
                  id={prod.id}
                  name={prod.name}
                  price={prod.price}
                />
              </CardFooter>
            </Stack>
          </Card>
        </div>
      )
      )
      }
    </div>
  )
}

export default React.memo(ItemDetail)