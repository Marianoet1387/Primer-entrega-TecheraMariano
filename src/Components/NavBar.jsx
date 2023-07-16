import React from 'react'
import {Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import {ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
      <div className="ContainerNavBar" >
          <h1>Mobil</h1>
          <Menu className="Menu">
              <MenuButton className="MenuButton" as={Button} rightIcon={<ChevronDownIcon />}>
                  Celulares
              </MenuButton>
              <MenuList className="MenuList">
                  <MenuItem >Quienes somos</MenuItem>
                  <MenuItem >Modelos</MenuItem>
                  <MenuItem >Contacto</MenuItem>
              </MenuList>
          </Menu>
          <CartWidget />
      </div>
  )
}

export default NavBar