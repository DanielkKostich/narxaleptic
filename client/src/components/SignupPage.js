import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      username
      email
    }
  }
`;

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [success, setSuccess] = useState(''); // State to display success message

  const [createUser, { loading, error }] = useMutation(CREATE_USER, {
    onError: (error) => {
      console.error('Error creating user:', error.message);
    },
    onCompleted: (data) => {
      console.log('User created:', data.createUser);
      setSuccess('User created successfully'); // Set the success message
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    createUser({
      variables: {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      },
    });
  }

  return (
    <div className="gallery">
      <div>
        <h2 className="signup">Register:</h2>

        <form onSubmit={handleSubmit}>
          <div className="signup">
            <label>Username:</label>
            <input
              className="input"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
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
          <button className="back" type="submit">
            Signup
          </button>
          {error && <div className="error">{error.message}</div>} {/* Show the error message */}
          {success && <div className="success">{success}</div>} {/* Show the success message */}
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
