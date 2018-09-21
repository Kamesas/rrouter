import React, { Component } from "react";

export default function PassProps(props = {}, WrapComponent) {
  class EnhancedComponent extends Component {
    state = {};
    render() {
      return <WrapComponent {...props} {...this.props} />;
    }
  }
  return EnhancedComponent;
}
