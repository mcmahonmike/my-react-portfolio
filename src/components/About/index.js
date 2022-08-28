
import React from "react";
import { Page, PageContent, Paragraph, Box, Heading} from 'grommet'


function About() {
    return (
      <Box direction="row"  gap="small">
      <Page kind="narrow">
      <PageContent background="light-1">
        <Paragraph>
          <Heading>Hello,</Heading>
        </Paragraph>
        <Heading>My name is Michael McMahon and I am a web developer.</Heading>
      </PageContent>
    </Page>
    </Box>
          );
}

export default About;