import React from "react";
import { Row, Col, Container, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

import "../App.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs="6" lg="3" className="footer-logo-container">
            <a
              href="https://github.com/AxelBizel"
              target="_blank"
              rel="noopener noreferrer"
              alt="Mon profil Github"
            >
              <FontAwesomeIcon className="footer-logo" icon={faGithub} />
              <p>Github</p>
            </a>
          </Col>
          <Col xs="6" lg="3" className="footer-logo-container">
            <a
              href="https://www.linkedin.com/in/axel-bizel/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Mon profil LinkedIn"
            >
              <FontAwesomeIcon className="footer-logo" icon={faLinkedin} />
              <p>LinkedIn</p>
            </a>
          </Col>
          <Col xs="6" lg="3" className="footer-logo-container">
            <a
              href="https://drive.google.com/file/d/1qo7TH3mUaVd1uBXjmOlShAdf9eQLBQZJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              alt="Mon profil Twitter"
            >
              <FontAwesomeIcon className="footer-logo" icon={faTwitter} />
              <p>Twitter</p>
            </a>
          </Col>
          <Col xs="6" lg="3" className="footer-logo-container">
            <a
              href="https://drive.google.com/file/d/1qo7TH3mUaVd1uBXjmOlShAdf9eQLBQZJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              alt="Mon CV au format PDF"
            >
              <FontAwesomeIcon className="footer-logo" icon={faFileDownload} />
              <p>CV</p>
            </a>
          </Col>
        </Row>
        <Row>
          <p className="copyright-mention">
            &#9400; Axel Bizel - novembre 2019 - Ce site a été entièrement
            réalisé à l'aide de React.js et Bootstrap.
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
