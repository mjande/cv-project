import React, { Component } from "react";
import Name from "./Name";
import Address from "./Address";
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
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    const field = e.target.dataset.field;

    this.setState({ [field]: "form" });
  }

  handleSubmit(e) {
    if (e.key === "Enter") {
      const field = e.target;

      this.setState({ [field.name]: field.value });
    }
  }

  render() {
    return (
      <div className="Cv">
        <Name
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          handleClick={this.handleClick}
          handleSubmit={this.handleSubmit}
        />
        <Address
          homeAddress={this.state.homeAddress}
          city={this.state.city}
          postalCode={this.state.postalCode}
          handleClick={this.handleClick}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Cv;
