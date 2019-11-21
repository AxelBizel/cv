import React from 'react';
import './App.css';
import NavbarComponent from './Components/NavbarComponent';
import Experience from './Components/Experience';
import Formation from './Components/Formation';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Stack from './Components/Stack';

function App() {
  return (
    <div className="App">
      <Header />
      <NavbarComponent/>
      <Experience />
      <Formation />
      <Stack/>
      <Contact/>
    </div>
  );
}

export default App;
