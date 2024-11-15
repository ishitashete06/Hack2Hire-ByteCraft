import React from 'react';
import '../styles/Home.css';
import { useNavigate, useLocation } from 'react-router-dom';
import freelancerImg from '../assets/freelancer.jpg'; 
import project1 from '../assets/webdev.jpg';
import project2 from '../assets/erp.jpg';
import project3 from '../assets/crm.jpg';
import { useEffect } from 'react';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location.state]);
  const navigateToSkillDevelopment = (category) => {
    navigate('/skill-development', { state: { category } });
  };

  return (
    <div>
      <div className="welcomeBanner">
        <div className="welcomeText">
          <h2>Discover Top projects</h2>
          <p>Connect with talented projects from around the world.</p>
        </div>
        <img src={freelancerImg} alt="Freelancer" className="bannerImage" />
      </div>

      <div className="home">
        <h1 className="sectionTitle">Explore Courses</h1>
        <div className="categories">
          <div className="category-card" onClick={() => navigate('/skill-development', { state: { selectedCategory: 'Coding' } })}>
            <span>💻</span>
            <h3>Web Development</h3>
            <p>Learn to build and optimize websites.</p>
          </div>
          <div className="category-card" onClick={() => navigate('/skill-development', { state: { selectedCategory: 'Graphic Designer' } })}>
            <span>🖌️</span>
            <h3>Graphic Design</h3>
            <p>Learn to create stunning visuals.</p>
          </div>
          <div className="category-card" onClick={() => navigate('/skill-development', { state: { selectedCategory: 'Marketing' } })}>
            <span>📈</span>
            <h3>Marketing</h3>
            <p>Boost your brand's presence.</p>
          </div>
        </div>

        <h1 className="sectionTitle">Recommended Projects</h1>
        <div className="projects">
          <div className="project-card">
            <img src={project1} alt="Website Development" />
            <h4>Website Development for Warehouse Advertising</h4>
          </div>
          <div className="project-card">
            <img src={project2} alt="CRM Tools" />
            <h4>CRM tools for managing customer interactions</h4>
          </div>
          <div className="project-card">
            <img src={project3} alt="ERP Tools" />
            <h4>ERP tool to manage core business processes</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
