import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'

const ItemDetailContainer = () => {

  const [products, setProducts] = useState([])

  useEffect(() =>{  
    const db = getFirestore()
    const productsCollection = collection(db, "phones" )
    getDocs(productsCollection).then((snapshot)=>{
        const docs = snapshot.docs.map((doc) =>({ ...doc.data(), id: doc.id ,}))
        setProducts(docs)
    })
  }, [])

  return (
    <div className='itemDetailContainer'>
      <ItemDetail products={products} />
    </div>
  )
}

export default ItemDetailContainer