import React, { useState } from 'react';
import axios from 'axios';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Send signup request to the server
    const response = await axios.post('/signupPage', formData);

    // Handle successful signup
    setSuccess('Signup successful! You can now log in.'); // Set the success message
    setError(null); // Clear any previous error message
    setFormData({ // Clear the form after successful signup
      username: '',
      email: '',
      password: '',
    });
  } catch (error) {
    // Handle signup error
    setError(error.response.data.error); // Set the error message from the server response
    setSuccess(null); // Clear any previous success message
  }
};


  return (

    <div className="gallery">
      <div>
        <h2 className = 'signup'>Register:</h2>
        
        <form onSubmit={handleSubmit}>
          <div className = 'signup' >
            <label>Username:</label>
            <input className = 'input'
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className = 'signup'>
            <label>Email:</label>
            <input className = 'input'
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className = 'signup'>
            <label>Password:</label>
            <input className = 'input'
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className = 'back' type="submit">Signup</button>
          {error && <div className="error ">{error}</div>} {/* Show the error message */}
      {success && <div className="error ">{success}</div>} {/* Show the success message */}
        </form>

      </div>
      
    </div>
  );
};

export default SignupPage;
