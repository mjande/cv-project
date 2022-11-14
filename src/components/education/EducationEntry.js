import React, { Component } from "react";

class EducationEntry extends Component {
  render() {
    return (
      <article className="entry">
        <div className="education[name]">
          <strong>{this.props.name}</strong>
        </div>
        <div className="education[degree]">{this.props.degree}</div>
        <div className="education[gpa]">{this.props.gpa}</div>
        <div className="education[years]">
          {this.props.startYear} - {this.props.endYear}
        </div>
        <button
          type="button"
          onClick={this.props.handleDelete}
          data-degree={this.props.degree}
          data-field="education"
        >
          Delete
        </button>
      </article>
    );
  }
}

export default EducationEntry;
