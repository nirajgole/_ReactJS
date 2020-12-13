import React, { Component } from "react";
import FunctionComponent from "./FunctionComponent";

export class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "John",
      lastName: null,
    };
  }
  render() {
    return (
      <div>
        <p>Name: {this.state.firstName}</p>
        <FunctionComponent lastName="Cena" />
      </div>
    );
  }
}

export default ClassComponent;
