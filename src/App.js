import React, { Component } from "react";
import "./App.css";

import Cv from "./components/Cv";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">CV Builder</div>
        <Cv />
      </div>
    );
  }
}

export default App;
