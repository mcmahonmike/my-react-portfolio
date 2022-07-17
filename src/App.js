import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Nav></Nav>
      <main>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
