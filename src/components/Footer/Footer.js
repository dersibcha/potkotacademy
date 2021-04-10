import React, { Component } from 'react';
import { Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./Footer.css";

class Footer extends Component {
    state = {}
    render() {
        return (
            <footer>
                <Row>
                    <Col>
                    <p>test</p>
                    </Col>
                </Row>
                    <Row>
                    <Col sm>
                        <Navbar fixed="bottom"  expand="lg" bg="transparent" variant="dark">
                            <Navbar.Brand href="">Síguenos</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="https://www.facebook.com/"><img id="facebook_icon" src="../images/facebook.png" alt="Facebook" /></Nav.Link>
                                     </Nav>
                                <Nav>
                                   
                                    <Nav.Link href="/contact-us">Contáctenos</Nav.Link>
                                    <Nav.Link href="https://www.facebook.com/"><img id="whatsap_icon" src="../images/whatsap.png" alt="Whatsapp" /></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </footer>
        );
    }
}

export default Footer;