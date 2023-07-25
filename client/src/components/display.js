import React, { useState } from 'react';
import axios from 'axios';

const DisplayDataPage = () => {
  const [usersEmail, setUsersEmail] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchUsersEmail = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/graphql', {
        query: `
          query {
            users {
              email
            }
          }
        `,
      });

      setUsersEmail(response.data.data.users.map(user => user.email));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users email:', error);
      setLoading(false);
    }
  };

  return (
    <div className = 'gallery'>
      <h3 className = 'signup'>Users Email</h3>
      <button className = 'signup' onClick={handleFetchUsersEmail} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Users Email'}
      </button>
      {usersEmail.length > 0 && (
        <ul className = 'signup'>
          {usersEmail.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayDataPage;
