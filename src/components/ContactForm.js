import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new contact object
    const newContact = {
      name,
      email,
      message
    };

    try {
      // Make a POST request to your server endpoint
      const response = await axios.post('/api/contacts', newContact);
      console.log(response.data); // Response from the server

      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;

// function Contact() {
//   return (
//     <div className = 'contact'>
//       <h2 className = 'header'>Contact:</h2>
//       <br></br>
//       <h4 className = 'header'>Steven Narx</h4>
//       <p className = 'header'>(870)740-2014</p>
//     </div>
//   );
// }

// export default Contact;
