import React from "react";
import { NavLink } from "react-router-dom"
import { Box, Header, Menu, Button, Text} from 'grommet'
import { Cube } from "grommet-icons";
import '../../../src/index.css'




function HomeHeader(props) {
    
    const items = [
        { label: <NavLink to = '/my-react-portfolio'> <h3 onClick={props.onClick}> Home </h3> </NavLink>},
        { label: <NavLink to = '/contact'> <h3 onClick={props.onClick}> Contact </h3> </NavLink>},
        { label: <NavLink to = '/resume'> <h3 onClick={props.onClick}> Resume </h3> </NavLink>}
      ];
    
    return (
        <Header background="background-contrast" pad="small" fill="horizontal">
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