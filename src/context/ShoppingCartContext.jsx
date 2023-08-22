import { createContext, useState } from "react"
export const CartContext = createContext(null)

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [ count, setCount] = useState(1)
  return (
    <CartContext.Provider value={[cart, setCart, count, setCount]}>
      {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartProvider