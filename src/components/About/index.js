import image from '../../assets/images/mike-m.png'
import React from "react";
import {  Box, Heading, Grid, Image, Text, Paragraph, WorldMap, Stack } from 'grommet'
import Portfolio from '../Portfolio';
import { FooterExample } from '../Footer';

function About() {
    return (
      <>
      <Grid columns={['1/2', '1/2']}>
        <Box alignSelf="center" margin='medium' pad='small' border='all' elevation='medium'>
          <Heading level={2} size="large" margin="none" >
             <div>Welcome ,</div> 
          </Heading>
            <Paragraph size="large" margin={{ bottom: 'none' }}>
                This is Haloumi, built to showcase some of the work and services that are possible.
            </Paragraph>
        </Box>
      <Box height={{ min: 'medium' }} pad={{ vertical: 'large' }} border='between'>
        <Stack anchor='top-right'>
          
          <Box height="medium"
                animation='zoomIn'
                round='true'>
                  <Text>[HALOUMI]</Text>
        <WorldMap
            margin='small'
            color="neutral-1"
            continents={[
              {
                name: 'North America',
                color: 'light-5',
                onClick: (name) => {},
              },
            ]}
            onSelectPlace={(lat, lon) => {}}
            places={[
              {
                name: 'Milwaukee',
                location: [43.0389, 87.9065],
                color: 'accent-2',
                onClick: (name) => {},
              },
            ]}
            selectColor="accent-2"
          />
          </Box>
          </Stack>
      </Box>
      <Box alignSelf="center" margin='medium' pad='small' border='all' elevation='medium'>
      <Heading level={2} size="large" margin="small" >
             <div>Hello!</div> 
          </Heading>
          <Paragraph size="large">
                My name is Mike McMahon, I am a web developer and I am the one who built and runs Haloumi and all of the content within it! If you continue below you can explore some of my past work and projects as well as a bit of what I know.
            </Paragraph>
      </Box>
      <Box height={{ min: 'medium' }} pad={{ vertical: 'large' }}>
          <Box height="medium"
                animation='zoomIn'
                round='true'>
            <Image
              elevation='medium'
              src={image}
              fit="contain"
              alt="Michael McMahon standing in a field"
            />
          </Box>
      </Box>
      <Heading alignSelf='center' pad='small' margin='small'><h3>My Work</h3></Heading>
      <Portfolio />
      </Grid>
      <FooterExample/>
      </>
          );
}


export default About;