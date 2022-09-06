import image from '../../assets/images/mike-m.png'
import React from "react";
import { List, CardBody, CardHeader, CardFooter, Button, Box, Heading, Text, Grid, Image, Paragraph } from 'grommet'
import { Favorite, ShareOption } from 'grommet-icons';
import Portfolio from '../Portfolio';

const rows = ['small']
function About() {
    return (
      <>
      <Grid columns={['1/2', '1/2']}>
        <Box alignSelf="center" margin='medium'>
          <Heading level={2} size="large" margin="none">
             <div>Welcome</div> 
          </Heading>
            <Paragraph size="large" margin={{ bottom: 'none' }}>
                This is Haloumi, built to showcase some of the work and services that are possible.
            </Paragraph>
            <Paragraph size="large">
                My name is Mike McMahon, I am a web developer and I am the one who built and runs Haloumi and all of the content within it! If you continue below you can explore some of my past work and projects as well as a bit of what I know.
            </Paragraph>
        </Box>
      <Box height={{ min: 'medium' }} pad={{ vertical: 'large' }}>
          <Box height="medium"
                animation='zoomIn'
                round='true'>
            <Image
              src={image}
              fit="contain"
              alt="Michael McMahon standing in a field"
            />
          </Box>
      </Box>
      <Heading alignSelf='center' pad='small' margin='small'><h3>The Work</h3></Heading>
      <Portfolio />
      </Grid>
      

        
        <Box  margin='medium' border='bottom'>
          
        </Box>
        <Box margin='small'>
          
        </Box>
      </>
          );
}


export default About;