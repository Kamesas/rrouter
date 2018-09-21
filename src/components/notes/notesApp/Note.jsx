import React, { Component } from "react";
import PropTypes from "prop-types";
import PassProps from "./HOC/PassProps";

class Note extends Component {
  static propTypes = {
    // article: PropTypes.shape({
    //   id: PropTypes.string.isRequired,
    //   title: PropTypes.string.isRequired,
    //   text: PropTypes.string
    // }).isRequired
    title: PropTypes.node,
    color: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  static defaultProps = {
    color: "yellow"
  };

  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    const { id, color, text } = this.props;
    return (
      <div id={id} style={{ background: color }} className="note">
        <p>
          <strong>{this.props.title}</strong>
        </p>
        {text}
        <span className="delete" onClick={this.handleDelete}>
          X
        </span>
      </div>
    );
  }
}

export default PassProps({ title: "NOTE!" }, Note);
