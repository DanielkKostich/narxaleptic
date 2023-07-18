import React, { useState } from 'react';

const SignupPopup = ({ onPopupClosed }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any validation or data processing here
    // (e.g., check for valid email format, send the data to a server, etc.)
    // You can use a library like Axios to make API requests.

    // Clear the form after submission
    setEmail('');

    // Close the popup after successful submission
    if (onPopupClosed) {
      onPopupClosed();
    }
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit">Subscribe</button>
        </form>
        <button className="popup-close-button" onClick={onPopupClosed}>
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default SignupPopup;
