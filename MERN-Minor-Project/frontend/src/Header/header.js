import React, { useEffect, useState } from "react";
import "./header.css";
import Signup from "../modal/signupmodal";
import Signin from "../modal/signinmodal";
import {
  Navbar,
  InputGroup,
  Button,
  FormControl,
  Image,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const token = jwt_decode(localStorage.getItem("user"));
      setUser(token.fullname);
    } else {
      setUser("");
    }
  }, []);

  return (
    <Row className="header">
      <Col lg={2} className="my-2">
        <Navbar.Brand
          className="logo1"
          style={{ fontWeight: "bold", marginLeft: "5px" }}
        >
          <Image
            src="./Images/logo1.png"
            className="mr-2"
            alt="logo"
            width="70px"
            height="60px"
            roundedcircle
          />
          Water Tap
        </Navbar.Brand>
      </Col>
      <Col lg={1}></Col>
      <Col lg={4}>
        <InputGroup className="my-3 search ">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1" className="bg-white border-0">
              <FontAwesomeIcon className="search-icon" icon={faSearch} />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            className="navbar-dark text-dark border-0"
            placeholder="Search for products,Brands and more"
            aria-label="NavBar"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Col>

      <Col lg={5} className="px-5 menu">
        <Row>
          <Col></Col>
          <Col></Col>
          <Col
            xs={3}
            className="text-white"
            style={{
              fontSize: "19px",
              paddingBottom: "10px",
              marginLeft: "200px",
            }}
          >
            <FontAwesomeIcon className="icons mr-4" icon={faShoppingCart} />{" "}
            Cart
          </Col>
          <Col xs={4} style={{ fontSize: "16px" }}>
            <Dropdown className="mt-4 drop">
              {!localStorage.getItem("user") ? (
                <div>
                  <Button
                    style={{
                      backgroundColor: "#53A3C4",
                      borderColor: "#53A3C4",
                    }}
                  >
                    {" "}
                    Hello Click here !
                  </Button>
                  <Dropdown.Toggle
                    style={{
                      backgroundColor: "#53A3C4",
                      borderColor: "#53A3C4",
                    }}
                    id="dropdown-basic"
                  ></Dropdown.Toggle>
                  <Dropdown.Menu className="px-4 py-3">
                    <Dropdown.Item>
                      <Signin />
                    </Dropdown.Item>
                    <span id="dropletter">
                      New customer ?
                      <a id="start">
                        <Signup></Signup>
                      </a>
                    </span>
                  </Dropdown.Menu>
                </div>
              ) : (
                <div>
                  <Button
                    style={{
                      backgroundColor: "#53A3C4",
                      borderColor: "#53A3C4",
                    }}
                  >
                    {" "}
                    Click to Log Out
                  </Button>
                  <Dropdown.Toggle
                    style={{
                      backgroundColor: "#53A3C4",
                      borderColor: "#53A3C4",
                    }}
                    id="dropdown-basic"
                  ></Dropdown.Toggle>
                  <Dropdown.Menu className="px-4 py-3">
                    <Dropdown.Item>{user}</Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        localStorage.removeItem("user");
                        window.location = "/";
                      }}
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </div>
              )}
            </Dropdown>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
