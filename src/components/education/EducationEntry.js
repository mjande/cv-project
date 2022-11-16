import React from "react";

function EducationEntry(props) {
  return (
    <article className="entry">
      <div className="education[name]">
        <strong>{props.name}</strong>
      </div>
      <div className="education[degree]">{props.degree}</div>
      <div className="education[gpa]">{props.gpa}</div>
      <div className="education[years]">
        {props.startYear} - {props.endYear}
      </div>
      <button
        type="button"
        onClick={props.deleteEntry}
        data-degree={props.degree}
        data-field="education"
      >
        Delete
      </button>
    </article>
  );
}

export default EducationEntry;
