import React from "react";
import resume from "../../documents/SWillrodt_Resume.pdf"

const Resume = () => {

  return (
    <section  className="resume-wrapper">
      <div>
        <h2 className="resume h3">Full-Stack Skill Summary</h2>
        <p className="resume">View/download my complete <a href={resume}>resume (PDF)</a></p>
        <ul>
          <h3>Front-end Proficiencies</h3>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Mobile-responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <br></br>
        <ul>
          <h3>Back-end Proficiencies</h3>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;