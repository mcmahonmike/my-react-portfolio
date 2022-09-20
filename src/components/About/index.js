import image from '../../assets/images/mike-m.png'
import React from "react";
import {  Box, Heading, Grid, Text, Paragraph, WorldMap, Stack, Avatar } from 'grommet'
import Portfolio from '../Portfolio';
import { FooterExample } from '../Footer';


function About() {
    return (
      <>
      <Grid>
      <Grid columns={['1/2', '1/2']}>
        <Box border='bottom' alignSelf="center" margin='medium' pad='medium'>
          <Heading level={2} size="large" margin="none" >
             <div>Welcome,</div> 
          </Heading>
            <Paragraph size="large" margin={{ bottom: 'none' }}>
                This is Haloumi, a web development website built to showcase my projects as well as my experience with programming.
            </Paragraph>
        </Box>
      <Box height={{ min: 'medium' }} pad={{ vertical: 'large' }} border='between'>
        <Stack anchor='center'>
          
          <Box height="medium"
                animation='zoomIn'
                round='true'>
                  <Text>[HALOUMI]</Text>
        <WorldMap
            margin='small'
            color="light-5"
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
                location: [43.0389, -87.9065],
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
          <Paragraph alignSelf='center' size="large" margin={{ bottom: 'none' }}>
                My name is Mike McMahon, and I am the developer and operator of Haloumi. Continue below to explore some of the applications I've developed.
            </Paragraph>
      </Box>
      <Box height={{ min: 'medium' }} pad={{ vertical: 'large' }}>
          <Box 
                pad='none'
                height="medium"
                animation='zoomIn'
                round='strong'
                alignSelf='center'
                >
            <Avatar 
              src={image}
              size='5xl'
              alt="Michael McMahon standing in a field"
            />
          </Box>
      </Box>
      </Grid>
         
            <Portfolio />
          
      </Grid>
      <FooterExample/>
      </>
          );
}


export default About;