import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({
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
      // Send login request to the server
      const response = await axios.post('/loginpage', formData);

      // Handle successful login
      console.log(response.data); // You can handle the response here (e.g., store the JWT token)
    } catch (error) {
      // Handle login error
      console.log(error.response.data); // You can handle the error response here (e.g., show an error message)
    }
  };

  return (
    <div className = 'gallery'>
      <h2 className = 'signup'>Please Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button className = 'signup' type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
