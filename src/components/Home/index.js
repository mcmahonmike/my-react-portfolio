import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import About from '../About'
import { Box } from "grommet";





export const Home = () => {
    return (
      <Box gap="small" >
      <BrowserRouter>
      <Routes>
          <Route path='/my-react-portfolio' element={<About/>}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/resume' element={<Resume />}/>
      </Routes>
      </BrowserRouter>
  </Box>

          );
}

