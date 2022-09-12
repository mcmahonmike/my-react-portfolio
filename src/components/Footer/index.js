import React, { useContext } from 'react';
import { Box, Button, Footer, ResponsiveContext, Text } from 'grommet';


export const FooterExample = () => {
  const size = useContext(ResponsiveContext);
  const year = new Date().getFullYear();

  const footerLinks = [
    { label: 'Github', link:'https://github.com/mcmahonmike' },
    { label: 'LinkedIn', link:'https://www.linkedin.com/in/michael-mcmahon-57637113b/' },
    { label: '', link:'' },
    { label: '', link:'' },
  ];
  return (
    <Footer
      background="brand"
      direction={!['xsmall', 'small'].includes(size) ? 'row' : 'column'}
      align={!['xsmall', 'small'].includes(size) ? 'center' : undefined}
      pad={{ horizontal: 'medium', vertical: 'small' }}
      fill="horizontal"
    >
      <Box
        direction={!['xsmall', 'small'].includes(size) ? 'row' : 'column'}
        align={!['xsmall', 'small'].includes(size) ? 'center' : undefined}
        gap="xsmall"
      >
        <Text size="small">
          &copy; {year} HALOUMI LLC
        </Text>
      </Box>
      <Box
        direction="row"
        align={!['xsmall', 'small'].includes(size) ? 'center' : undefined}
        gap="xsmall"
        wrap
      >
        {footerLinks.map(link => (
          <Button key={link.label} label={link.label} href={link.link} />
        ))}
      </Box>
    </Footer>
  );
};