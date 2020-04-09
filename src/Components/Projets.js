import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody
} from "reactstrap";
import StranglerThings from "../Images/stranglerthings.png";
import IDIX_US_Elections from "../Images/IDIX_US_Elections.jpg";
import PiqueurDeRue from "../Images/PiqueurDeRue.jpg";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Projets = () => {
  const projectsElements = [
    {
      name: "Piqueur de rue",
      date: "Déc. 2019 - Janvier 2020",
      img: `${PiqueurDeRue}`,
      links: [
        "https://piqueurderue.greenterroir.com/",
        "https://github.com/AxelBizel/piqueur-de-rue"
      ],
      linksDescriptions: ["Voir le site", "Voir sur Github"],
      description: "Refonte site pour l'agence de tatouage Piqueur de rue",
      details: [
        "Réalisation des wireframes et maquettes avec Adobe XD",
        "Développement front-end et intégration",
        "Création d'une base de données hébergeant tous les contenus dynamiques du site",
        "Mise en place d'une interface d'administration avec authentification JWT",
        "Stack : React - Node.js - MySQL - AdobeXD - AOS - JWT - Nodemailer"
      ]
    },
    {
      name: "Strangler Things",
      date: "Oct. - Nov 2019",
      img: `${StranglerThings}`,
      links: [
        "https://wildcodeschool.github.io/lyon-0919-react-p2-strangler-things/#/game"
      ],
      linksDescriptions: ["Voir sur Github"],
      description:
        "Jeu mobile sur le thême des Simpsons réalisé dans le cadre de la Wild Code School",
      details: [
        "Conception et scénarisation du jeu",
        "Réalisation des wireframes et maquette avec Adobe XD",
        "Développement Javascript avec React"
      ]
    },
    {
      name: "Élections américaines de 2016",
      date: "Oct. - Nov 2016",
      img: `${IDIX_US_Elections}`,
      links: [
        "https://static.idix.fr/elections/us/pr2016/us-resultats/index.html",
        "http://www.bfmtv.com/international/resultats-presidentielle-americaine-1055823.html"
      ],
      linksDescriptions: ["Voir le widget", "Voir sur BFMTV.com"],
      description:
        "Cartogramme interactif représentant les résultats de l'élection pour le compte de plusieurs médias en ligne dont BFMTV.com",
      details: [
        "Conception et scénarisation de l'infographie interactive",
        "Conception d'un back-office permettant d'injecter les résultats",
        "Saisie en temps réel des résultats le soir de l'élection"
      ]
    }
  ];

  return (
    <Container>
      <br></br>
      <div data-aos="zoom-in">
        <h2 className="section-titles">Projets</h2>
      </div>
      <br></br>
      <div className="stack-wrapper">
        <Row className="justify-content-center">
          {projectsElements.map((e, i) => (
            <Col
              xs="12"
              md="6"
              className="my-2"
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-delay={i * 100}
            >
              <Card
                body
                inverse
                style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
              >
                <a href={e.links[0]} target="_blank" rel="noopener noreferrer">
                  <CardImg top width="100%" src={e.img} alt={e.name} />
                </a>
                <CardBody className="p-0">
                  <CardTitle
                    style={{
                      textAlign: "center"
                    }}
                  >
                    <h5
                      style={{
                        fontFamily: "Lato",
                        textTransform: "uppercase",
                        marginTop: "2vh"
                      }}
                    >
                      {e.name}
                    </h5>
                    <p>
                      <em>{e.date}</em>
                    </p>
                  </CardTitle>
                  <CardText>
                    <p>
                      <em>{e.description}</em>
                    </p>
                    <ul>
                      {e.details.map(d => (
                        <li>{d}</li>
                      ))}
                    </ul>
                    <p>
                      {e.links.map((l, i) => (
                        <>
                          <a
                            href={l}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontFamily: "Lato",
                              marginTop: "2vh auto",
                              textAlign:"center"
                            }}
                          >
                            <FontAwesomeIcon icon={faLink} />
                            &nbsp; &nbsp; &nbsp;{e.linksDescriptions[i]}
                          </a>{" "}
                          <br />{" "}
                        </>
                      ))}
                    </p>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Projets;
