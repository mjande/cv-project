import React, { useState } from "react";
import EducationForm from "./EducationForm";
import EducationEntry from "./EducationEntry";

import uniqid from "uniqid";
import "../../styles/Education.css";

function Education() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState(false);

  function addEntry(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    setEntries([...entries, Object.fromEntries(formData)]);
    setForm(false);
  }

  function deleteEntry(e) {
    const degree = e.target.dataset.degree;
    const index = entries.findIndex((entry) => entry.degree === degree);

    setEntries([...entries.slice(0, index), ...entries.slice(index + 1)]);
  }

  if (form) {
    return (
      <EducationForm hideForm={() => setForm(false)} addEntry={addEntry} />
    );
  } else {
    return (
      <div className="education-entries">
        {entries.map((entry) => {
          return (
            <EducationEntry
              key={uniqid()}
              name={entry.name}
              startYear={entry.startYear}
              endYear={entry.endYear}
              degree={entry.degree}
              gpa={entry.gpa}
              deleteEntry={deleteEntry}
            />
          );
        })}
        <button className="button" onClick={() => setForm(true)}>
          Add +
        </button>
      </div>
    );
  }
}

export default Education;
