import React, { Component } from "react";
import { Row, Col, Container  } from "react-bootstrap";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <Row id="test">
        <Col sm="4">
          <img id="main_pic" src='./images/main.jpg'/>
          </Col>
          <Col sm="8">
          <Row></Row>
         
          <Row>
            <Col sm="1"></Col>
            <Col sm="8">
            <h1>
                Te gustaria aprender coreano?Academia de Coreano y Español
              </h1>
            </Col>
            <Col sm="2"></Col>
          </Row>
          
          
        </Col>
        </Row>
      </main>
    );
  }
}

export default Main;
