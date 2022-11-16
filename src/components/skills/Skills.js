import React, { useState } from "react";
import SkillForm from "./SkillForm";
import SkillEntry from "./SkillEntry";

import "../../styles/Skills.css";
import uniqid from "uniqid";

function Skills() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState(false);

  function addEntry(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const skill = formData.get("name");
    setEntries([...entries, skill]);
    setForm(false);
  }

  function deleteEntry(e) {
    const skill = e.target.dataset.skill;
    const index = entries.findIndex((entry) => entry === skill);

    setEntries([...entries.slice(0, index), ...entries.slice(index + 1)]);
  }

  if (form) {
    return <SkillForm hideForm={() => setForm(false)} addEntry={addEntry} />;
  } else {
    return (
      <div className="skills-entries">
        <ul>
          {entries.map((entry) => {
            return (
              <SkillEntry
                key={uniqid()}
                name={entry}
                deleteEntry={deleteEntry}
              />
            );
          })}
        </ul>
        <button className="button" onClick={() => setForm(true)}>
          Add +
        </button>
      </div>
    );
  }
}

export default Skills;
