import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null); // State to hold the error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous error
  
    try {
      // Send login request to the server with a GraphQL query
      const response = await axios.post('/graphql', {
        query: `
          query Login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
              // Include any fields you want to receive in the response upon successful login
            }
          }
        `,
        variables: {
          email: formData.email,
          password: formData.password,
        },
      });
  
      // Handle successful login
      console.log(response.data.data.login); // You can handle the response here (e.g., store the JWT token)
    } catch (error) {
      // Handle login error and set the error state
      setError(error.response.data.error);
    }
  };
  

  return (
    <div className="gallery">
      <h2 className="signup">Please Login</h2>
      {error && <p className="error">{error}</p>} {/* Display the error message if there is an error */}
      <form onSubmit={handleSubmit}>
        <div className="signup">
          <label>Email:</label>
          <input
            className="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="signup">
          <label>Password:</label>
          <input
            className="input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="signup" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
