import React from 'react';
import { Box, Grommet, ResponsiveContext} from 'grommet'
import { Home } from './components/Home'


const theme = {
  global: {
    colors:{
      brand:'#F9E076',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};



const App = () => {
  return (
  <Grommet theme={theme} full>
  <ResponsiveContext.Consumer>
   {size => (
      <Box fill >
        < Home />
      </Box>
   )}
 </ResponsiveContext.Consumer>
</Grommet>
  )
}

export default App;
