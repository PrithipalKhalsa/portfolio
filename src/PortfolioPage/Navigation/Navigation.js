import React, { useState, useEffect } from "react";
import { slide as Menu } from 'react-burger-menu'


import './Navigation.css';
import me from'./me.jpeg'
import cv from '..//Resume/cv.pdf'
const Navigation = ({switchFrame,frame}) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 770);

   const updateMedia = () => {
     setDesktop(window.innerWidth > 770);
   };

   useEffect(() => {
     window.addEventListener("resize", updateMedia);
     return () => window.removeEventListener("resize", updateMedia);
   });

  return (

    <div>
  { !isDesktop &&
  <Menu >
  <div className="Navigation">

    <div className="bio"><div onClick={()=>switchFrame("Bio")}  className={["me",frame].join(' ')}><img  src="https://media-exp1.licdn.com/dms/image/C5603AQGJ_R6G7ihdqA/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=lNO9h5s4YT6Itep0pDuaMM6GWcmFgF_QjGQSFUy2Vho"/></div>
    <h2>Prithipal Khalsa</h2>
    <div>Software Engineer</div>
    </div>
    <div className="menu">
      <div className={["nav-item proj",frame].join(' ')}  onClick={()=>switchFrame("Projects")}>Projects</div>
      <a  href={cv}  target="_blank" ><div className={"nav-item res"}>CV</div></a>

      <div className={["nav-item car",frame].join(' ')}  onClick={()=>switchFrame("Career")}>Professional</div>
      <div className={["nav-item con",frame].join(' ')}  onClick={()=>switchFrame("Contact")}>Contact</div>
    </div>
    <div className="contact-menu">
    <a  target="_blank" href="https://www.linkedin.com/in/prithipal-khalsa-2b83a1133/">   <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
    <a  target="_blank" href="mailto:prithipalpsk@gmail.com">   <i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
    <a  target="_blank" href="https://github.com/PrithipalKhalsa">   <i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
    <a  target="_blank" href="https://www.instagram.com/principle_salsa/">  <i className="fa fa-instagram fa-2x " aria-hidden="true"></i></a>
    <a  target="_blank" href="https://www.facebook.com/prithipal.the.fish">   <i className="fa  fa-facebook-square fa-2x" aria-hidden="true"></i></a>
    </div>
  </div>
  </Menu>
}

  { isDesktop &&
<div className="Navigation">

  <div className="bio"><div onClick={()=>switchFrame("Bio")}  className={["me",frame].join(' ')}><img  src="https://media-exp1.licdn.com/dms/image/C5603AQGJ_R6G7ihdqA/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=lNO9h5s4YT6Itep0pDuaMM6GWcmFgF_QjGQSFUy2Vho"/></div>
  <h2>Prithipal Khalsa</h2>
  <div>Software Engineer</div>
  </div>
  <div className="menu">
    <div className={["nav-item proj",frame].join(' ')}  onClick={()=>switchFrame("Projects")}>Projects</div>
    <div className={["nav-item res",frame].join(' ')}  onClick={()=>switchFrame("Resume")}>CV</div>
    <div className={["nav-item car",frame].join(' ')}  onClick={()=>switchFrame("Career")}>Professional</div>
    <div className={["nav-item con",frame].join(' ')}  onClick={()=>switchFrame("Contact")}>Contact</div>
  </div>
  <div className="contact-menu">
  <a  target="_blank" href="https://www.linkedin.com/in/prithipal-khalsa-2b83a1133/">   <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
  <a  target="_blank" href="mailto:prithipalpsk@gmail.com">   <i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
  <a  target="_blank" href="https://github.com/PrithipalKhalsa">   <i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
  <a  target="_blank" href="https://www.instagram.com/principle_salsa/">  <i className="fa fa-instagram fa-2x " aria-hidden="true"></i></a>
  <a  target="_blank" href="https://www.facebook.com/prithipal.the.fish">   <i className="fa  fa-facebook-square fa-2x" aria-hidden="true"></i></a>
  </div>
</div>
}
</div>
  );
}

export default Navigation;
