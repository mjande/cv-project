import React, { Component } from "react";

class SkillEntry extends Component {
  render() {
    return (
      <li className="skill">
        {this.props.name}
        <button
          type="button"
          onClick={this.props.handleDelete}
          data-skill={this.props.name}
          data-field="skills"
        >
          Delete
        </button>
      </li>
    );
  }
}

export default SkillEntry;
