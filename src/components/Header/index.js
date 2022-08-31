import React from "react";
import { NavLink } from "react-router-dom"
import { Box, Header, PageHeader, Menu, Button } from 'grommet'




function HomeHeader(props) {
    
    const items = [
        { label: <NavLink to = '/about'> <h3 onClick={props.onClick}> Home </h3> </NavLink>},
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
        <PageHeader
            title="[HALOUMI]"
            subtitle="A place for building"
            />
        {/* <Nav></Nav> */}
        </Box>
        </Button>    
        <Menu label="MENU" items={items} width="medium" />
        </Header>
    )
}

export default HomeHeader;