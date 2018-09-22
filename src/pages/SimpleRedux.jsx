import React, { Component } from "react";
import SimpleRedux from "../components/redux/SimpleRedux";

class TestRedux extends Component {
  state = {};
  render() {
    return (
      <div className="testRedux">
        <SimpleRedux />
      </div>
    );
  }
}

export default TestRedux;
