import React from 'react'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer
      greeting="Bienvenidos a la Tienda Online"
      />
    </>
  )
}

export default App