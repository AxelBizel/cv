import React, { Component } from "react";
import { Container, Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import "../App.css";
import axios from "axios";
import MyEmail from "./Email";
import { renderEmail } from "react-html-email";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      message: null
    };
  }

  handleSubmit(event) {
    const messageHtml = renderEmail(
      <MyEmail name={this.state.name}> {this.state.feedback}</MyEmail>
    );

    axios({
      method: "POST",
      url: "http://localhost:3000/send",
      data: {
        name: this.state.name,
        email: this.state.email,
        messageHtml: messageHtml
      }
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Email sent, awesome!");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Oops, something went wrong. Try again");
      }
    });
  }

  render() {
    return (
      <Container>
        <br></br>
        <h2 className="section-titles">Contact</h2>
        <br></br>
        <Form className="form-container" name="contact" encType="text/plain">
          <Row form>
            <Col>
              <FormGroup>
                <Label for="name">Nom</Label>
                <Input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="votre nom"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="vous@example.com"
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
          <button
            className="form-button"
            type="submit"
            onClick={() => this.handleSubmit}
          >
            Envoyer !
          </button>
        </Form>
      </Container>
    );
  }
}

export default Contact;
