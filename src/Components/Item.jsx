import { Card, CardBody, CardFooter,Text, Heading, Image, Button, Stack, Divider, ButtonGroup } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const Item = ({name, description, amount, image, id }) => {
  return (
      <>
          <Card maxW='sm'>
              <CardBody>
                  <Image
                      src={image}
                      alt='image movil'
                      borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                      <Heading size='md'>{name}</Heading>
                      <Text>{description}</Text>
                      <Text color='blue.600' fontSize='2xl'>
                          $ {amount}
                      </Text>
                  </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                  <ButtonGroup spacing='2'>
                      <Link to={`/item/${id}`}>
                          <Button variant='solid' colorScheme='blue'>
                              Detail
                          </Button>
                      </Link>
                  </ButtonGroup>
              </CardFooter>
          </Card>
      </>
  )
}

export default Item