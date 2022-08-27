import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../Header';
import Footer from '../Footer';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';





export const Home = () => {
    return (
      <div>
      <BrowserRouter>
      <Header></Header>
      <Routes>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          {/* default page */}
          <Route path='/resume' element={<Resume />}/>
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
  
  </div>

          );
}

