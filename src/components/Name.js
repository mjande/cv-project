import React, { Component } from "react";
import "../styles/Name.css";

class Name extends Component {
  render() {
    let firstNameElement;
    let lastNameElement;

    if (this.props.firstName === "form") {
      firstNameElement = (
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onKeyDown={this.props.handleSubmit}
        />
      );
    } else {
      firstNameElement = (
        <button
          type="button"
          className="field firstName"
          onClick={this.props.handleClick}
          data-field="firstName"
        >
          {this.props.firstName}
        </button>
      );
    }

    if (this.props.lastName === "form") {
      lastNameElement = (
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onKeyDown={this.props.handleSubmit}
        />
      );
    } else {
      lastNameElement = (
        <button
          type="button"
          className="field lastName"
          onClick={this.props.handleClick}
          data-field="lastName"
        >
          {this.props.lastName}
        </button>
      );
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
