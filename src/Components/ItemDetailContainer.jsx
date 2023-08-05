import React from 'react'
import ItemDetail from './ItemDetail'
import imgCel from '../assets/imgCel.jpg'

const ItemDetailContainer = () => {
  const products = [
    { id: 1, name: "Cell phone 1", description: "Description of the cell phone",category: "cat1", amount: 800, image: imgCel },
    { id: 2, name: "Cell phone 2", description: "Description of the cell phone",category: "cat1", amount: 900, image: imgCel },
    { id: 3, name: "Cell phone 3", description: "Description of the cell phone",category: "cat1", amount: 700, image: imgCel },
    { id: 4, name: "Cell phone 4", description: "Description of the cell phone",category: "cat2", amount: 650, image: imgCel },
    { id: 5, name: "Cell phone 5", description: "Description of the cell phone",category: "cat2", amount: 850, image: imgCel },
    { id: 6, name: "Cell phone 6", description: "Description of the cell phone",category: "cat3", amount: 1000, image: imgCel },
    { id: 7, name: "Cell phone 7", description: "Description of the cell phone",category: "cat3", amount: 750, image: imgCel }
  ]
  const getProducts = new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products)
      }, 2000)
    } else {
      reject(new Error("No hay productos"))
    }
  })
  getProducts
    .then((res) => {
    })
    .catch((error) => {
     console.log(error)
    })

  return (
    <div className='itemDetailContainer'>
      <ItemDetail products={products} />
    </div>
  )
}

export default ItemDetailContainer