// import React from 'react';

// const Contact = () => {
//   return (
//     <div className="contact-container">
//       <h2>Contact Me</h2>
//       <p>This is the Contact page where you can reach me.</p>
//     </div>
//   );
// }

// export default Contact;
import React, { useState } from 'react';
import './Contact.css'; // Ensure you have a CSS file for styling

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email to a server or API)
    console.log('Email:', email);
    console.log('Message:', message);
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you have any questions or would like to get in touch, please leave your email and a message below.</p>

      {submitted ? (
        <div className="thank-you-message">
          <h2>Thank You!</h2>
          <p>Your message has been received. I will get back to you soon.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;