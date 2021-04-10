import React, { Component } from "react";
import { Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
      
         
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
              <Navbar.Brand href="/">PotKot</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Inicio</Nav.Link>
                  <Nav.Link href="acercade">Acerca de</Nav.Link>
                  <Nav.Link href="matricula">Matrícula</Nav.Link>
                  <Nav.Link href="horarios">Horarios</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="contactenos">Contáctenos</Nav.Link>
                 
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          
       
      </header>
    );
  }
}

export default Header;
