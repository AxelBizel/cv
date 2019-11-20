import React from 'react';
import './App.css';
import NavbarComponent from './Components/NavbarComponent';
import Experience from './Components/Experience';
import Formation from './Components/Formation';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <NavbarComponent/>
      <Experience />
      <Formation />
    </div>
  );
}

export default App;
