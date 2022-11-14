import React, { Component } from "react";
import Name from "./Name";
import Address from "./Address";
import Education from "./education/Education";
import "../styles/Cv.css";

class Cv extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "First Name",
      lastName: "Last Name",
      homeAddress: "123 Main St",
      city: "Cityville, ST",
      postalCode: "12345",
      education: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(e) {
    const field = e.target.dataset.field;

    this.setState({ [field]: "form" });
  }

  handleEnter(e) {
    if (e.key === "Enter") {
      const field = e.target;

      this.setState({ [field.name]: field.value });
    }
  }

  handleForm(form) {
    const formData = new FormData(form);
    const field = form.dataset.field;
    let entry;

    if (field === "education") {
      entry = {
        name: formData.get("name"),
        startYear: formData.get("startYear"),
        endYear: formData.get("endYear"),
        degree: formData.get("degree"),
        gpa: formData.get("gpa"),
      };
    }

    this.setState({ [field]: [...this.state[field], entry] });
  }

  handleDelete(e) {
    const field = e.target.dataset.field;
    const index = this.state.education.findIndex((entry) => {
      return entry.degree === e.target.dataset.degree;
    });

    this.setState({
      [field]: [
        ...this.state[field].slice(0, index),
        ...this.state[field].slice(index + 1),
      ],
    });
  }

  render() {
    return (
      <div className="Cv">
        <Name
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          handleClick={this.handleClick}
          handleEnter={this.handleSubmit}
        />
        <Address
          homeAddress={this.state.homeAddress}
          city={this.state.city}
          postalCode={this.state.postalCode}
          handleClick={this.handleClick}
          handleEnter={this.handleSubmit}
        />
        <hr />
        <h2>Education</h2>
        <Education
          education={this.state.education}
          handleForm={this.handleForm}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Cv;
