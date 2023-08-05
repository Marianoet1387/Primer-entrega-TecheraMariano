import React from 'react'
import {useState} from 'react'
import { Button } from '@chakra-ui/react'

const ItemCount = () => {
    const [counter, setCounter] = useState(0)

    const add = () =>{
        setCounter(counter + 1)
    }
    const subtract = () =>{
        if (counter >  0 ){
            setCounter(counter - 1)
        }  
    }
    
  return (
    <div className='itemCount'>
        <Button  onClick={(subtract)} colorScheme='blue'>-</Button>
        <h1>{counter}</h1>
        <Button  onClick={(add)} colorScheme='blue'>+</Button>
    </div>
  ) 
}

export default ItemCount