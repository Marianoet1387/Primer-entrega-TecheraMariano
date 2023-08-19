import React from 'react'
import ItemListContainer from './ItemListContainer'
import { useState, useEffect } from 'react'
import Loading from './Loading'


const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)

  },[])

  if (loading) {
   return <Loading /> 
  } 
  return (
    <div className='home'> 
      <ItemListContainer />
    </div>
  )
}

export default Home