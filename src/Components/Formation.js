import React from "react";
import { Row, Col, Container } from "reactstrap";
import WCSlogo from "../Images/WCS.jpg";
import EJDG from "../Images/ejdg-logo.jpg";
import UGA from "../Images/UGA.jpg";
import Bac from "../Images/bac-es.png";

const Formation = () => {
  return (
    <Container>
      <h2 className="section-titles">Formation</h2>
      <Row>
        <Col sm="12" lg="6">
          <div className="formation-item">
            <div className="formation-header">
              <img
                src={WCSlogo}
                alt="WCS logo"
                height="100px"
                className="formation-logo"
              />
              <div className="formation-title">
                <h3>Wild Code School </h3>
                <h5>
                  <em>(2019-2020)</em>
                </h5>
              </div>
              <div className="formation-details">
                <p>
                  Titre “Développeur web et web mobile” (RNCP, niveau III)
                  <br /> Parcours React - Node.js
                </p>
              </div>
            </div>
          </div>
        </Col>

        <Col sm="12" lg="6">
          <div className="formation-item">
            <div className="formation-header">
              <img
                src={EJDG}
                alt="WCS logo"
                height="100px"
                className="formation-logo"
              />
              <div className="formation-title">
                <h3>École de Journalisme de Grenoble</h3>
                <h5>
                  <em>(2011-2013)</em>
                </h5>
              </div>
              <div className="formation-details">
                <p>
                  Master Pro, reconnu par la CPNEJ, spécialité web, mention B
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm="12" lg="6">
          <div className="formation-item">
            <div className="formation-header">
              <img
                src={UGA}
                alt="UGA logo"
                height="100px"
                className="formation-logo"
              />
              <div className="formation-title">
                <h3>Master Histoire</h3>
                <h5>
                  <em>(2005-2010)</em>
                </h5>
              </div>
              <div className="formation-details">
                <p>Master de recherche en histoire contemporaine, mention TB</p>
              </div>
            </div>
          </div>
        </Col>

        <Col sm="12" lg="6">
          <div className="formation-item">
            <div className="formation-header">
              <img
                src={Bac}
                alt="Bac logo"
                height="100px"
                className="formation-logo"
              />
              <div className="formation-title">
                <h3>Bac ES</h3>
                <h5>
                  <em>(2004)</em>
                </h5>
              </div>
              <div className="formation-details">
                <p>
                  Spécialité Maths. 
                  Mention B, 2 ans d’avance.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Formation;
