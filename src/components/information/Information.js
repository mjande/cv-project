import React, { useState } from "react";
import Name from "./Name";
import Address from "./Address";

function Information(props) {
  const [homeAddress, setHomeAddress] = useState("123 Main St.");
  const [city, setCity] = useState("Citysville, ST");
  const [postalCode, setPostalCode] = useState("12345");

  return (
    <div>
      <Name />
      <Address homeAddress={homeAddress} city={city} postalCode={postalCode} />
    </div>
  );
}

export default Information;
