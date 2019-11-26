import React from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import "../App.css";

const Contact = props => {
  return (
    <Container className="form-container">
      <br></br>
      <h2 className="section-titles">Contact</h2>
      <br></br>
        <Form>
          <Row form>
            <Col>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="yourname@example.com"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
            </Col>
          </Row>
          <Button>Send !</Button>
        </Form>
    </Container>
  );
};

export default Contact;
