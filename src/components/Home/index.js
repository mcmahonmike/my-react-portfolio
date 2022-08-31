import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeHeader from '../Header';
import Footer from '../Footer';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import About from '../About'
import { Box } from "grommet";





export const Home = () => {
    return (
      <Box gap="small" >
      <BrowserRouter>
      <HomeHeader></HomeHeader>
      <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          {/* default page */}
          <Route path='/resume' element={<Resume />}/>
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
  
  </Box>

          );
}

