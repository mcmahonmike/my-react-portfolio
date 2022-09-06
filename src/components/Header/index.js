import React from "react";
import { NavLink } from "react-router-dom"
import { Box, Header, Menu, Button, Text} from 'grommet'
import { Cube } from "grommet-icons";
import '../../../src/index.css'






function HomeHeader(props) {

    
    const items = [
        { label: <NavLink to = '/my-react-portfolio'> <div onClick={props.onClick}> Home </div> </NavLink>},
        { label: <NavLink to = '/contact'> <div onClick={props.onClick}> Contact </div> </NavLink>},
        { label: <NavLink to = '/resume'> <div onClick={props.onClick}> Resume </div> </NavLink>}
      ];
    
    return (
        <Header background={{
            color: 'accent-1',
            opacity:'strong',
            sticky: 'scrollUp'
            }} pad="small" fill="horizontal">
        <Button>
        <Box
            direction="row"
            align="start"
            gap="small"
            pad={{ vertical: 'small' }}
            responsive={false}>
        <Cube
            color="brand"/>
        <Text 
            align='center'
            color='brand'
            ><h3>[HALOUMI]</h3>
        </Text>
        {/* <Nav></Nav> */}
        </Box>
        </Button>    
        <Menu 
            label="MENU" 
            items={items} 
            width="medium"
            color='brand' />
        </Header>
    )
}

export default HomeHeader;