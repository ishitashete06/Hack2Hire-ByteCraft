import React, { useState, useEffect } from 'react';
import '../styles/SkillDevelopment.css';
import { useLocation, useNavigate } from 'react-router-dom';

import AdvanceWebDevCourseImg from '../assets/adv-web-dev-course.jpg';
import FrontEndDevCourseImg from '../assets/frontend-dev-course.jpg';
import BackEndDevCourseImg from '../assets/backend-dev-course.jpg';
import MongoBasicsCourseImg from '../assets/mongodb-course.jpg';
import Navbar from './shared/Navbar';
import LayoutBasicsImg from '../assets/layout-basics-course.jpg';
import TypographyImg from '../assets/typography-course.jpg';
import ColorTheoryImg from '../assets/color-theory-course.jpg';
import VisualHierarchyImg from '../assets/visual-hierarchy-course.jpg';

import Marketing101 from '../assets/marketing-basics-course.jpg';
import KnowYourAudienceImg from '../assets/know-audience-course.jpg';
import ContentMarketingImg from '../assets/content-marketing-course.jpg';
import socialMediaMarketingImg from '../assets/social-media-marketing-course.jpg';

function SkillDevelopment() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');

  useEffect(() => {
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location.state]);

  const courses = [
    {
      category: 'Coding',
      title: 'Advanced Web Development',
      img: AdvanceWebDevCourseImg,
      rating: 4.5,
      onClick: () => window.open('https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w'),
    },
    {
      category: 'Coding',
      title: 'Front End Development',
      img: FrontEndDevCourseImg,
      rating: 4.0,
      onClick: () => window.open('https://youtu.be/zJSY8tbf_ys'),
    },
    {
      category: 'Coding',
      title: 'Back End Development',
      img: BackEndDevCourseImg,
      rating: 4.2,
      onClick: () => window.open('https://www.youtube.com/watch?v=Q-icS7yZz5k'),
    },
    {
      category: 'Coding',
      title: 'MongoDB Basics',
      img: MongoBasicsCourseImg,
      rating: 3.8,
      onClick: () => window.open('https://www.youtube.com/watch?v=-56x56UppqQ&themeRefresh=1'),
    },
    {
      category: 'Graphic Designer',
      title: 'Layout Basics',
      img: LayoutBasicsImg,
      rating: 4.5,
      onClick: () => window.open('https://www.youtube.com/watch?v=6h3R-7FUnEY'),
    },
    {
      category: 'Graphic Designer',
      title: 'Typography for Designers',
      img: TypographyImg,
      rating: 3.9,
      onClick: () => window.open('https://www.youtube.com/watch?v=k3tCjErPhM0'),
    },
    {
      category: 'Graphic Designer',
      title: 'Color Theory for Beginners',
      img: ColorTheoryImg,
      rating: 4.3,
      onClick: () => window.open('https://www.youtube.com/watch?v=_2LLXnUdUIc'),
    },
    {
      category: 'Graphic Designer',
      title: 'Visual Hierarchy in Design',
      img: VisualHierarchyImg,
      rating: 4.0,
      onClick: () => window.open('https://www.youtube.com/watch?v=DBHBmeNhYrY'),
    },
    {
      category: 'Marketing',
      title: "4 P's of Marketing",
      img: Marketing101,
      rating: 4.6,
      onClick: () => window.open('https://blog.hubspot.com/marketing/marketing-101'),
    },
    {
      category: 'Marketing',
      title: 'Know Your Target Audience',
      img: KnowYourAudienceImg,
      rating: 4.1,
      onClick: () => window.open('https://youtu.be/HGbq-8z1fs8?si=hM32m5d71q-Qh-JX'),
    },
    {
      category: 'Marketing',
      title: 'Content Marketing',
      img: ContentMarketingImg,
      rating: 3.7,
      onClick: () => window.open('https://youtu.be/0R_3iarc8IA?si=M8PsG5tHPfB6Z5Rr'),
    },
    {
      category: 'Marketing',
      title: 'Social Media Marketing',
      img: socialMediaMarketingImg,
      rating: 4.8,
      onClick: () => window.open('https://www.youtube.com/watch?v=6zAkbX0pXbA'),
    },
  ];

  const filteredCourses = courses
    .filter((course) => selectedCategory === 'All' || course.category === selectedCategory)
    .filter((course) => selectedRating === 'All' || course.rating >= parseFloat(selectedRating));

  return (
    <>
      <Navbar />
    <div className="skill-development">
      <div className="filter-container">
        <i className="fas fa-filter filter-icon"></i>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="filter-dropdown"
        >
          <option value="All">All Topics</option>
          <option value="Coding">Coding</option>
          <option value="Graphic Designer">Graphic Design</option>
          <option value="Marketing">Marketing</option>
        </select>

        <select
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          className="filter-dropdown"
        >
          <option value="All">All Ratings</option>
          <option value="4.5">4.5 & up</option>
          <option value="4.0">4.0 & up</option>
          <option value="3.5">3.5 & up</option>
          <option value="3.0">3.0 & up</option>
        </select>
      </div>

      <div className="skills">
        {filteredCourses.map((course, index) => (
          <div className="skill-card" key={index} onClick={course.onClick}>
            <img className="course-image" src={course.img} alt={course.title} />
            <div className="course-title">{course.title}</div>
            <div className="course-rating">Rating: {course.rating}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default SkillDevelopment;


