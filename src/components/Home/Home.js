import React, { Component } from "react";
import Main from "../Main/Main";
import Carousels from "../Carousels/Carousels";
import "./Home.css";
import ValueBar from "../ValueBar/ValueBar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <home>
        <Main/>
        <ValueBar/>
        <Carousels/>
      </home>
    );
  }
}

export default Home;
