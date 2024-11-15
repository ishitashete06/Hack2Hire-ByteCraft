import React from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import freelancerImg from '../assets/freelancer.jpg'; 
import project1 from '../assets/webdev.jpg'
import project2 from '../assets/erp.jpg'
import project3 from '../assets/crm.jpg'


function Home() {
  const navigate = useNavigate();

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
        <h1 className="sectionTitle">Explore Categories</h1>
        <div className="categories">
          <div className="category-card" onClick={() => navigate('/swipe-project')}>
            <span>💻</span>
            <h3>Web Development</h3>
            <p>Build and optimize websites.</p>
          </div>
          <div className="category-card" onClick={() => navigate('/graphic-design')}>
            <span>🖌️</span>
            <h3>Graphic Design</h3>
            <p>Create stunning visuals.</p>
          </div>
          <div className="category-card" onClick={() => navigate('/marketing')}>
            <span>📈</span>
            <h3>Marketing</h3>
            <p>Boost your brand's presence.</p>
          </div>
        </div>

        <h1 className="sectionTitle">Recommended Projects</h1>
        <div className="projects">
          <div className="project-card"> {/* Placeholder for project 1 */}
            <img src={project1} alt="Website Development" /> {/* Replace with actual images */}
            <h4>Website Development for Warehouse Advertising</h4>
          </div>
          <div className="project-card"> {/* Placeholder for project 2 */}
            <img src={project2} alt="project 2" /> {/* Replace with actual images */}
            <h4>CRM tools for managing customer interactions</h4>
          </div>
          <div className="project-card"> {/* Placeholder for project 3 */}
            <img src={project3} alt="project 3" /> {/* Replace with actual images */}
            <h4>ERP tool to manage core business processes</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
