import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import "../styles/SwipeProject.css";
import { FaBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedJobs, setSavedJobs] = useState([]);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, [dispatch]);

  // Save a job to the backend
  const saveJobToBackend = async (jobId) => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/saved-projects/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include credentials (cookies) with the request
        body: JSON.stringify({ projectId: jobId }),
      });
  
      const data = await response.json();
      if (!data.success) {
        console.error("Failed to save project:", data.message);
      } else {
        console.log("Project saved successfully:", data.savedProject);
      }
    } catch (error) {
      console.error("Error saving project to backend:", error);
    }
  };
  
  const swipe = (direction) => {
    if (currentIndex >= allJobs.length) return;
    setSwipeDirection(direction);

    if (direction === "swipe-right") {
      const jobToSave = allJobs[currentIndex];
      setSavedJobs((prev) => [...prev, jobToSave]);
      saveJobToBackend(jobToSave._id);
    }

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 <= allJobs.length ? prevIndex + 1 : prevIndex
      );
      setSwipeDirection(null);
    }, 500);
  };

  const currentJob = currentIndex < allJobs.length ? allJobs[currentIndex] : null;
  const hasMoreJobs = currentIndex < allJobs.length;

  const handleSavedProjectsClick = () => {
    navigate("/saved-projects", { state: { savedJobs } });
  };

  return (
    <div>
      <Navbar />
      <div className="swipe-container">
        <header className="swipe-header">
          <h1>Explore Projects ({allJobs.length})</h1>
          <p>
            Your right-swiped projects will be available in your dashboard.
            Discover exciting opportunities below!
          </p>
          <FaBookmark className="saved-icon" onClick={handleSavedProjectsClick} />
        </header>

        {hasMoreJobs && currentJob ? (
          <div className={`card ${swipeDirection}`}>
            <div className="project-image-container">
              <img
                src={currentJob.company.logo || "default-logo-url.jpg"}
                alt={currentJob.company.name}
                className="project-image"
              />
            </div>
            <div className="card-content">
              <h2>{currentJob.title}</h2>
              <p>{currentJob.description}</p>
              <div className="details">
                <p>
                  <strong>Company:</strong> {currentJob.company.name}
                </p>
                <p>
                  <strong>Location:</strong> {currentJob.location}
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href={currentJob.company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {currentJob.company.website}
                  </a>
                </p>
                <p>
                  <strong>Salary:</strong> ${currentJob.salary}
                </p>
                <p>
                  <strong>Experience:</strong> {currentJob.experienceLevel} years
                </p>
              </div>
            </div>
            <div className="buttons">
              <button
                onClick={() => swipe("swipe-left")}
                className="swipe-btn left"
              >
                ❌
              </button>
              <button
                onClick={() => swipe("swipe-right")}
                className="swipe-btn right"
              >
                ✔
              </button>
            </div>
          </div>
        ) : (
          <div className="end-card">
            <h2>No more projects to explore</h2>
            <p>
              Time to level up your skills! Click the button below to dive in
              and discover more opportunities!
            </p>
            <button
              className="explore-btn"
              onClick={() => navigate("/skill-development")}
            >
              Explore Skills
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
