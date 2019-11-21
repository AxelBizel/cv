import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody
} from "reactstrap";
import BootstrapLogo from "../Images/Bootstrap.png";
import CSS3Logo from "../Images/CSS3.png";
import GitLogo from "../Images/Git.png";
import HTML5Logo from "../Images/HTML5.png";
import AILogo from "../Images/Illustrator.png";
import JSLogo from "../Images/JS.png";
import MySQLLogo from "../Images/MySQL.png";
import NodeLogo from "../Images/Node.png";
import PSLogo from "../Images/Photoshop.png";
import ScrumLogo from "../Images/scrum.png";
import GoogleDriveLogo from "../Images/GDrive.png";
import ReactLogo from "../Images/React2.png";
import "../App.css";

const Stack = () => {
  return (
    <Container>
      <h2 className="section-titles">Stack</h2>
      <Row>
        <Col xs="6" sm="4" md="3" lg="2" style={{ margin: "2vh 0" }}>
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg top width="100%" src={ReactLogo} alt="React Logo" />
            <CardBody style={{ margin: "0", padding: "0" }}>
              <CardTitle
                style={{ margin: "0", padding: "1vh", textAlign: "center" }}
              >
                React
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="4" md="3" lg="2" style={{ margin: "2vh 0" }}>
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg
              top
              width="100%"
              src={BootstrapLogo}
              alt="Bootstrap Logo"
            />
            <CardBody style={{ margin: "0", padding: "0" }}>
              <CardTitle
                style={{ margin: "0", padding: "1vh 0", textAlign: "center" }}
              >
                Bootstrap
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="4" md="3" lg="2" style={{ margin: "2vh 0" }}>
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg top width="100%" src={NodeLogo} alt="Node.js Logo" />
            <CardBody style={{ margin: "0", padding: "0" }}>
              <CardTitle
                style={{ margin: "0", padding: "1vh", textAlign: "center" }}
              >
                Node.js
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="4" md="3" lg="2" style={{ margin: "2vh 0" }}>
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg top width="100%" src={HTML5Logo} alt="HTML5 Logo" />
            <CardBody style={{ margin: "0", padding: "0" }}>
              <CardTitle
                style={{ margin: "0", padding: "1vh", textAlign: "center" }}
              >
                HTML5
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="4" md="3" lg="2" style={{ margin: "2vh 0" }}>
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg top width="100%" src={CSS3Logo} alt="CSS3 Logo" />
            <CardBody style={{ margin: "0", padding: "0" }}>
              <CardTitle
                style={{ margin: "0", padding: "1vh", textAlign: "center" }}
              >
                CSS3
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="4" md="3" lg="2" style={{ margin: "2vh 0" }}>
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg top width="100%" src={JSLogo} alt="Javascript Logo" />
            <CardBody style={{ margin: "0", padding: "0" }}>
              <CardTitle
                style={{ margin: "0", padding: "1vh", textAlign: "center" }}
              >
                Javascript
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="4" md="3" lg="2" style={{ margin: "2vh 0" }}>
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg top width="100%" src={MySQLLogo} alt="MySQL Logo" />
            <CardBody style={{ margin: "0", padding: "0" }}>
              <CardTitle
                style={{ margin: "0", padding: "1vh", textAlign: "center" }}
              >
                MySQL
              </CardTitle>
            </CardBody>
          </Card>
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg top width="100%" src={GitLogo} alt="Git Logo" />
            <CardBody style={{ margin: "0", padding: "0" }}>
              <CardTitle
                style={{ margin: "0", padding: "1vh", textAlign: "center" }}
              >
                Git
              </CardTitle>
            </CardBody>
          </Card>
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg top width="100%" src={ScrumLogo} alt="Scrum Logo" />
            <CardBody style={{ margin: "0", padding: "0" }}>
              <CardTitle
                style={{ margin: "0", padding: "1vh", textAlign: "center" }}
              >
                Scrum / Agile
              </CardTitle>
            </CardBody>
          </Card>

          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg
              top
              width="100%"
              src={AILogo}
              alt="Adobe Illustrator Logo"
            />
            <CardBody style={{ margin: "0", padding: "0" }}>
              <CardTitle
                style={{ margin: "0", padding: "1vh", textAlign: "center" }}
              >
                Adobe Illustrator
              </CardTitle>
            </CardBody>
          </Card>
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg top width="100%" src={PSLogo} alt="Adobe Photoshop Logo" />
            <CardBody style={{ margin: "0", padding: "0" }}>
              <CardTitle
                style={{ margin: "0", padding: "1vh", textAlign: "center" }}
              >
                Adobe Photoshop
              </CardTitle>
            </CardBody>
          </Card>
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg
              top
              width="100%"
              src={GoogleDriveLogo}
              alt="Google Drive Logo"
            />
            <CardBody style={{ margin: "0", padding: "0" }}>
              <CardTitle
                style={{ margin: "0", padding: "1vh", textAlign: "center" }}
              >
                Google Drive Suite
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* <CardDeck xs="6" style={{ margin: "2vh 0" }}>
         <Card body
          inverse
          style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
        >
          <CardImg top width="100%" src={ReactLogo} alt="React Logo" />
          <CardBody>
            <CardTitle>React</CardTitle>
          </CardBody>
        </Card>
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <CardImg top width="100%" src={BootstrapLogo} alt="Bootstrap Logo" />
          <CardBody>
            <CardTitle>Bootstrap</CardTitle>
          </CardBody>
        </Card>
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <CardImg top width="100%" src={NodeLogo} alt="Node.js Logo" />
          <CardBody>
            <CardTitle>Node.js</CardTitle>
          </CardBody>
        </Card>
      </CardDeck>
      <CardDeck style={{ margin: "2vh 0" }}>
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <CardImg top width="100%" src={HTML5Logo} alt="HTML5 Logo" />
          <CardBody>
            <CardTitle>HTML5</CardTitle>
          </CardBody>
        </Card>
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <CardImg top width="100%" src={CSS3Logo} alt="CSS3 Logo" />
          <CardBody>
            <CardTitle>CSS3</CardTitle>
          </CardBody>
        </Card>
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <CardImg top width="100%" src={JSLogo} alt="Javascript Logo" />
          <CardBody>
            <CardTitle>Javascript</CardTitle>
          </CardBody>
        </Card>
      </CardDeck>
      <CardDeck style={{ margin: "2vh 0" }}>
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <CardImg top width="100%" src={MySQLLogo} alt="MySQL Logo" />
          <CardBody>
            <CardTitle>MySQL</CardTitle>
          </CardBody>
        </Card>
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <CardImg top width="100%" src={GitLogo} alt="Git Logo" />
          <CardBody>
            <CardTitle>Git</CardTitle>
          </CardBody>
        </Card>
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <CardImg top width="100%" src={ScrumLogo} alt="Scrum Logo" />
          <CardBody>
            <CardTitle>Scrum / Agile</CardTitle>
          </CardBody>
        </Card>
      </CardDeck>
      <CardDeck style={{ margin: "2vh 0" }}>
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <CardImg top width="100%" src={AILogo} alt="Adobe Illustrator Logo" />
          <CardBody>
            <CardTitle>Adobe Illustrator</CardTitle>
    
          </CardBody>
        </Card>
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <CardImg top width="100%" src={PSLogo} alt="Adobe Photoshop Logo" />
          <CardBody>
            <CardTitle>Adobe Photoshop</CardTitle>
          </CardBody>
        </Card>
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <CardImg top width="100%" src={GoogleDriveLogo} alt="Google Drive Logo" />
          <CardBody>
            <CardTitle>Google Drive Suite</CardTitle>
          </CardBody>
        </Card>
      </CardDeck> */}
    </Container>
  );
};

export default Stack;
