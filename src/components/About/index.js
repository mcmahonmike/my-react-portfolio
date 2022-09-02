
import React from "react";
import { Page, PageContent, Box, Heading, Text, Grid, } from 'grommet'


function About() {
    return (
      <Grid
      areas={[
        { name: 'nav', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [1, 0], end: [1, 0] },
        { name: 'side', start: [2, 0], end: [2, 0] },
        { name: 'foot', start: [0, 1], end: [2, 1] },
      ]}
      columns={['small', 'flex', 'medium']}
      rows={['medium', 'small']}
      gap='small'
    >
      <Box gridArea="main" direction="column"  gap="small">
      <Page kind="narrow">
      <PageContent background="background">
        <Text>
          <Heading
          ><h3>Welcome,</h3></Heading>
        </Text>
        <Text>This is Haloumi, built to showcase some of the work and services that are possible. My name is Mike McMahon, I am a web developer and I am the one who built and runs Haloumi and all of the content within it! If you continue below you can explore some of my past work and projects as well as a bit of what I know. </Text>
      </PageContent>
    </Page>
      </Box>
      <Box gridArea="foot" margin='small'>
        </Box>
      </Grid>
          );
}

export default About;