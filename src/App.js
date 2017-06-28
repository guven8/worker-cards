import React, { Component } from "react";
import WorkerCards from "./WorkerCards";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <WorkerCards />
      </div>
    );
  }
}

export default App;
