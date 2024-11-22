import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import { Button } from '../ui/button';

const SavedProject = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { savedJobs } = location.state || { savedJobs: [] };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Saved Jobs</h1>
        {savedJobs.length > 0 ? (
          savedJobs.map((job, index) => (
            <div key={index} style={styles.card}>
              <img
                src={job.company.logo || 'default-logo-url.jpg'}
                alt="Company Logo"
                style={styles.logo}
              />
              <div style={styles.details}>
                <h2 style={styles.title}>{job.title}</h2>
                <p><strong>Company:</strong> {job.company.name}</p>
                <p><strong>Description:</strong> {job.description}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Salary:</strong> ${job.salary}</p>
                <p><strong>Experience:</strong> {job.experienceLevel} years</p>
                <p>
                  <strong>Website:</strong>{' '}
                  <a
                    href={job.company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                  >
                    {job.company.website}
                  </a>
                </p>
                <div style={styles.buttons}>
                  <Button 
                    onClick={() => navigate(`/description/${job._id}`)} 
                    variant="outline"
                  >
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={styles.noJobs}>No saved jobs yet. Start swiping right on jobs you like!</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '20px', backgroundColor: '#F7EFE5', fontFamily: 'Arial, sans-serif' },
  heading: { fontSize: '2rem', color: '#333', marginBottom: '20px' },
  card: { display: 'flex', alignItems: 'flex-start', backgroundColor: '#E2BFD9', borderRadius: '8px', padding: '20px', marginBottom: '15px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)' },
  logo: { width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', marginRight: '20px' },
  details: { flex: 1 },
  title: { fontSize: '1.5rem', color: '#333', marginBottom: '10px' },
  link: { color: '#0066cc', fontWeight: 'bold', textDecoration: 'none' },
  noJobs: { fontSize: '1rem', color: '#555' },
  buttons: { display: 'flex', gap: '10px', marginTop: '15px' },
};

export default SavedProject;
