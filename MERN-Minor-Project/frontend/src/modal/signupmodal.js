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
import "bootstrap/dist/css/bootstrap.min.css";

class FormModal extends Component {
  constructor() {
    super();
    this.state = {
      close: false,
      nodeResponse: "",
      show: false,
      username: "",
      e_mail: "",
      password: "",
      confirm_password: "",
    };
    this.changeUsername = this.changeUsername.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.confirm = this.confirm.bind(this);
    this.submit = this.submit.bind(this);
  }

  //   fromRoute() {
  //     axios
  //       .post("http://localhost:4000/signup", {
  //         username: this.state.username,
  //         e_mail: this.state.e_mail,
  //         password: this.state.password,
  //         confirm_password: this.state.confirm_password,
  //       })
  //       .then((res) => {
  //         if (res.data === "Password not matching") {
  //           alert("Password not matching");
  //         } else {
  //           alert("Registered Successfully");
  //         }
  //       })
  //       .catch((err) => {
  //         alert("Request failed");
  //       });
  //   }

  changeUsername(event) {
    this.setState({
      fullname: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      e_mail: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  confirm(event) {
    this.setState({
      confirm_password: event.target.value,
    });
  }

  submit(event) {
    event.preventDefault();

    console.log(this.state);
    axios
      .post("http://localhost:4000/signup", {
        fullname: this.state.fullname,
        e_mail: this.state.e_mail,
        password: this.state.password,
        confirm_password: this.state.confirm_password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data === "Password not matching") {
          alert("Password not matching");
        } else {
          alert("Registered Successfully");
          this.closeModal();
        }
      })
      .catch((err) => {
        alert("Request failed");
      });
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }

  closeModal() {
    this.setState({ close: !this.state.show });
  }
  render() {
    return (
      <div className="m-3">
        <a
          onClick={() => {
            this.handleModal();
          }}
        >
          start here
        </a>
        <Modal
          show={this.state.show}
          className="p-5"
          onHide={() => this.handleModal()}
        >
          <Modal.Body className="mt-4">
            <span
              style={{
                fontWeight: "bold",
                marginTop: "50px",
                marginLeft: "20px",
              }}
            >
              Register
            </span>
            <Container>
              <Form onSubmit={this.submit} className="signup mt-4">
                <Form.Group>
                  <Form.Control
                    className="input"
                    type="text"
                    onChange={this.changeUsername}
                    value={this.state.fullname}
                    name="username"
                    placeholder="Fullname"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="input"
                    onChange={this.changeEmail}
                    value={this.state.e_mail}
                    name="e_mail"
                    placeholder="E-mail"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    className="input"
                    onChange={this.changePassword}
                    value={this.state.password}
                    name="password"
                    placeholder=" Password"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    className="input"
                    onChange={this.confirm}
                    value={this.state.confirm_password}
                    name="confirm_password"
                    placeholder="Confirm Password"
                  />
                </Form.Group>
                <Row>
                  <Col sm={3} style={{ marginLeft: "60px" }}>
                    <Button
                      type="submit"
                      value="submit"
                      onClick={(e) => this.submit(e)}
                      style={{
                        marginRight: "400px",
                        backgroundColor: "#00B398",
                        borderColor: "#00B398",
                        color: "black",
                        fontWeight: "bold",
                        width: "110px",
                      }}
                    >
                      Register
                    </Button>
                  </Col>
                  <Col sm={3}>
                    <Button
                      onClick={() => {
                        this.handleModal();
                      }}
                      style={{
                        backgroundColor: "#E5E5E5",
                        width: "110px",
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
        <Modal
          close={this.state.close}
          className="p-5"
          onHide={() => this.closeModal()}
        >
          <Modal.Body>
            <p>{this.state.nodeResponse}</p>
          </Modal.Body>
          <Button
            onClick={() => {
              this.closeModal();
            }}
          >
            close
          </Button>
        </Modal>
      </div>
    );
  }
}

export default FormModal;
