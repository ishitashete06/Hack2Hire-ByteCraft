// src/pages/SkillDevelopment.js
import React from 'react';
import '../styles/SkillDevelopment.css';

//since we are redirecting to an external link, we cant use react-router-dom
//useNavigate is for internal navigation only

function SkillDevelopment() {
  const AdvanceWebDevCourse = () => {
    window.open('https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&si=_t9NnARer_npaU9n'); 
  };
  const FrontEndDev = () =>{
    window.open('https://youtu.be/zJSY8tbf_ys?si=DAZo0KivDpWbr5i8');
  }
  const BackEndDev = () => {
    window.open('https://www.youtube.com/watch?v=Q-icS7yZz5k');
  }
  const MongoBasics = () => {
    window.open('https://youtu.be/ofme2o29ngU?si=cDiQq_dRV8aDSIWC');
  }
  const LayoutBasics = () =>{
    window.open('https://www.youtube.com/watch?v=6h3R-7FUnEY')
  }
  const Typography = () =>{
    window.open('https://www.youtube.com/watch?v=k3tCjErPhM0')
  }

  const ColorTheory=() =>{
    window.open('https://www.youtube.com/watch?v=_2LLXnUdUIc')
  }

  const VisualHierarchy=() =>{
    window.open('https://www.youtube.com/watch?v=6LCGCDvdlco')
  }
  
  const basicMarketing=() =>{
    window.open('https://blog.hubspot.com/marketing/marketing-101');
  }

  const targetAudience= ()=>{
    window.open('https://www.youtube.com/watch?v=9_J6JXpP8OY');
  }

  const contentMarketing= ()=>{
    window.open('https://www.youtube.com/watch?v=eXEKdrkXyA4');
  }

  const socialMediaMarketing= ()=>{
    window.open('https://www.youtube.com/watch?v=6zAkbX0pXbA');
  }
  


  return (
    <div className="skill-development">
      <h1>Skill Development</h1>
      <button className="skill-card" onClick={AdvanceWebDevCourse}>Advanced Web Development</button>
      <button className="skill-card" onClick={FrontEndDev}>Front End Development</button>
      <button className="skill-card" onClick={BackEndDev}>Back End Development</button>
      <button className="skill-card" onClick={MongoBasics}>MongoDB Basics</button>

      <button className="graphic-skill-card" onClick={LayoutBasics}>Layout Basics</button>
      <button className="graphic-skill-card" onClick={Typography}>Typography for Designers</button>
      <button className="graphic-skill-card" onClick={ColorTheory}>Color Theory for Beginners</button>
      <button className="graphic-skill-card" onClick={VisualHierarchy}>Visual Hierarchy in Design</button>

      <button className="marketing-skill-card" onClick={basicMarketing}>4 P's of Marketing</button>
      <button className="marketing-skill-card" onClick={targetAudience}>Know Your Target Audience</button>
      <button className="marketing-skill-card" onClick={contentMarketing}>Content Marketing</button>
      <button className="marketing-skill-card" onClick={socialMediaMarketing}>Social Media Marketing for Beginners</button>



    </div>
  );
}

export default SkillDevelopment;
