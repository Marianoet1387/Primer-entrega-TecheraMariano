import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore} from 'firebase/firestore'

const ItemListContainer = () => {
  const {category} = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
  const db = getFirestore()
  const itemsCollection = collection(db, "phones")
  getDocs(itemsCollection).then((snapshot) => {
  const docs = snapshot.docs.map((doc) =>
   ({id: doc.id, ...doc.data()}))
    setProducts(docs)
  })
  },[] )
 
  const filteredProducts = products.filter((prod) => prod.category === category)
  
  return (
      <div className='itemListContainer'>
        { category ? <ItemList products={filteredProducts}/> : <ItemList products={products} />}
      </div>
  )
}

export default ItemListContainer