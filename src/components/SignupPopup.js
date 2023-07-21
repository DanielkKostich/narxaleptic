// import React, { useState } from 'react';

// const SignupPopup = ({ onPopupClosed }) => {
//   const [email, setEmail] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await fetch('./email/save-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });
  
//       if (response.ok) {
//         console.log('Email saved successfully');
//         setEmail('');
  
//         // Close the popup after successful submission
//         if (onPopupClosed) {
//           onPopupClosed();
//         }
//       } else {
//         console.error('Failed to save email');
//       }
//     } catch (error) {
//       console.error('Error saving email:', error);
//     }
//   };
  

//   return (
//     <div className="popup-container">
//       <div className="popup-content">
//         <h2>Subscribe to Our Newsletter</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//           <button type="submit">Subscribe</button>
//         </form>
//         <button className="popup-close-button" onClick={onPopupClosed}>
//           &#10005;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SignupPopup;
