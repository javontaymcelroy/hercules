import { Component } from "react";
import { Route } from "react-router-dom";

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
        <Route to="/" component={LandingPage} />
      </div>
    );
  }
}

export default App;
