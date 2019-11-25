import React from "react";
import { Row, Col, Container } from "reactstrap";
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
          <Col>
            <div className="footer-logo-container">
              <div>
                <FontAwesomeIcon className="footer-logo" icon={faGithub} />
                <p>Github</p>
              </div>
              <div>
                <FontAwesomeIcon className="footer-logo" icon={faLinkedin} />
                <p>LinkedIn</p>
              </div>
              <div>
              <a href="https://twitter.com/AxelBizel" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="footer-logo" icon={faTwitter} />
                <p>Twitter</p>
                </a>
              </div>
              <div>
                <a href='../Images/CV-AxelBizel.pdf' download="CV-AxelBizel.pdf">
                <FontAwesomeIcon className="footer-logo" icon={faFileDownload}/>
                <p>CV</p>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row></Row>
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
