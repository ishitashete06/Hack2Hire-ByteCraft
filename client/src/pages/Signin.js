import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signin.css'

const SignIn = () => {
  const navigate = useNavigate();

  // Update state to use email and password for sign-in
  const [formData, setFormData] = useState({
    email: '',  // Correct field for email
    password: '',  // Correct field for password
  });

  // Handle input changes for email and password fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure that the email and password are included in the form data
    try {
      const response = await fetch('http://localhost:5000/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Send email and password
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token); // Store JWT token in local storage
        alert('Sign-in successful!');
        navigate('/dashboard'); // Navigate to dashboard after successful sign-in
      } else {
        alert(data.message); // Display error message from response
      }
    } catch (error) {
      alert('Error signing in: ' + error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"  // Use email input type
          name="email"  // Field name should match formData state
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"  // Password input type
          name="password"  // Field name should match formData state
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
