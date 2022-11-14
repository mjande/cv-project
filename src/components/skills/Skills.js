import React, { Component } from "react";
import SkillForm from "./SkillForm";
import SkillEntry from "./SkillEntry";

import "../../styles/Skills.css";
import uniqid from "uniqid";

class Skills extends Component {
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
        <SkillForm hideForm={this.hideForm} handleSubmit={this.handleSubmit} />
      );
    } else {
      return (
        <div className="skills-entries">
          <ul>
            {this.props.skills.map((entry) => {
              return (
                <SkillEntry
                  key={uniqid()}
                  name={entry}
                  handleDelete={this.props.handleDelete}
                />
              );
            })}
          </ul>
          <button className="button" onClick={this.showForm}>
            Add +
          </button>
        </div>
      );
    }
  }
}

export default Skills;
