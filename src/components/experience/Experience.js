import React, { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import ExperienceEntry from "./ExperienceEntry";

import uniqid from "uniqid";
import "../../styles/Experience.css";

function Experience() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState(false);

  function addEntry(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    setEntries([...entries, Object.fromEntries(formData)]);
    setForm(false);
  }

  function deleteEntry(e) {
    const company = e.target.dataset.company;
    const index = entries.findIndex((entry) => entry.company === company);

    setEntries([...entries.slice(0, index), ...entries.slice(index + 1)]);
  }

  if (form) {
    return (
      <ExperienceForm hideForm={() => setForm(true)} addEntry={addEntry} />
    );
  } else {
    return (
      <div className="experience-entries">
        {entries.map((entry) => {
          return (
            <ExperienceEntry
              key={uniqid()}
              role={entry.role}
              company={entry.company}
              city={entry.city}
              startYear={entry.startYear}
              endYear={entry.endYear}
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

export default Experience;
