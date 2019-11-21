import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Container
} from "reactstrap";
import WCSlogo from "../Images/WCS.jpg";
import IDIX from "../Images/idix.png";
import LaCroix from "../Images/lacroix.png";
import Mind from "../Images/mind-logo.jpg";
import "../App.css";

const Experience = () => {
  return (
    <Container>
      <div>
        <br></br>
        <h2 className="section-titles">Expérience</h2>
        <br></br>

        <Row>
          <Col xs="12" sm="6" xl="3">
            <Card className="cards">
              <CardImg bottom src={WCSlogo} alt="Card image cap" />
              <CardBody className="text-left">
                <CardTitle>
                  {/* <img src={WCSlogo} alt="Wild Code School Logo" width="100px" /> */}
                  <h3>Développeur front-end</h3>
                </CardTitle>
                <CardSubtitle>
                  <h4>Wild Code School - 2019-2020</h4>
                </CardSubtitle>
                <CardText>
                  <ul>
                    <li>Projet 1 : site statique - tinyurl.com/lareligieuse</li>
                    <li>
                      Projet 2 : jeu en React.js - tinyurl.com/strangler-things
                    </li>
                    <li>Projet 3 : en cours</li>
                    <li>Participation à deux Hackathons</li>
                  </ul>
                </CardText>
                {/* 
              <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" xl="3">
            <Card className="cards">
              <CardImg top width="100%" src={IDIX} alt="Card image cap" />
              <CardBody className="text-left">
                <CardTitle>
                  {/* <img src={IDIX} alt="Idix Logo" height="100px" /> */}
                  <h3>Datajournaliste / Infographiste</h3>
                </CardTitle>
                <CardSubtitle>
                  <h4>Agence IDIX (ex-agence Idé) - 2015-2018</h4>
                </CardSubtitle>
                <CardText>
                  <ul>
                    <li>
                      Conception et réalisation de datavisualisations pour la
                      presse
                    </li>
                    <li>
                      Traitement, analyse et nettoyage de bases de données
                    </li>
                    <li>
                      Pilotage de projets web (dispositifs électoraux, etc…)
                    </li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" xl="3">
            <Card className="cards">
              <CardImg top width="100%" src={Mind} alt="Card image cap" />
              <CardBody className="text-left">
                <CardTitle>
                  {/* <img src={Mind} alt="Mind Logo" height="100px" /> */}
                  <h3>Journaliste économie numérique</h3>
                </CardTitle>
                <CardSubtitle>
                  <h4>Mind Média (ex-Satellinet) - 2014-2015</h4>
                </CardSubtitle>
                <CardText>
                  <ul>
                    <li>
                      Suivi du secteur économique des médias et de la
                      communication en ligne
                    </li>
                    <li>Rédaction d'aricles d'actualité et d'analyse</li>
                    <li>PAO et gestion de la newsletter</li>
                  </ul>
                </CardText>
                {/* 
              <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" xl="3">
            <Card className="cards">
              <CardImg top width="100%" src={LaCroix} alt="Card image cap" />
              <CardBody className="text-left">
                <CardTitle>
                  {/* <img src={LaCroix} alt="La Croix Logo" height="100px" /> */}
                  <h3>Journaliste Web</h3>
                </CardTitle>
                <CardSubtitle>
                  <h4>LaCroix.com (groupe Bayard) - 2013-2014</h4>
                </CardSubtitle>
                <CardText>
                  <ul>
                    <li>Rédaction d'articles d'actualité générale </li>
                    <li>
                      Enrichissement multimédia et data des articles print en
                      vue de leur publication sur le site{" "}
                    </li>
                    <li>Frontpage edition et gestion du site en CMS</li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Experience;
