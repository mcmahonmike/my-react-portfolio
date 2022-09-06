import React from 'react'
import { Box, Page, Text, PageContent, Heading, Grid, Image, Paragraph } from 'grommet'

export const Nav = (props) => {
    return (
        <div>
        <Box gridArea="main" direction="column"  gap="small">
      </Box>
      <Box gridArea='side'>
      </Box>
      <Box gridArea="foot" margin='small'>
        </Box>
        </div>
    )
}
export const Define = () => {

    return (
      <Box height={{ min: 'medium' }} pad={{ vertical: 'xlarge' }}>
        <Grid columns={['1/2', '1/2']}>
          <Box height="medium">
            <Image
            //   src={image}
              fit="contain"
              alt="Abstract grid representing a data in a table format."
            />
          </Box>
          <Box alignSelf="center">
            <Heading level={2} size="large" margin="none">
             <h3>Welcome</h3> 
            </Heading>
            <Paragraph size="xlarge" margin={{ bottom: 'none' }}>
            This is Haloumi, built to showcase some of the work and services that are possible.
            </Paragraph>
            <Paragraph size="xlarge">
            My name is Mike McMahon, I am a web developer and I am the one who built and runs Haloumi and all of the content within it! If you continue below you can explore some of my past work and projects as well as a bit of what I know.
            </Paragraph>
          </Box>
        </Grid>
      </Box>
    );
  };
