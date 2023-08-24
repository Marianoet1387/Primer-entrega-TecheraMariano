import {useState} from 'react'
import { Button } from '@chakra-ui/react'

const ItemCount = ({ stock, onAdd, initial }) => {
    const [ count, setCount] = useState(initial)

    const addQty = () => {
        if (count < stock ){
            setCount(count + 1) 
        }
    }
    const subtractQty = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className='itemCount-container'>
            <div className='itemCount'>
                <Button onClick={subtractQty} colorScheme='blue'>-</Button>
                <h1>{count}</h1>
                <Button onClick={addQty} colorScheme='blue'>+</Button>
                <Button disabled ={count ===0} onClick={()=>onAdd(count)} colorScheme='blue'>
                     Buy
                </Button>
            </div>
        </div>
    )
}

export default ItemCount