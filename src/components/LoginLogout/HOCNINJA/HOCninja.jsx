import React, { Component } from "react";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";

class HOCninja extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3> HOC</h3>
        <Demo1 />
        <Demo2 massage="COMPONENT" />
      </div>
    );
  }
}

export default HOCninja;
