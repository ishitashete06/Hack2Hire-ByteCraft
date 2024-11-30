import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

const SavedProject = () => {
  const [savedProjects, setSavedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSavedProjects = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/saved-projects", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();

        if (data.success) {
          setSavedProjects(data.savedProjects);
        } else {
          setError(data.message || "Failed to load saved projects");
        }
      } catch (err) {
        setError("Error fetching saved projects: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedProjects();
  }, []);

  const handleViewDetails = (project) => {
    setSelectedProject((prev) => (prev && prev._id === project._id ? null : project));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F7EFE5]">
        <div className="text-lg font-semibold text-[#674188]">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F7EFE5]">
        <div className="text-lg font-semibold text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className=" px-4 py-8 bg-[#F7EFE5]">
        <h1 className="text-4xl font-bold text-[#674188] mb-8 text-center">Your Saved Projects</h1>
        {savedProjects.length === 0 ? (
          <p className="text-center text-[#674188]">
            No saved projects yet. Explore and save some!
          </p>
        ) : (
          <div className="space-y-8">
            {savedProjects.map((project) => (
              <div
                key={project._id}
                className="saved-project-card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-[#E2BFD9]"
              >
                {/* Project Overview */}
                <div className="p-6 flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold text-[#674188]">
                      {project.jobId?.title || "Project Title"}
                    </h2>
                    <p className="text-[#674188] mt-2 text-sm">
                      {project.jobId?.description || "No description available."}
                    </p>
                  </div>
                  <button
                    onClick={() => handleViewDetails(project)}
                    className={`px-4 py-2 text-sm font-medium rounded ${
                      selectedProject?._id === project._id
                        ? "bg-[#E2BFD9] text-[#674188]"
                        : "bg-[#C8A1E0] text-white hover:bg-[#674188]"
                    }`}
                  >
                    {selectedProject?._id === project._id ? "Hide Description" : "View Description"}
                  </button>
                  <div className='flex items-center gap-4 mt-4'>
                <Button onClick={()=> navigate(`/description/${project.jobId?._id}`)} variant="outline">Details and Apply</Button>
            
            </div>
                </div>

                {/* Details Section */}
                {selectedProject?._id === project._id && (
                  <div className="p-6 bg-[#F7EFE5] border-t border-[#E2BFD9] animate-fadeIn">
                    <div className="flex items-center space-x-6">
                      <img
                        src={project.jobId?.company?.logo || "default-logo-url.jpg"}
                        alt={project.jobId?.company?.name || "Company Logo"}
                        className="w-20 h-20 object-cover rounded border border-[#E2BFD9]"
                      />
                      <div>
                        <p className="text-[#674188]">
                          <strong>Company:</strong>{" "}
                          {project.jobId?.company?.name || "N/A"}
                        </p>
                        <p className="text-[#674188]">
                          <strong>Location:</strong> {project.jobId?.location || "N/A"}
                        </p>
                        <p className="text-[#674188]">
                          <strong>Website:</strong>{" "}
                          <a
                            href={project.jobId?.company?.website || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#C8A1E0] underline hover:text-[#674188]"
                          >
                            {project.jobId?.company?.website || "No website"}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-[#674188]">
                        <strong>Requirements:</strong>{" "}
                        {project.jobId?.requirements?.join(", ") || "N/A"}
                      </p>
                      <p className="text-[#674188]">
                        <strong>Salary:</strong> ₹{project.jobId?.salary?.toLocaleString() || "N/A"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedProject;