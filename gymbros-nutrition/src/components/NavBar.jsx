import React from 'react'
import CarWidgets from './CarWidgets'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>  
        <Flex>
            <Box p='4'>
                <h3>Brand</h3>
            </Box>
            <Spacer />
                <Menu>
                <MenuButton>
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
                </Menu>
            <Spacer/>
            <Box p='4'>
                <CarWidgets/>
            </Box>
        </Flex>
        
        
    </div>
  )
}

export default NavBar