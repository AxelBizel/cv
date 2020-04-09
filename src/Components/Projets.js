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
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Projets = () => {
  const projectsElements = [
    {
      name: "Strangler Things",
      img: `${StranglerThings}`,
      link:
        "https://wildcodeschool.github.io/lyon-0919-react-p2-strangler-things/#/game",
      description:
        "Jeu mobile réalisé avec React dans le cadre de la Wild Code School",
      linkDescription: "Voir sur Github"
    },
    {
      name: "Strangler Things",
      img: `${StranglerThings}`,
      link:
        "https://wildcodeschool.github.io/lyon-0919-react-p2-strangler-things/#/game",
      description:
        "Jeu mobile réalisé avec React dans le cadre de la Wild Code School"
    },
    {
      name: "Strangler Things",
      img: `${StranglerThings}`,
      link:
        "https://wildcodeschool.github.io/lyon-0919-react-p2-strangler-things/#/game",
      description:
        "Jeu mobile réalisé avec React dans le cadre de la Wild Code School"
    },
    {
      name: "Strangler Things",
      img: `${StranglerThings}`,
      link:
        "https://wildcodeschool.github.io/lyon-0919-react-p2-strangler-things/#/game",
      description:
        "Jeu mobile réalisé avec React dans le cadre de la Wild Code School"
    },
    {
      name: "Strangler Things",
      img: `${StranglerThings}`,
      link:
        "https://wildcodeschool.github.io/lyon-0919-react-p2-strangler-things/#/game",
      description:
        "Jeu mobile réalisé avec React dans le cadre de la Wild Code School"
    },
    {
      name: "Strangler Things",
      img: `${StranglerThings}`,
      link:
        "https://wildcodeschool.github.io/lyon-0919-react-p2-strangler-things/#/game",
      description:
        "Jeu mobile réalisé avec React dans le cadre de la Wild Code School"
    },
    {
      name: "Strangler Things",
      img: `${StranglerThings}`,
      link:
        "https://wildcodeschool.github.io/lyon-0919-react-p2-strangler-things/#/game",
      description:
        "Jeu mobile réalisé avec React dans le cadre de la Wild Code School"
    },
    {
      name: "Strangler Things",
      img: `${StranglerThings}`,
      link:
        "https://wildcodeschool.github.io/lyon-0919-react-p2-strangler-things/#/game",
      description:
        "Jeu mobile réalisé avec React dans le cadre de la Wild Code School"
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
             lg="6"
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
                <a href={e.link} target="_blank" rel="noopener noreferrer">
                  <CardImg top width="100%" src={e.img} alt={e.name} />
                </a>
                <CardBody className="p-0">
                  <CardTitle
                    style={{
                      textAlign: "center",
                      fontFamily: "Lato",
                      textTransform: "uppercase",
                      marginTop: "1vh"
                    }}
                  >
                    <h5>{e.name}</h5>
                  </CardTitle>
                  <CardText>
                    <p>
                      <em>{e.description}</em>
                    </p>
                    <p>
                      <a
                        href={e.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faLink} />
                        &nbsp;{e.linkDescription}
                      </a>
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
