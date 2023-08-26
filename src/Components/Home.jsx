import React, { useState, useEffect }  from 'react'
import ItemListContainer from './ItemListContainer'
import Loading from './Loading'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const timer = parseInt(Math.random() * 10000)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },timer)
  },[])

  if (loading) {
   return <Loading /> 
  } 
  return (
    <div className='home'> 
      <h1>Welcome to the online store </h1>
      <ItemListContainer />
    </div>
  )
}

export default Home