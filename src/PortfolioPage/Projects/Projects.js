import React, { useState, useEffect } from "react";

import './Projects.css';
import Card from './Card/Card'
let socket;
//location==url params
const Projects = () => {
  const testData=[{
    title: "Matchy Words",
    description:"Inspired by the hours of zoom sessions during the Covid-19 isolation: a real time browser multiplayer game. Essentially a free form apples to apples game. ",
    stack:["Node.js","React.js","express.js","Socket.io","Gcloud","Nodemailer"],
    link:"https://matchywords.com/",
    github:"https://github.com/PrithipalKhalsa/matchy-words"
  },
    {
    title: "Spottvenn",
    description:"STATUS:DOWN. Generates a playlist for based on the similar tracks between you and another spotify user.",
    stack:["Python","Django","Spotify API","Digital Ocean"],
    link:"http://www.spottvenn.com/",
    github:"https://github.com/PrithipalKhalsa/spotvenn"

  }]
  return (

<div className="Projects">
<div className="project-group">
               {testData.map(({stack,title,description,link,github}) =>
                  <div className="card-holders" key={title}><Card stack={stack} title={title}description={description} link={link} github={github}/></div>)}
             </div>

</div>
  );
}

export default Projects;
