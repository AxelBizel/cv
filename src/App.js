import React from "react";
import "./App.css";
import NavbarComponent from "./Components/NavbarComponent";
import Experience from "./Components/Experience";
import Formation from "./Components/Formation";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Stack from "./Components/Stack";
import Footer from "./Components/Footer";
import AOS from "aos";
import ExperienceTimeline from "./Components/ExperienceTimeline";
import Projets from "./Components/Projets";

function App() {
  AOS.init();
  return (
    <div className="App">
      <section id="header">
        <Header />
      </section>

      <NavbarComponent />

      <section id="experience" className="section">
        <ExperienceTimeline />
      </section>
      <section id="projets" className="section">
        <Projets />
      </section>
      <section id="formation" className="section">
        <Formation />
      </section>
      <section id="stack" className="section">
        <Stack />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
