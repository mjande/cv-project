import React, { Component } from "react";
import "../styles/Name.css";

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = { form: false };
  }

  render() {
    let firstName = this.props.firstName || "First Name";
    let lastName = this.props.lastName || "Last Name";
    let firstNameElement;
    let lastNameElement;

    if (this.state.form === "firstName") {
      firstNameElement = <input type="text" name="first-name"></input>;
    } else {
      firstNameElement = (
        <button type="button" className="firstName field">
          {firstName}
        </button>
      );
    }

    if (this.state.form === "lastName") {
      lastNameElement = <input type="text" name="last-name"></input>;
    } else {
      lastNameElement = <button className="lastName field">{lastName}</button>;
    }

    return (
      <div className="Name">
        {firstNameElement}
        {lastNameElement}
      </div>
    );
  }
}

export default Name;
