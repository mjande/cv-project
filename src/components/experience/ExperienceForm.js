import React from "react";

function ExperienceForm(props) {
  return (
    <form
      className="experience-form"
      data-field="experience"
      onSubmit={props.addEntry}
    >
      <label htmlFor="experience[role]">Role</label>
      <input
        type="text"
        id="experience[role]"
        name="role"
        placeholder="Manager"
      />

      <label htmlFor="experience[company]">Company Name</label>
      <input
        type="text"
        id="experience[company]"
        name="company"
        placeholder="Products Inc."
      />

      <label htmlFor="experience[city]">City</label>
      <input
        type="text"
        id="experience[city]"
        name="city"
        placeholder="Citysville, ST"
      />

      <div className="years">
        <div>
          <label htmlFor="experience[startYear]">Start</label>
          <input
            type="text"
            className="year"
            id="experience[startYear]"
            name="startYear"
            placeholder="2015"
          />
        </div>

        <div>
          <label htmlFor="experience[endYear]">End</label>
          <input
            type="text"
            className="year"
            id="experience[endYear]"
            name="endYear"
            placeholder="2021"
          />
        </div>
      </div>

      <div className="buttons">
        <button
          type="button"
          className="button cancel"
          onClick={props.hideForm}
        >
          Cancel
        </button>
        <button className="button save">Save</button>
      </div>
    </form>
  );
}

export default ExperienceForm;
