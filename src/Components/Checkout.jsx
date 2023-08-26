import { addDoc, collection, serverTimestamp, getFirestore } from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import { Button } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [user, setUser] = useState({})
    const [valiteEmail, setValiteEmail] = useState("")
    const [orderId ,setOrderId] = useState("")
    const { cart, clear, total } = useContext(CartContext)

    const datosComprador = (e) => {
    setUser({
        ...user,
        [e.target.name] : e.target.value
    })
    }
     
    const finalizePurchase =(e)=> {
        e.preventDefault()
        if(!user.name && !user.phone){
        }else{
            let order= {
                user,
                item:cart,
                total:total(),
                date:serverTimestamp()
            }
            const db = getFirestore()
            const sales = collection(db, "orders")
            addDoc(sales, order)
            .then((res)=>{setOrderId(res.id)
            clear()
            })
            .catch((error)=> console.log(error))
        }
    }

  return (
    <div className='form-container'>
          {orderId !== ""
              ? <div className='form-container'>
                  <h1>Congratulations you have finished the purchase</h1>
                  <h2>Your registration number is: {orderId}</h2>
                  <Button  variant='solid' colorScheme='blue' size='md' >
                    <Link to={"/"}> 
                       Go to buy
                    </Link>
                  </Button>
              </div>
              : <div className='form-container'>
                  <h2>Finalize purchase</h2>
                  <h4>Fill data</h4>
                  <form onSubmit={finalizePurchase} >
                      <div>
                          <label>Name </label>
                          <input type="text" onChange={datosComprador} placeholder='Name and surname' name='name' />
                      </div>
                      <div>
                          <label>Tel</label>
                          <input type="number" onChange={datosComprador} placeholder='11111111' name='phone' />
                      </div>
                      <div>
                          <label>Email</label>
                          <input type="email" onChange={datosComprador} placeholder='ejemplo@phone.com' name='mail' />
                      </div>
                      <div>
                          <label>Repeat email</label>
                          <input type="email" placeholder='ejemplo@phone.com' name='mail' onClick={(e) => setValiteEmail(e.target.value)} />
                      </div>
                      <div>
                        <Button  variant='solid' colorScheme='blue' size='md' type='submit' disabled={valiteEmail !== user.mail}>Generate order</Button>
                      </div>
                  </form>
              </div>
          }
    </div>
  )
}

export default Checkout

