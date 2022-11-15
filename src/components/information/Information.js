import React, { Component } from 'react';

function Information(props) {
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [homeAddress, setHomeAddress] = useState("123 Main St.");
  const [city, setCity] = useState("Citysville, ST");
  const [postalCode, setPostalCode] = useState("12345");

  return (
    <Name
      firstName={firstName}
      lastName={lastName}
    />
    <Address
      homeAddress={homeAddress}
      city={city}
      postalCode={postalCode}
    />
    )
}

class Information extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "First Name",
      lastName: "Last Name",
      homeAddress: "123 Main St",
      city: "Cityville, ST",
      postalCode: "12345",
    }
  }
}