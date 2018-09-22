import React, { Component } from "react";
import CountScrollBar from "./components/CountScrollBar";

class SimpleRedux extends Component {
  state = {};
  render() {
    return (
      <div className="simpleRedux">
        SImple Redux
        <CountScrollBar />
      </div>
    );
  }
}

export default SimpleRedux;
