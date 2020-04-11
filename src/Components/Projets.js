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

import SouthParkMemory from "../Images/SouthParkMemory.jpg";
import StranglerThings from "../Images/stranglerthings.jpg";
import Kiddo from "../Images/Kiddo.jpg";
import IDIX_US_Elections from "../Images/IDIX_US_Elections.jpg";
import IDIX_Galaxie from "../Images/IDIX_Galaxie.jpg";
import IDIX_Nobel from "../Images/IDIX_Nobel.jpg";
import AmeriqueRing from "../Images/AmeriqueRing.jpg";
import Cerebrolese from "../Images/Cerebrolese.jpg";
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
      description: "Refonte du site de l'agence de tatouage Piqueur de rue",
      details: [
        "Réalisation des wireframes et maquettes",
        "Développement front-end et intégration",
        "Mise en place d'une base de données",
        "Création d'une interface admin avec authentification JWT",
        "Stack : React - Node.js - MySQL - JWT - Nodemailer - HTML5 - CSS3 - Adobe XD"
      ]
    },
    {
      name: "Kiddo",
      date: "Déc 2019",
      img: `${Kiddo}`,
      links: [
        "https://hackathon-noel.netlify.com/#/",
        "https://github.com/AxelBizel/kiddo"
      ],
      linksDescriptions: ["Voir le site", "Voir sur Github"],
      description:
        "Plateforme collaborative fictive de vente d'ateliers pour enfants réalisée dans le cadre d'un Hackathon de 48h",
      details: [
        "Conception et scénarisation de la plateforme",
        "Réalisation des wireframes et maquette",
        "Développement et intégration web",
        "Stack : React - Redux - Bootstrap - Google Maps API - HTML5 - CSS3 - Adobe XD"
      ]
    },
    {
      name: "Strangler Things",
      date: "Oct. - Nov 2019",
      img: `${StranglerThings}`,
      links: [
        "https://wildcodeschool.github.io/lyon-0919-react-p2-strangler-things/#/game",
        "https://github.com/AxelBizel/simpsons-strangler-things"
      ],
      linksDescriptions: ["Jouer (sur mobile uniquement)", "Voir sur Github"],
      description:
        "Jeu mobile sur le thême des Simpsons réalisé dans le cadre de la Wild Code School",
      details: [
        "Conception et scénarisation du jeu",
        "Réalisation des wireframes et maquette",
        "Développement et intégration web",
        "Stack : React - Vanilla JS - HTML5 - CSS3 - Adobe XD - Adobe Photoshop"
      ]
    },
    {
      name: "South Park Memory",
      date: "Oct. 2019",
      img: `${SouthParkMemory}`,
      links: [
        "https://axelbizel.github.io/memory-south-park/",
        "https://github.com/AxelBizel/memory-south-park"
      ],
      linksDescriptions: ["Jouer", "Voir sur Github"],
      description:
        "Jeu de Memory sur le thême de South Park réalisé dans le cadre de la Wild Code School",
      details: [
        "Conception et scénarisation du jeu",
        "Réalisation des wireframes et maquette",
        "Développement et intégration web",
        "Stack : Vanilla JS - HTML5 - CSS3 - MockFlow - Adobe Photoshop"
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
        "Cartogramme interactif représentant les résultats de l'élection ",
      details: [
        "Conception et scénarisation de l'infographie interactive",
        "Conception d'un back-office permettant d'injecter les résultats",
        "Saisie en temps réel des résultats le soir de l'élection"
      ]
    },
    {
      name: "La galaxie djihadiste",
      date: "Nov. 2016",
      img: `${IDIX_Galaxie}`,
      links: [
        "https://static.idix.fr/infographie/galaxie-djihadiste/index.html",
        "https://www.marianne.net/societe/infographie-six-mois-apres-les-attentats-du-vendredi-13-novembre-ou-en-est-lenquete"
      ],
      linksDescriptions: ["Voir le widget", "Voir sur Marianne.net"],
      description:
        "Infographie interactive représentant les connexions entre les protagonistes des attentats de Paris et de Bruxelles",
      details: [
        "Conception et scénarisation de l'infographie interactive",
        "Collecte et traitement des données, recherche documentaire",
        "Réalisation de l'infographie statique avec Adobe Illustrator",
        "Animation avec Adobe Muse"
      ]
    },
    {
      name: "Prix Nobel 2015",
      date: "Déc. 2015",
      img: `${IDIX_Nobel}`,
      links: ["https://static.idix.fr/widget/prix-nobel/"],
      linksDescriptions: ["Voir le widget"],
      description:
        "Infographie interactive représentant la répartition des prix Nobel par pays et par disciplines",
      details: [
        "Conception et scénarisation de l'infographie interactive",
        "Collecte et traitement des données en vue de leur utilisation dans D3.js"
      ]
    },

    {
      name: "Cérébrolésé :  ni tout à fait le même, ni tout à fait un autre",
      date: "Jan. - Avril 2013",
      img: `${Cerebrolese}`,
      links: [
        "https://www.la-croix.com/Solidarite/Actualite/Un-hobby-club-pour-les-handicapes-invisibles-2013-05-14-959784"
      ],
      linksDescriptions: ["Voir sur LaCroix.com"],
      description:
        "Webdocumentaire sur les victimes de lésions cérébrales, lauréat du Prix Santé et Citoyenneté 2013",
      details: [
        "Conception et scénarisation",
        "Reportage vidéo et montage avec Abode Premiere",
        "Rédaction et production de contenus multimédia",
        "Intégration avec la plateforme Djehouti"
      ]
    },
    {
      name: "L'Amérique sur le ring",
      date: "Oct. - Nov. 2012",
      img: `${AmeriqueRing}`,
      links: [
        "https://www.lesinrocks.com/2012/10/27/web/actualite/amerique-sur-le-ring-webdoc-presidentielle-us/"
      ],
      linksDescriptions: ["Voir sur LesInrocks.com"],
      description:
        "Webdocumentaire pédagogique sur les élections américaines de 2012, réalisé dans le cadre de l'École de journalisme de Grenoble",
      details: [
        "Conception et scénarisation",
        "Rédaction et production de contenus multimédia",
        "Intégration avec la plateforme Djehouti"
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

      <Row className="justify-content-center">
        {projectsElements.map((e, i) => (
          <Col
            xs="12"
            md="6"
            xl="4"
            className="my-2"
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-delay={(i % 3) * 100}
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
                            textAlign: "center"
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
    </Container>
  );
};

export default Projets;
