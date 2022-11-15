import React, { Component, useState } from "react";
import "../../styles/Name.css";

function Name(props) {
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [firstNameForm, setFirstNameForm] = useState(false);
  const [lastNameForm, setLastNameForm] = useState(false);

  let firstNameElement;
  let lastNameElement;

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (e.target.name === "firstName") {
        setFirstName(e.target.value);
        setFirstNameForm(false);
      } else if (e.target.name === "lastName") {
        setLastName(e.target.value);
        setLastNameForm(false);
      }
    }
  }

  if (firstNameForm) {
    firstNameElement = (
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onKeyDown={handleKeyDown}
        autoFocus
      />
    );
  } else {
    firstNameElement = (
      <button
        type="button"
        className="field firstName"
        id="first-name"
        onClick={() => setFirstNameForm(true)}
        data-field="firstName"
      >
        {firstName}
      </button>
    );
  }

  if (lastNameForm) {
    lastNameElement = (
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onKeyDown={handleKeyDown}
        autoFocus
      />
    );
  } else {
    lastNameElement = (
      <button
        type="button"
        className="field lastName"
        onClick={() => setLastNameForm(true)}
        data-field="lastName"
      >
        {lastName}
      </button>
    );
  }

  return (
    <div>
      {firstNameElement}
      {lastNameElement}
    </div>
  );
}

export default Name;
