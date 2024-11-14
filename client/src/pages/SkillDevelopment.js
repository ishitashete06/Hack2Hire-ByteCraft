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

  return (
    <div className="skill-development">
      <h1>Skill Development</h1>
      <button className="skill-card" onClick={AdvanceWebDevCourse}>Advanced Web Development</button>
      <button className="skill-card" onClick={FrontEndDev}>Front End Development</button>
      <button className="skill-card" onClick={BackEndDev}>Back End Development</button>
      <button className="skill-card" onClick={MongoBasics}>MongoDB Basics</button>

    </div>
  );
}

export default SkillDevelopment;
