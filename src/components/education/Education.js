import React, { Component } from "react";
import EducationForm from "./EducationForm";
import EducationEntry from "./EducationEntry";

import uniqid from "uniqid";
import "../../styles/Education.css";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = { form: false };

    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showForm() {
    this.setState({ form: true });
  }

  hideForm() {
    this.setState({ form: false });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.handleForm(e.target);

    this.setState({ form: false });
  }

  render() {
    if (this.state.form) {
      return (
        <EducationForm
          hideForm={this.hideForm}
          handleSubmit={this.handleSubmit}
        />
      );
    } else {
      return (
        <div className="education-entries">
          {this.props.education.map((entry) => {
            return (
              <EducationEntry
                key={uniqid()}
                name={entry.name}
                startYear={entry.startYear}
                endYear={entry.endYear}
                degree={entry.degree}
                gpa={entry.gpa}
                handleDelete={this.props.handleDelete}
              />
            );
          })}
          <button className="button" onClick={this.showForm}>
            Add +
          </button>
        </div>
      );
    }
  }
}

export default Education;
