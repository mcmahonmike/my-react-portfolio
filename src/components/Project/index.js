import React from "react";
import {Anchor, Box, Text, PageContent, Stack, Button} from 'grommet'
import {Html5, Css3, Heroku, Js, Node, Mysql, GraphQl, Npm, Reactjs} from 'grommet-icons'

const Projects = () => {
    return (
        <Box flex height={{ min: 'medium' }} pad={{ vertical: 'large' }} border='between'>
        <Box wrap gap="small" direction="row" margin='small' justify="center">
        <Html5 size="large" color="plain"/>
        <Css3 size="large" color="plain"/>
        <Heroku size="large" color="plain"/>
        <Js size="large" color="plain"/>
        <Node size="large" color="plain" />
        <Mysql size="large" color="plain" />
        <GraphQl size="large" color="plain"/>
        <Npm size="large" color="plain" />
        <Reactjs size="large" color="plain"/>
        </Box>
        <Box margin='medium' justify="center">
            <Button size="large" color='white' alignSelf="center" href="https://docs.google.com/document/d/1-dbCqZ2VCpJ-6ztDnvCG6XkqlTC2qRgiVuevMxBYDrs/edit?usp=sharing" label=<Text color='white'>MY RESUME</Text> />
        </Box>
        </Box>
    );
};

export default Projects;

