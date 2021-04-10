import React, { Component } from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import "./Carousels.css";

class Carousels extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <carousels>
        <Row id="test3">
          <Col>
            <Row>
              <Col sm="2"></Col>
              <Col>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./images/c1.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./images/c2.jpg"
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./images/c3.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col sm="2"></Col>
            </Row>
          </Col>
        </Row>
      </carousels>
    );
  }
}

export default Carousels;
