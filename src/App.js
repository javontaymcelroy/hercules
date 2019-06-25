import { Component } from "react";

import React from "react";
import "./App.scss";

import LandingPage from "./components/LandingPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
