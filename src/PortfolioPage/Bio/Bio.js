import React, { useState, useEffect } from "react";

import './Bio.css';


const Bio = () => {
const skills=["Javascript", "Node.js", "React.js", "SASS", "Python", "Django", "C/C++", "Java", "SQL", "NoSQL", "PHP", "AWS","GCloud","Docker","Agile SDLC","Selenium"]
const otherSkills=["Public Speaking","Writing", "Wilderness First Aid", "Diplomatic Communication","Flexibility",]
  return (

<div className="Bio">
<h1>Prithipal Khalsa</h1>

  <div className="bio-content">

  <div className=" bio-entry card-border  about-me">
  <h2>About me</h2>
  I graduated from San Diego State University in 2018 with a BS in computer science. I am a full stack Software Engineer with demonstrated history of working in the internet industry. I can build production enterprise level ready full stack applications with tight deadlines. At the moment I am most interested in expanding my skills into data science and AI. I enjoy making things look elegant and work intuitively.
  </div>
  <div className=" bio-entry card-border  languages">
  <h2>Skills and Languages</h2>
    <div className="stack">
    { skills && skills.map(function(item, i){
      return <p className="stack-item skill" key={i}>{item}</p>
    })}
    </div>

  </div>
  <div className="line"/>
  <div className=" bio-entry card-border  what-do">
  <h2>What I Can Do For You</h2>
  I can build applications with a back-end of clean readable code and a UI that is intuitive and simple.

  If you are interested in your own custom single page content management systems, similar to this one, please shoot me an email.
  </div>
  <div className=" bio-entry card-border  other-skills">
  <h2>Other Skills</h2>
  <div className="stack">
  { otherSkills&& otherSkills.map(function(item, i){
    return <p className="stack-item skill" key={i}>{item}</p>
  })}
  </div>  </div>
  </div>
</div>
  );
}

export default Bio;
