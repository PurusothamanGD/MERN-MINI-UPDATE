import React, { Component } from "react";
import {
  Modal,
  Button,
  ModalBody,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Signin from "../form/Signin";
import "bootstrap/dist/css/bootstrap.min.css";

class FormModal extends Component {
  constructor() {
    super();
    this.state = {
      e_mail: "",
      password: "",
      show: false,
    };
  }

  login() {
    axios
      .post("http://localhost:4000/signin", {
        e_mail: this.state.e_mail,
        password: this.state.password,
      })
      .then((res) => {
        if (res.data.msg === "Email not found") {
          alert("Email not found");
        } else if (res.data.msg === "Incorrect Password") {
          alert("Incorrect Password");
        } else {
          alert("Login Succesful");
          localStorage.setItem("user", res.data.data);
          window.location = "/";
        }
      })
      .catch((err) => {
        alert("Request failed");
      });
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div className="m-3">
        <Button
          onClick={() => {
            this.handleModal();
          }}
        >
          Signin
        </Button>
        <Modal
          show={this.state.show}
          className="p-5"
          onHide={() => this.handleModal()}
        >
          <Modal.Body className="mt-4">
            <span style={{ fontWeight: "bold", margin: "50px" }}>Login</span>
            <Container>
              <Form onSubmit="/signin" className="signin">
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="input"
                    name="e_mail"
                    value={this.state.e_mail}
                    onChange={(e) => this.setState({ e_mail: e.target.value })}
                    placeholder="E-mail"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    className="input"
                    name="password"
                    value={this.state.password}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                    placeholder=" Password"
                  />
                </Form.Group>
                <Row>
                  <Col sm={3} style={{ marginLeft: "60px" }}>
                    <Button
                      onClick={() => this.login()}
                      style={{
                        marginRight: "400px",
                        backgroundColor: "#00B398",
                        borderColor: "#00B398",
                        color: "black",
                        fontWeight: "bold",
                        width: "100px",
                      }}
                    >
                      Login
                    </Button>
                  </Col>
                  <Col sm={3}>
                    <Button
                      onClick={() => {
                        this.handleModal();
                      }}
                      style={{
                        backgroundColor: "#E5E5E5",
                        width: "100px",
                        color: "black",
                        borderColor: "#E5E5E5",
                        fontWeight: "bold",
                      }}
                    >
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default FormModal;
