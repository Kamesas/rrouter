import React, { Component } from "react";
import CountScrollBar2 from "./components/CountScrollBar2";

class SimpleRedux extends Component {
  state = {};
  render() {
    return (
      <div className="simpleRedux">
        SImple Redux
        <CountScrollBar2 />
      </div>
    );
  }
}

export default SimpleRedux;
