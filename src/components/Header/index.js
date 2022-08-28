import React from "react";
import { Nav } from "../Nav";
import { Box, Header, PageHeader } from 'grommet'


function HomeHeader() {
    return (
        <Box>
        <Header>
         <PageHeader
            title="[HALOUMI]"
            subtitle="A place for building"
            />
        </Header>
        <Nav></Nav>
        </Box>
    )
}

export default HomeHeader;