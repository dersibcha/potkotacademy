import React, { Component } from "react";
import Main from "../Main/Main";
import Carousels from "../Carousels/Carousels";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <home>
        <Main/>
        <Carousels/>
      </home>
    );
  }
}

export default Home;
