import { collection } from 'firebase/firestore'
import React, { useState } from 'react'

const Checkout = () => {
    const [user, setUser] = useState({})
    const [valiteEmail, setValiteEmail] = useState("")

    const datosComprador = (e) => {
    setUser({
        ...user,
        [e.target.name] : e.target.value
    })
    }
    
    const finaliarCompra =()=> {
        e.preventdefailt()
        if(!user.name && user.phone){
            alert("bien")
        }else{
            const ventas = collection(db, "orders")
        }
    }

  return (
    <div>
        <h2>terminar compra</h2>
        <h4>Rellenar datos</h4>
        <form onSubmit={finaliarCompra} >
            <div>
                <label>nombre</label>
                <input type="text" placeholder='n y a' name='name'/>
            </div>
            <div>
                <label>tel</label>
                <input type="number" placeholder='11111111' name='phone'/>
            </div>
            <div>
                <label>email</label>
                <input type="email" placeholder='aaa@gmail.com' name='mail' />
            </div>
            <div>
                <label>repita email</label>
                <input type="email" placeholder='aaa@gmail.com' name='mail' onClick={(e) => setValiteEmail(e.target.value)} />
            </div>
            <button type='submit' disabled={valiteEmail !== user.mail}>generar orden</button>
        </form>
    </div>
  )
}

export default Checkout