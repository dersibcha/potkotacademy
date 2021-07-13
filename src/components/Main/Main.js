import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Main.css";

const Main = () => {

    return (
      <main>
        <Row id="test">
          <Col sm="4">
            <img alt="Main" id="main_pic" src='./images/main.jpg' />
          </Col>
          <Col sm="8">
            <Row></Row>

            <Row>
              <Col sm="1"></Col>
              <Col sm="8">
                <div id="banner-title">
                  <h1 >
                    Te gustaria aprender coreano? Academia de Coreano y Español
                  </h1>
                </div>
                <div id="btn-container">
                  <button id="button" href="acercade">Matricular</button>
                </div>
              </Col>
              <Col sm="2"></Col>
            </Row>


          </Col>
        </Row>
      </main>
    );
  
};

export default Main;
