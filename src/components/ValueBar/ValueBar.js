import React from "react";
import { Row, Col } from "react-bootstrap";
import Value from "../Value/Value";
import "./ValueBar.css";

const ValueBar = () => {

  return (
    <>
      <Row id="ValueBarContainer" class="Container">
      <Col sm="2"/>
        <Col sm="3">
            <Value
            title="Enseñanza continua"
            text="Brindamos un seguimiento con cada /n estudiante para promover el aprenzidaje."
            image="./images/book.png"
              />
        </Col>
        <Col sm="3">
            <Value
            title="Metodos de aprendizaje"
            text="Aplicamos una ensenanza donde la /n practica es prioridad"
            image="./images/communication.png"
                />
        </Col>
        <Col sm="3">
            <Value
            title="Horario flexible"
            text="Proveemos la posibilidad de asistir /n cualquier clase y nivel como medio de practica"
            image="./images/education.png"
              />
        </Col>
        <Col sm="1"/>
      </Row>
    </>
  );
};

export default ValueBar;
