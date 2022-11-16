import React from "react";

function EducationForm(props) {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    props.addEntry(Object.fromEntries(formData));
  }

  return (
    <form
      className="education-form"
      data-field="education"
      onSubmit={handleSubmit}
    >
      <label htmlFor="education[name]">University Name</label>
      <input
        type="text"
        id="education[name]"
        name="name"
        placeholder="State University"
      />

      <div className="years">
        <div>
          <label htmlFor="education[start-year]">Started</label>
          <input
            type="text"
            className="year"
            id="education[start-year]"
            name="startYear"
            placeholder="2018"
          />
        </div>

        <div>
          <label htmlFor="education[end-year]">Graduated</label>
          <input
            type="text"
            className="year"
            id="education[end-year]"
            name="endYear"
            placeholder="2022"
          />
        </div>
      </div>

      <label htmlFor="education[degree]">Degree</label>
      <input
        type="text"
        id="education[degree]"
        name="degree"
        placeholder="Bachelor of Arts in CV Design"
      />

      <label htmlFor="education[gpa]">GPA</label>
      <input type="text" id="education[gpa]" name="gpa" placeholder="3.85" />

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

export default EducationForm;
