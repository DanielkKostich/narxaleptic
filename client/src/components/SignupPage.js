import React, { useState } from 'react';
import axios from 'axios';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

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
      console.log(response.data); // You can handle the response here (e.g., show a success message or redirect the user)
    } catch (error) {
      // Handle signup error
      console.log(error.response.data); // You can handle the error response here (e.g., show an error message)
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
        </form>

      </div>
      
    </div>
  );
};

export default SignupPage;
