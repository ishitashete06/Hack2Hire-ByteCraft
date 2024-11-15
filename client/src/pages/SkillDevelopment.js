import React from 'react';
import '../styles/SkillDevelopment.css';

import AdvanceWebDevCourseImg from '../assets/adv-web-dev-course.jpg';  
import FrontEndDevCourseImg from '../assets/frontend-dev-course.jpg'
import BackEndDevCourseImg from '../assets/backend-dev-course.jpg'
import MongoBasicsCourseImg from '../assets/mongodb-course.jpg';

import LayoutBasicsImg from '../assets/layout-basics-course.jpg';
import TypographyImg from '../assets/typography-course.jpg';
import ColorTheoryImg from '../assets/color-theory-course.jpg';
import VisualHierarchyImg from '../assets/visual-hierarchy-course.jpg';

import Marketing101 from '../assets/marketing-basics-course.jpg';
import KnowYourAudienceImg from '../assets/know-audience-course.jpg';
import ContentMarketingImg from '../assets/content-marketing-course.jpg';
import socialMediaMarketingImg from '../assets/social-media-marketing-course.jpg';

function SkillDevelopment() {
  const AdvanceWebDevCourse = () => {
    window.open('https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&si=_t9NnARer_npaU9n');
  };
  const FrontEndDev = () => {
    window.open('https://youtu.be/zJSY8tbf_ys?si=DAZo0KivDpWbr5i8');
  };
  const BackEndDev = () => {
    window.open('https://www.youtube.com/watch?v=Q-icS7yZz5k');
  };
  const MongoBasics = () => {
    window.open('https://www.youtube.com/watch?v=-56x56UppqQ&themeRefresh=1');
  };
  const LayoutBasics = () => {
    window.open('https://www.youtube.com/watch?v=6h3R-7FUnEY');
  };
  const Typography = () => {
    window.open('https://www.youtube.com/watch?v=k3tCjErPhM0');
  };
  const ColorTheory = () => {
    window.open('https://www.youtube.com/watch?v=_2LLXnUdUIc');
  };
  const VisualHierarchy = () => {
    window.open('https://www.youtube.com/watch?v=DBHBmeNhYrY');
  };
  const basicMarketing = () => {
    window.open('https://blog.hubspot.com/marketing/marketing-101');
  };
  const targetAudience = () => {
    window.open('https://youtu.be/HGbq-8z1fs8?si=hM32m5d71q-Qh-JX');
  };
  const contentMarketing = () => {
    window.open('https://youtu.be/0R_3iarc8IA?si=M8PsG5tHPfB6Z5Rr');
  };
  const socialMediaMarketing = () => {
    window.open('https://www.youtube.com/watch?v=6zAkbX0pXbA');
  };

  return (
    <div className="skill-development">
      <h1>Skill Development</h1>

      <h2>Coding Mastery</h2>
      <div className="skills">
        <div className="skill-card" onClick={AdvanceWebDevCourse}>
          <img className="course-image" src={AdvanceWebDevCourseImg} alt="Advanced Web Dev Course" />
          <div className="course-title">Advanced Web Development</div>
        </div>
        <div className="skill-card" onClick={FrontEndDev}>
          <img className="course-image" src={FrontEndDevCourseImg} alt="Front End Dev" />
          <div className="course-title">Front End Development</div>
        </div>
        <div className="skill-card" onClick={BackEndDev}>
          <img className="course-image" src={BackEndDevCourseImg} alt="Back End Dev" />
          <div className="course-title">Back End Development</div>
        </div>
        <div className="skill-card" onClick={MongoBasics}>
          <img className="course-image" src={MongoBasicsCourseImg} alt="MongoDB Basics" />
          <div className="course-title">MongoDB Basics</div>
        </div>
      </div>

      <h2>Become a Graphic Guru</h2>
      <div className="skills">
        <div className="graphic-skill-card" onClick={LayoutBasics}>
          <img className="course-image" src={LayoutBasicsImg}  alt="Layout Basics" />
          <div className="course-title">Layout Basics</div>
        </div>
        <div className="graphic-skill-card" onClick={Typography}>
          <img className="course-image" src={TypographyImg}  alt="Typography" />
          <div className="course-title">Typography for Designers</div>
        </div>
        <div className="graphic-skill-card" onClick={ColorTheory}>
          <img className="course-image" src={ColorTheoryImg}  alt="Color Theory" />
          <div className="course-title">Color Theory for Beginners</div>
        </div>
        <div className="graphic-skill-card" onClick={VisualHierarchy}>
          <img className="course-image" src={VisualHierarchyImg}  alt="Visual Hierarchy" />
          <div className="course-title">Visual Hierarchy in Design</div>
        </div>
      </div>

      <h2>Marketing 101</h2>
      <div className="skills">
        <div className="marketing-skill-card" onClick={basicMarketing}>
          <img className="course-image" src={Marketing101} alt="4 P's of Marketing" />
          <div className="course-title">4 P's of Marketing</div>
        </div>
        <div className="marketing-skill-card" onClick={targetAudience}>
          <img className="course-image" src={KnowYourAudienceImg}  alt="Know Your Target Audience" />
          <div className="course-title">Know Your Target Audience</div>
        </div>
        <div className="marketing-skill-card" onClick={contentMarketing}>
          <img className="course-image" src={ContentMarketingImg} alt="Content Marketing" />
          <div className="course-title">Content Marketing</div>
        </div>
        <div className="marketing-skill-card" onClick={socialMediaMarketing}>
          <img className="course-image" src={socialMediaMarketingImg} alt="Social Media Marketing" />
          <div className="course-title">Social Media Marketing</div>
        </div>
      </div>
    </div>
  );
}

export default SkillDevelopment;
