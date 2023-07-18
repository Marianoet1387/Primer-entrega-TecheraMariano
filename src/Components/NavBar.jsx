import React from 'react'
import {Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import {ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import imgLogo from '../img/iconLogo.png'

const NavBar = () => {
  return (
      <div className="ContainerNavBar" >
          <img className="imgLogo" src={imgLogo} alt=" img Logo" />
          <Menu >
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Celulares
              </MenuButton>
              <MenuList >
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