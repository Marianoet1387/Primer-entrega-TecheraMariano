import React,{ useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import {collection, getDoc, doc,  getFirestore} from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const {id}= useParams()
  const [products, setProducts] = useState({})

  useEffect(() =>{  
    const db = getFirestore()
    const productsCollection = collection(db, "phones" )
    const referDoc = doc(productsCollection, id)
    getDoc(referDoc)
    .then((res)=>
        setProducts({ id: res.id , ...res.data()}))
  }, [])

  return (
    <div className='itemDetailContainer'>
      <ItemDetail products={products} />
    </div>
  )
}

export default ItemDetailContainer