import React from "react";

function ExperienceEntry(props) {
  return (
    <article className="entry">
      <div className="experience[role]">
        <strong>{props.role}</strong>
      </div>
      <div className="experience[company]">{props.company}</div>
      <div className="experience[city]">{props.city}</div>
      <div className="experience[years]">
        {props.startYear} - {props.endYear}
      </div>
      <button
        type="button"
        onClick={props.deleteEntry}
        data-company={props.company}
        data-field="experience"
      >
        Delete
      </button>
    </article>
  );
}

export default ExperienceEntry;
