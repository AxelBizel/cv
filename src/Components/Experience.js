import React from "react";
import "../App.css";
import { Row, Col, Container } from "reactstrap";
import WCSlogo from "../Images/WCS.jpg";
import IDIX from "../Images/idix.png";
import LaCroix from "../Images/lacroix.png";
import Mind from "../Images/mind-logo.jpg";
import CarouselIDIX from "./CarouselIDIX";
import CarouselWCS from "./CarouselWCS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

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
                <h3>Développeur full-stack junior</h3>
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
                  Projet 1 : Site vitrine fictif - HTML/CSS -
                  <a
                    href="https://tinyurl.com/larelWCS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLink} />
                    &nbsp;La Religieuse
                  </a>
                </li>
                <li>
                  Projet 2 : Jeu de Memory - Vanilla JS -{" "}
                  <a
                    href="https://tinyurl.com/memorySP"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLink} />
                    &nbsp;South Park Memory
                  </a>
                </li>
                <li>
                  Projet 3 : Jeu mobile / PWA - React -{" "}
                  <a
                    href="https://tinyurl.com/strangler-things"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLink} />
                    &nbsp;Strangler Things
                  </a>
                </li>
                <li>
                  Projet 4 : Site vitrine et back-office dédié - React / Node.js
                  - Piqueur de rue - en cours
                </li>
                <li>Participation à deux Hackathons</li>
              </ul>
              <CarouselWCS />
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
                  Conception et réalisation d'infographies et datavisualisations
                  pour la presse -
                  <a
                    href="https://static.idix.fr/widget/prix-nobel/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faLink} />
                    &nbsp;Prix Nobel 2015 -
                  </a>
                  <a
                    href="https://static.idix.fr/infographie/galaxie-djihadiste/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faLink} />
                    &nbsp;La galaxie djihadiste
                  </a>
                </li>
                <li>
                  Pilotage de projets web (dispositifs électoraux, événements
                  spéciaux, etc…) -{" "}
                  <a
                    href="https://static.idix.fr/elections/us/pr2016/us-resultats/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faLink} />
                    &nbsp;Élection américaine 2016
                  </a>
                </li>
                <li>Utilisation, analyse et nettoyage de bases de données</li>
                <li>Suivi de commandes clients</li>
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
