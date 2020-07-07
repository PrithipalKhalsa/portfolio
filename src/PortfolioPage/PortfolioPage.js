import React, { useState, useEffect } from "react";

import Career from './Career/Career';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import Navigation from './Navigation/Navigation';
import Bio from './Bio/Bio';

import './PortfolioPage.css';

const PortfolioPage = () => {
  const [frame, toggleFrame] = useState("Bio");

  const switchFrame=(name)=>{
    toggleFrame(name)
  }


  return (
<div className="PortfolioPage">
  <Navigation switchFrame={switchFrame} frame={frame}/>
<div className="frame">
  {(frame==="Bio")?<Bio />:null}
  {(frame==="Projects")?<Projects />:null}
  {(frame==="Career")?<Career />:null}
  {(frame==="Contact")?<Contact />:null}
  {(frame==="Resume")?<Resume />:null}

</div>

</div>
  );
}

export default PortfolioPage;
