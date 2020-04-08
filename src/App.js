import React from "react";
import "./App.css";
import NavbarComponent from "./Components/NavbarComponent";
import Experience from "./Components/Experience";
import Formation from "./Components/Formation";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Stack from "./Components/Stack";
import Footer from "./Components/Footer";
import AOS from "aos"

function App() {
  AOS.init();
  return (
    <div className="App">
      <div id="header">
        <Header />
      </div>
      <NavbarComponent />
      <div id="experience" className="section">
        <Experience />
      </div>
      <div id="formation" className="section">
        <Formation />
      </div>
      <div id="stack" className="section">
        <Stack />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
