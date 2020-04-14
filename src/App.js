import React from "react";
import "./App.css";
import NavbarComponent from "./Components/NavbarComponent";

import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Stack from "./Components/Stack";
import Footer from "./Components/Footer";
import AOS from "aos";
import ExperienceTimeline from "./Components/ExperienceTimeline";
import Projets from "./Components/Projets";
import FormationTimeline from "./Components/FormationTimeline";

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
      <hr />
      <section id="projets" className="section">
        <Projets />
      </section>
      <hr />
      <section id="formation" className="section">
        <FormationTimeline />
      </section>
      <hr />
      <section id="stack" className="section">
        <Stack />
      </section>
      <hr />
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
