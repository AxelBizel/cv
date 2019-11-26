import React from "react";
import "../App.css";
import { Row, Col, Container } from "reactstrap";
import WCSlogo from "../Images/WCS.jpg";
import IDIX from "../Images/idix.png";
import LaCroix from "../Images/lacroix.png";
import Mind from "../Images/mind-logo.jpg";
import CarouselIDIX from "./CarouselIDIX";

const Experience = () => {
  return (
    <Container>
      <br></br>
      <h2 className="section-titles">Expérience</h2>
      <br></br>
      <Row>
        <Col sm="12" lg="6">
          <div className="experience-item">
            <div className="experience-header">
              <img
                src={WCSlogo}
                alt="WCS logo"
                height="100px"
                className="experience-logo"
              />
              <div className="experience-title">
                <h3>Développeur front-end</h3>
                <h4>
                  <strong>Wild Code School</strong>
                </h4>
                <p>
                  <em>2019-2020</em>
                </p>
              </div>
            </div>
            <div className="experience-details">
              <ul>
                <li>
                  Projet 1 : Site vitrine - HTML/CSS - tinyurl.com/larelWCS{" "}
                </li>
                <li>
                  Projet 2 : Jeu de Memory - Vanilla JS - tinyurl.com/memorySP
                </li>
                <li>Jeu mobile / PWA - React - tinyurl.com/strangler-things</li>
                <li>
                  Projet 4 : Site vitrine - React / Node.js - Piqueur de rue -
                  en cours
                </li>
                <li>Participation à deux Hackathons</li>
              </ul>
            </div>
          </div>
        </Col>

        <Col sm="12" lg="6">
          <div className="experience-item">
            <div className="experience-header">
              <img
                src={IDIX}
                alt="IDIX logo"
                height="100px"
                className="experience-logo"
              />
              <div className="experience-title">
                <h3>Datajournaliste / Infographiste</h3>
                <h4>
                  <strong>IDIX (ex-Agence Idé)</strong>
                </h4>
                <p>
                  <em>2015-2018</em>
                </p>
              </div>
            </div>
            <div className="experience-details">
              <ul>
                <li>
                  Conception et réalisation de datavisualisations pour la presse
                </li>
                <li>Traitement, analyse et nettoyage de bases de données</li>
                <li>Pilotage de projets web (dispositifs électoraux, etc…)</li>
              </ul>
              <CarouselIDIX />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <div className="experience-item">
            <div className="experience-header">
              <img
                src={Mind}
                alt="Mind Logo"
                height="100px"
                className="experience-logo"
              />
              <div className="experience-title">
                <h3>Journaliste économie numérique</h3>
                <h4>
                  <strong>Mind Média (ex&nbsp;-&nbsp;Satellinet)</strong>
                </h4>
                <p>
                  <em>2014-2015</em>
                </p>
              </div>
            </div>
            <div className="experience-details">
              <ul>
                <li>
                  Suivi du secteur économique des médias et de la communication
                  en ligne
                </li>
                <li>Rédaction d'aricles d'actualité et d'analyse</li>
                <li>PAO et gestion de la newsletter</li>
              </ul>
            </div>
          </div>
        </Col>

        <Col sm="12" lg="6">
          <div className="experience-item">
            <div className="experience-header">
              <img
                src={LaCroix}
                alt="La Croix Logo"
                height="100px"
                className="experience-logo"
              />
              <div className="experience-title">
                <h3>Journaliste Web</h3>
                <h4>
                  <strong>LaCroix.com (groupe&nbsp;Bayard)</strong>
                </h4>
                <p>
                  <em>2013-2014</em>
                </p>
              </div>
            </div>
            <div className="experience-details">
              <ul>
                <li>Rédaction d'articles d'actualité générale </li>
                <li>
                  Enrichissement multimédia et data des articles print en vue de
                  leur publication sur le site{" "}
                </li>
                <li>Frontpage edition et gestion du site en CMS</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
