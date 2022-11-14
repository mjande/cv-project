import React, { Component } from "react";
import EducationForm from "./EducationForm";
import "../../styles/Education.css";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = { form: false };

    this.showForm = this.showForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showForm() {
    this.setState({ form: true });
  }

  handleSubmit(e) {
    console.log(e.target);
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
        <div>
          {this.props.education.forEach((educationEntry) => {
            console.log("Render entry here"); // <EducationEntry />
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
