import React, { Component } from "react";

class SkillForm extends Component {
  render() {
    return (
      <form
        className="skill-form"
        data-field="skills"
        onSubmit={this.props.handleSubmit}
      >
        <label htmlFor="skill[name]">New Skill</label>
        <input type="text" id="skill[name]" name="name" placeholder="React" />

        <div className="buttons">
          <button
            type="button"
            className="button cancel"
            onClick={this.props.hideForm}
          >
            Cancel
          </button>
          <button className="button save">Save</button>
        </div>
      </form>
    );
  }
}

export default SkillForm;
