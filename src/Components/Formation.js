import React from "react";
import { Row, Col, Container, Media } from "reactstrap";
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
          <Media className="formation-item">
            <Media left href="#">
              <Media src={WCSlogo} alt="WCS logo" height="64px" className="logo-formation" />
            </Media>
            <Media body>
              <Media heading>
                <h3>Wild Code School - 2019-2020</h3>
              </Media>
              <p>Titre “Développeur web et web mobile” (RNCP, niveau III)</p>
            </Media>
          </Media>
        </Col>

        <Col sm="12" lg="6">
          <Media className="formation-item">
            <Media left href="#">
              <Media src={EJDG} alt="WCS logo" height="64px" className="logo-formation" />
            </Media>
            <Media body>
              <Media heading>
                <h3>École de Journalisme de Grenoble (2011-2013)</h3>
              </Media>
              <p>Master Pro, reconnu par la CPNEJ, spécialité web, mention B</p>
            </Media>
          </Media>
        </Col>
      </Row>

      <Row>
        <Col sm="12" lg="6">
          <Media className="formation-item">
            <Media left href="#">
              <Media src={UGA} alt="WCS logo" height="64px" className="logo-formation"/>
            </Media>
            <Media body>
              <Media heading>
                <h3>Master Histoire contemporaine (2005-2010)</h3>
              </Media>
              <p>Master de recherche en histoire contemporaine, mention TB.
                Université Savoie-Mont-Blanc / Université Grenoble-Alpes.</p>
            </Media>
          </Media>
        </Col>

        <Col sm="12" lg="6">
          <Media className="formation-item">
            <Media left href="#">
              <Media src={Bac} alt="WCS logo" height="64px" className="logo-formation" />
            </Media>
            <Media body>
              <Media heading>
                <h3>Bac ES spécialité Maths (2004)</h3>
              </Media>
              <p>Mention B (2 ans d’avance)</p>
            </Media>
          </Media>
        </Col>
      </Row>
    </Container>
  );
};

export default Formation;
