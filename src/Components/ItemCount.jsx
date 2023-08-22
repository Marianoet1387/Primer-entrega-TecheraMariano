import {useState} from 'react'
import { Button } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react'

const ItemCount = ({ name, id, price }) => {
    const { cart, setCart } = useContext(CartContext)
    const [ count, setCount] = useState(1)
    const [quantity, setQuantity] =useState(1)

    const addToCart = () => {
        setCart((currItems) => {
            const isItemFound = currItems.find((item) => item.id === id)
            console.log(cart)
            if (isItemFound) {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + count }
                    } else {
                        return item
                    }
                })
            } else {
                return [...currItems, { id, quantity: count, price, name }]
            }
        })
    }
 
    const addQty = () => {
        setCount(count + 1)
    }
    const subtractQty = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className='itemCount-container'>
            <div className='itemCount'>
                <Button onClick={(subtractQty)} colorScheme='blue'>-</Button>
                <h1>{count}</h1>
                <Button onClick={(addQty)} colorScheme='blue'>+</Button>
                <Button onClick={addToCart} colorScheme='blue'>
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}

export default ItemCount