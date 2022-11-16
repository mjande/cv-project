import React from "react";

function SkillEntry(props) {
  return (
    <li className="skill">
      {props.name}
      <button
        type="button"
        onClick={props.deleteEntry}
        data-skill={props.name}
        data-field="skills"
      >
        Delete
      </button>
    </li>
  );
}

export default SkillEntry;
