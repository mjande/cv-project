import React, { Component } from "react";
import "../styles/Name.css";

class Name extends Component {
  render() {
    let nameElements = {
      firstName: (
        <button
          type="button"
          className="field firstName"
          id="first-name"
          onClick={this.props.handleClick}
          data-field="firstName"
        >
          {this.props.firstName}
        </button>
      ),
      lastName: (
        <button
          type="button"
          className="field lastName"
          onClick={this.props.handleClick}
          data-field="lastName"
        >
          {this.props.lastName}
        </button>
      ),
    };

    if (this.props.firstName === "form") {
      nameElements.firstName = (
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onKeyDown={this.props.handleEnter}
          autoFocus
        />
      );
    }

    if (this.props.lastName === "form") {
      nameElements.lastName = (
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onKeyDown={this.props.handleEnter}
          autoFocus
        />
      );
    }

    return (
      <div className="Name">
        {nameElements.firstName}
        {nameElements.lastName}
      </div>
    );
  }
}

export default Name;
