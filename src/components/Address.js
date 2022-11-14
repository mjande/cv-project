import React, { Component } from "react";

class Address extends Component {
  render() {
    let addressElements = {
      homeAddress: (
        <button
          type="button"
          className="field address"
          onClick={this.props.handleClick}
          data-field="homeAddress"
        >
          {this.props.homeAddress}
        </button>
      ),
      city: (
        <button
          type="button"
          className="field city"
          onClick={this.props.handleClick}
          data-field="city"
        >
          {this.props.city}
        </button>
      ),
      postalCode: (
        <button
          type="button"
          className="field postal-code"
          onClick={this.props.handleClick}
          data-field="postalCode"
        >
          {this.props.postalCode}
        </button>
      ),
    };

    if (this.props.homeAddress === "form") {
      addressElements.homeAddress = (
        <input
          type="text"
          name="homeAddress"
          placeholder="123 Main St"
          onKeyDown={this.props.handleSubmit}
          autoFocus
        />
      );
    }

    if (this.props.city === "form") {
      addressElements.city = (
        <input
          type="text"
          name="city"
          placeholder="Citysville, ST"
          onKeyDown={this.props.handleSubmit}
          autoFocus
        />
      );
    }

    if (this.props.postalCode === "form") {
      addressElements.postalCode = (
        <input
          type="text"
          name="postalCode"
          placeholder="12345"
          onKeyDown={this.props.handleSubmit}
          autoFocus
        />
      );
    }

    return (
      <div className="address">
        {addressElements.homeAddress}
        {addressElements.city}
        {addressElements.postalCode}
      </div>
    );
  }
}

export default Address;
