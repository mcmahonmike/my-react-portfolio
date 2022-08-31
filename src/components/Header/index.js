import React from "react";
// import { Nav } from "../Nav";
import { Box, Header, PageHeader, Menu, Button } from 'grommet'


function HomeHeader() {
    const items = [
        { label: 'Change username', onClick: () => {} },
        { label: 'Reset Password', onClick: () => {}  },
        { label: 'Logout', onClick: () => {}  }
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
        <Menu label="Account Information" items={items} width="medium" />
        </Header>
    )
}

export default HomeHeader;