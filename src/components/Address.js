import React, { useState } from "react";
import "../styles/Address.css";

function Address() {
  const [homeAddressForm, setHomeAddressForm] = useState(false);
  const [cityForm, setCityForm] = useState(false);
  const [postalCodeForm, setPostalCodeForm] = useState(false);

  const [homeAddress, setHomeAddress] = useState("123 Main St.");
  const [city, setCity] = useState("Citysville, ST");
  const [postalCode, setPostalCode] = useState("12345");

  let homeAddressElement;
  let cityElement;
  let postalCodeElement;

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (e.target.name === "homeAddress") {
        setHomeAddress(e.target.value);
        setHomeAddressForm(false);
      } else if (e.target.name === "city") {
        setCity(e.target.value);
        setCityForm(false);
      } else if (e.target.name === "postalCode") {
        setPostalCode(e.target.value);
        setPostalCodeForm(false);
      }
    }
  }

  if (homeAddressForm) {
    homeAddressElement = (
      <input
        type="text"
        name="homeAddress"
        placeholder={homeAddress}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    );
  } else {
    homeAddressElement = (
      <button
        type="button"
        className="field address"
        onClick={() => setHomeAddressForm(true)}
        data-field="homeAddress"
      >
        {homeAddress}
      </button>
    );
  }

  if (cityForm) {
    cityElement = (
      <input
        type="text"
        name="city"
        placeholder="Citysville, ST"
        onKeyDown={handleKeyDown}
        autoFocus
      />
    );
  } else {
    cityElement = (
      <button
        type="button"
        className="field city"
        onClick={() => setCityForm(true)}
        data-field="city"
      >
        {city}
      </button>
    );
  }

  if (postalCodeForm) {
    postalCodeElement = (
      <input
        type="text"
        name="postalCode"
        placeholder="12345"
        onKeyDown={handleKeyDown}
        autoFocus
      />
    );
  } else {
    postalCodeElement = (
      <button
        type="button"
        className="field postal-code"
        onClick={() => setPostalCodeForm(true)}
        data-field="postalCode"
      >
        {postalCode}
      </button>
    );
  }

  return (
    <div className="address">
      {homeAddressElement}
      {cityElement}
      {postalCodeElement}
    </div>
  );
}

export default Address;
