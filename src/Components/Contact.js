import React from "react";
import {
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import "../App.css";

const Contact = props => {
  return (
    <Container>
      <br></br>
      <h2 className="section-titles">Contact</h2>
      <br></br>
      <Form className="form-container">
        <Row form>
          <Col>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="yourname@example.com"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input type="textarea" name="message" id="message" />
            </FormGroup>
          </Col>
        </Row>
        <button className="form-button" onClick="mailto:axel.bizel@gmail.com">
          Envoyer !
        </button>
      </Form>
    </Container>
  );
};

export default Contact;
