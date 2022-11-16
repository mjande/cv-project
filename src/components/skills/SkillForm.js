import React from "react";

function SkillForm(props) {
  return (
    <form className="skill-form" data-field="skills" onSubmit={props.addEntry}>
      <label htmlFor="skill[name]">New Skill</label>
      <input type="text" id="skill[name]" name="name" placeholder="React" />

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

export default SkillForm;
