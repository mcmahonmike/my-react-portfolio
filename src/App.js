import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Contact></Contact>
        <About></About>
      </main>
    </div>
  );
}

export default App;
