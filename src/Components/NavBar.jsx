import {Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import {ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import imgLogo from '../assets/iconLogo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="ContainerNavBar" >
            <Link to={"/"}>
                <img className="imgLogo" src={imgLogo} alt=" img Logo" />
            </Link>
            <Menu >
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Category
                </MenuButton>
                <MenuList >
                    <MenuItem >
                        <Link to={`/category/${'cat1'}`}>
                            Category 1
                        </Link>
                    </MenuItem>
                    <MenuItem >
                        <Link to={`/category/${"cat2"}`}>
                            Category 2
                        </Link>
                    </MenuItem>
                    <MenuItem >
                        <Link to={`/category/${"cat3"}`}>
                            Category 3
                        </Link>
                    </MenuItem>
                </MenuList>
            </Menu>
            <Link to={"/Cart"}>
                <CartWidget />
            </Link>
        </div>
    )
}

export default NavBar