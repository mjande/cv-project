import React from "react";
import Name from "./Name";
import Address from "./Address";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";
import "../styles/Cv.css";

function Cv() {
  return (
    <div className="Cv">
      <Name />
      <Address />
      <hr />

      <h2>Education</h2>
      <Education />
      <hr />

      <h2>Work Experience</h2>
      <Experience />
      <hr />

      <h2>Skills</h2>
      <Skills />
    </div>
  );
}

export default Cv;
