import React, { Component } from "react";
import { render } from "react-dom";
import LongInputComponent from "./UserInput";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
      <h1>DevOps War Room</h1>
      <LongInputComponent/>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);