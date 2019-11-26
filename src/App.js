import React from "react";
import "./App.css";
import NavbarComponent from "./Components/NavbarComponent";
import Experience from "./Components/Experience";
import Formation from "./Components/Formation";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Stack from "./Components/Stack";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div id="header">
        <Header />
      </div>
      <NavbarComponent />
      <div id="experience">
        <Experience />
      </div>
      <div id="formation">
        <Formation />
      </div>
      <div id="stack">
        <Stack />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
