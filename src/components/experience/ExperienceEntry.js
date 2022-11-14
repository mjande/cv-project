import React, { Component } from "react";

class ExperienceEntry extends Component {
  render() {
    return (
      <article className="entry">
        <div className="experience[role]">
          <strong>{this.props.role}</strong>
        </div>
        <div className="experience[company]">{this.props.company}</div>
        <div className="experience[city]">{this.props.city}</div>
        <div className="experience[years]">
          {this.props.startYear} - {this.props.endYear}
        </div>
        <button
          type="button"
          onClick={this.props.handleDelete}
          data-company={this.props.company}
          data-field="experience"
        >
          Delete
        </button>
      </article>
    );
  }
}

export default ExperienceEntry;
