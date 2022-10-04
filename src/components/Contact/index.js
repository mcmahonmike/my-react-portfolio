import { Box, PageHeader, Button } from "grommet";
import React from "react";

const Contact = () => {
  return (
    <Box alignSelf="center" margin='small' justify="center">
      <PageHeader 
          title="Email!"/>
          
    <form action="9d17f8c6d84219e88df3c4225f2d623c" method="POST">
    <Box margin='small' justify="center">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" required />
      
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" required />

        <label htmlFor="subject">Subject:</label>
        <input type="subject" name="_subject" required />

        <label htmlFor="message">Message:</label>
        <textarea name="message" required />
      
      <Button margin='xsmall' color='light-1' primary label="Send" type="submit" />
      </Box>
    </form>
    </Box>
  );
};

export default Contact;