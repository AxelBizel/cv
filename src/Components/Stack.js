import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
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
        <Col xs="6" sm="4" md="3" xl="2" className="my-2">
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg top width="100%" src={ReactLogo} alt="React Logo" />
            <CardBody className="p-0">
              <CardTitle
                style={{ margin: "0", paddingTop: "3vh", textAlign: "center", fontFamily: "Roboto Mono"}}
              >
                React
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col xs="6" sm="4" md="3" xl="2" className="my-2">
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
            <CardBody className="p-0">
              <CardTitle
                style={{ margin: "0", paddingTop: "3vh", textAlign: "center", fontFamily: "Roboto Mono"}}
              >
                Bootstrap
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col xs="6" sm="4" md="3" xl="2" className="my-2">
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg top width="100%" src={NodeLogo} alt="Node.js Logo" />
            <CardBody className="p-0">
              <CardTitle
                 style={{ margin: "0", paddingTop: "3vh", textAlign: "center", fontFamily: "Roboto Mono"}}
              >
                Node.js
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col xs="6" sm="4" md="3" xl="2" className="my-2">
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg top width="100%" src={HTML5Logo} alt="HTML5 Logo" />
            <CardBody className="p-0">
              <CardTitle
                 style={{ margin: "0", paddingTop: "3vh", textAlign: "center", fontFamily: "Roboto Mono"}}
              >
                HTML5
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col xs="6" sm="4" md="3" xl="2" className="my-2">
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg top width="100%" src={CSS3Logo} alt="CSS3 Logo" />
            <CardBody className="p-0">
              <CardTitle
                 style={{ margin: "0", paddingTop: "3vh", textAlign: "center", fontFamily: "Roboto Mono"}}
              >
                CSS3
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col xs="6" sm="4" md="3" xl="2" className="my-2">
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg top width="100%" src={JSLogo} alt="Javascript Logo" />
            <CardBody className="p-0">
              <CardTitle
                 style={{ margin: "0", paddingTop: "3vh", textAlign: "center", fontFamily: "Roboto Mono"}}
              >
                Javascript
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col xs="6" sm="4" md="3" xl="2" className="my-2">
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg top width="100%" src={MySQLLogo} alt="MySQL Logo" />
            <CardBody className="m-0, p-0">
              <CardTitle
                 style={{ margin: "0", paddingTop: "3vh", textAlign: "center", fontFamily: "Roboto Mono"}}
              >
                MySQL
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col xs="6" sm="4" md="3" xl="2" className="my-2">
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg top width="100%" src={GitLogo} alt="Git Logo" />
            <CardBody className="p-0">
              <CardTitle
                 style={{ margin: "0", paddingTop: "3vh", textAlign: "center", fontFamily: "Roboto Mono"}}
              >
                Git
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col xs="6" sm="4" md="3" xl="2" className="my-2">
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg top width="100%" src={ScrumLogo} alt="Scrum Logo" />
            <CardBody className="p-0">
              <CardTitle
                 style={{ margin: "0", paddingTop: "3vh", textAlign: "center", fontFamily: "Roboto Mono"}}
              >
                Scrum/Agile
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col xs="6" sm="4" md="3" xl="2" className="my-2">
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
            <CardBody className="p-0">
              <CardTitle
                 style={{ margin: "0", paddingTop: "3vh", textAlign: "center", fontFamily: "Roboto Mono"}}
              >
                Illustrator
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col xs="6" sm="4" md="3" xl="2" className="my-2">
          <Card
            body
            inverse
            style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
          >
            <CardImg top width="100%" src={PSLogo} alt="Adobe Photoshop Logo" />
            <CardBody className="p-0">
              <CardTitle
                 style={{ margin: "0", paddingTop: "3vh", textAlign: "center", fontFamily: "Roboto Mono"}}
              >
                Photoshop
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col xs="6" sm="4" md="3" xl="2" className="my-2">
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
            <CardBody className="p-0">
              <CardTitle
                 style={{ margin: "0", paddingTop: "3vh", textAlign: "center", fontFamily: "Roboto Mono"}}
              >
                Google Tools
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Stack;
