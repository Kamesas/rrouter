import React, { Component } from "react";
import PropTypes from "prop-types";

class Note extends Component {
  static propTypes = {
    // article: PropTypes.shape({
    //   id: PropTypes.string.isRequired,
    //   title: PropTypes.string.isRequired,
    //   text: PropTypes.string
    // }).isRequired
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
        {text}
        <span className="delete" onClick={this.handleDelete}>
          X
        </span>
      </div>
    );
  }
}

export default Note;
