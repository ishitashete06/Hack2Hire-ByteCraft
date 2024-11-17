import React, { useState } from 'react';
import '../styles/Signup.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState('freelancer'); // 'freelancer' or 'recruiter'
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    skills: '', // Only for freelancers
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setFormData({ ...formData, skills: '' }); // Clear skills if switching to recruiter
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData =
      userType === 'freelancer'
        ? {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            phoneNumber: formData.phoneNumber,
            skills: formData.skills.split(',').map((skill) => skill.trim()),
          }
        : {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            phoneNumber: formData.phoneNumber,
          };

    try {
      const endpoint = userType === 'freelancer' ? '/auth/signup' : '/recruiter/signup';
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('User created successfully!');
        navigate('/signin');
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('Error signing up: ' + error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <div className="user-type-buttons">
        <button onClick={() => handleUserTypeChange('freelancer')} className={userType === 'freelancer' ? 'active' : ''}>
          Sign Up as Freelancer
        </button>
        <button onClick={() => handleUserTypeChange('recruiter')} className={userType === 'recruiter' ? 'active' : ''}>
          Sign Up as Recruiter
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        {userType === 'freelancer' && (
          <input
            type="text"
            name="skills"
            placeholder="Skills (comma-separated)"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        )}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
