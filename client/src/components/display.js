import React, { useState } from 'react';
import axios from 'axios';

const DisplayDataPage = () => {
  const [usersEmail, setUsersEmail] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchUsersEmail = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/graphql', {
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
    <div>
      <h1>Fetch Users Email</h1>
      <button onClick={handleFetchUsersEmail} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Users Email'}
      </button>
      {usersEmail.length > 0 && (
        <ul>
          {usersEmail.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayDataPage;
