import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./Enrollment.css";

class Enrollment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <enrollment>
         <Row id="test2">
       <Col >
          <Row></Row>
          <Row>
           
            <Col sm="8">
              <h1>Enrollemnts</h1>
              <h4>
                I am into front end development with asome experiecence in web debeloping technologies,
                I want to work developing with react and acomplish an front end developing career.
              </h4>
              <h4>
               <br></br>
               <br></br>
               derfelsib@gmail.com
               <br></br>
               +506 8616-7640
              </h4>
            </Col>
            <Col sm="1"></Col>
          </Row>

        </Col>
        </Row>
      </enrollment>
    );
  }
}

export default Enrollment;
