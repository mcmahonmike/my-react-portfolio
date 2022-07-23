import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Home from './components/Home';
import './App.css';



function App() {
  return (
    <div>
    <BrowserRouter>
    <Header></Header>
    <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        {/* default page */}
        <Route path='/' element={<Home />}/>
        <Route path='/resume' element={<Resume />}/>
    </Routes>
    </BrowserRouter>
    <Footer></Footer>

</div>
  );
}

export default App;
