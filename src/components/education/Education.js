import React, { Component } from "react";
import EducationForm from "./EducationForm";
import "../../styles/Education.css";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = { form: false };

    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  showForm() {
    this.setState({ form: true });
  }

  hideForm() {
    this.setState({ form: false });
  }

  render() {
    if (this.state.form) {
      return <EducationForm hideForm={this.hideForm} />;
    } else {
      return (
        <div>
          {this.props.educationEntries.forEach((educationEntry) => {
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
