import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";

const SavedProject = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const navigate = useNavigate();

  // Fetch saved projects from the backend
  const fetchSavedProjects = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/saved-projects", {
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        setSavedJobs(data.savedProjects);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Failed to fetch saved projects:", error);
    }
  };

  useEffect(() => {
    fetchSavedProjects();
  }, []);

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Saved Jobs</h1>
        {savedJobs.length > 0 ? (
          savedJobs.map((job, index) => (
            <div key={index} style={styles.card}>
              <img
                src={job.projectId.company.logo || "default-logo-url.jpg"}
                alt="Company Logo"
                style={styles.logo}
              />
              <div style={styles.details}>
                <h2 style={styles.title}>{job.projectId.title}</h2>
                <p>
                  <strong>Company:</strong> {job.projectId.company.name}
                </p>
                <p>
                  <strong>Description:</strong> {job.projectId.description}
                </p>
                <p>
                  <strong>Location:</strong> {job.projectId.location}
                </p>
                <p>
                  <strong>Salary:</strong> ${job.projectId.salary}
                </p>
                <p>
                  <strong>Experience:</strong>{" "}
                  {job.projectId.experienceLevel} years
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href={job.projectId.company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                  >
                    {job.projectId.company.website}
                  </a>
                </p>
                <div style={styles.buttons}>
                  <Button
                    onClick={() => navigate(`/description/${job.projectId._id}`)}
                    variant="outline"
                  >
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={styles.noJobs}>
            No saved jobs yet. Start swiping right on jobs you like!
          </p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "20px", backgroundColor: "#F7EFE5", fontFamily: "Arial, sans-serif" },
  heading: { fontSize: "2rem", color: "#333", marginBottom: "20px" },
  card: { display: "flex", alignItems: "flex-start", backgroundColor: "#E2BFD9", borderRadius: "8px", padding: "20px", marginBottom: "15px", boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)" },
  logo: { width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px", marginRight: "20px" },
  details: { flex: 1 },
  title: { fontSize: "1.5rem", color: "#333", marginBottom: "10px" },
  link: { color: "#0066cc", fontWeight: "bold", textDecoration: "none" },
  noJobs: { fontSize: "1rem", color: "#555" },
  buttons: { display: "flex", gap: "10px", marginTop: "15px" },
};

export default SavedProject;
