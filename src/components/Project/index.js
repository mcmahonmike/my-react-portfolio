import React from "react";
import {Box, List, PageContent} from 'grommet'
import {Html5, Css3, Heroku, Js, Node, Mysql, GraphQl, Npm, Reactjs} from 'grommet-icons'

const Projects = () => {
    return (
        <Box gap="small" direction="row" margin='small' justify="center">
        <Html5 size="large" color="plain"/>
        <Css3 size="large" color="plain"/>
        <Heroku size="large" color="plain"/>
        <Js size="large" color="plain"/>
        <Node size="large" color="plain" />
        <Mysql size="large" color="plain" />
        <GraphQl size="large" color="plain"/>
        <Npm size="large" color="plain" />
        <Reactjs size="large" color="plain"/>

            {/* <List
            primaryKey="name"
            secondaryKey="icons"
            data={[
                { name: 'HTML5', icons: <Html5/> },
                { name: 'CSS3', icons: <Css3/> },
                { name: 'Heroku', icons: <Heroku/> },
                { name: 'JavaScript', icons: <Js /> },
            ]}
            /> */}
        </Box>
    );
};

export default Projects;

