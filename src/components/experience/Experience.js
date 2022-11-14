// Company, city, From, To, Role

import React, { Component } from "react";
import ExperienceForm from "./ExperienceForm";
import ExperienceEntry from "./ExperienceEntry";

import uniqid from "uniqid";
import "../../styles/Experience.css";

class Experience extends Component {
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
        <ExperienceForm
          hideForm={this.hideForm}
          handleSubmit={this.handleSubmit}
        />
      );
    } else {
      return (
        <div className="experience-entries">
          {this.props.experience.map((entry) => {
            return (
              <ExperienceEntry
                key={uniqid()}
                role={entry.role}
                company={entry.company}
                city={entry.city}
                startYear={entry.startYear}
                endYear={entry.endYear}
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

export default Experience;
