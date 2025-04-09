// // // // // import React from 'react';

// // // // // const Contact = () => {
// // // // //   return (
// // // // //     <div className="contact-container">
// // // // //       <h2>Contact Me</h2>
// // // // //       <p>This is the Contact page where you can reach me.</p>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Contact;
// // // // import React, { useState } from 'react';
// // // // import './Contact.css'; // Ensure you have a CSS file for styling

// // // // const Contact = () => {
// // // //   const [email, setEmail] = useState('');
// // // //   const [message, setMessage] = useState('');
// // // //   const [submitted, setSubmitted] = useState(false);

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     // Handle form submission logic here (e.g., send email to a server or API)
// // // //     console.log('Email:', email);
// // // //     console.log('Message:', message);
// // // //     setSubmitted(true);
// // // //   };

// // // //   return (
// // // //     <div className="contact-container">
// // // //       <h1>Contact Me</h1>
// // // //       <p>If you have any questions or would like to get in touch, please leave your email and a message below.</p>

// // // //       {submitted ? (
// // // //         <div className="thank-you-message">
// // // //           <h2>Thank You!</h2>
// // // //           <p>Your message has been received. I will get back to you soon.</p>
// // // //         </div>
// // // //       ) : (
// // // //         <form className="contact-form" onSubmit={handleSubmit}>
// // // //           <div className="form-group">
// // // //             <label htmlFor="email">Email Address:</label>
// // // //             <input
// // // //               type="email"
// // // //               id="email"
// // // //               value={email}
// // // //               onChange={(e) => setEmail(e.target.value)}
// // // //               required
// // // //               placeholder="Enter your email"
// // // //             />
// // // //           </div>
// // // //           <div className="form-group">
// // // //             <label htmlFor="message">Message:</label>
// // // //             <textarea
// // // //               id="message"
// // // //               value={message}
// // // //               onChange={(e) => setMessage(e.target.value)}
// // // //               required
// // // //               placeholder="Enter your message"
// // // //             ></textarea>
// // // //           </div>
// // // //           <button type="submit" className="submit-button">Submit</button>
// // // //         </form>
// // // //       )}
// // // //     </div>
// // // //   );s
// // // // };





// // // import React, { useState } from 'react'; // Ensure useState is imported
// // // import './Contact.css'; // Ensure you have a CSS file for styling
// // // import { getFirestore, collection, addDoc } from 'firebase/firestore';
// // // import { initializeApp } from 'firebase/app';
// // // // Firebase configuration
// // // const firebaseConfig = {
// // // apiKey: "AIzaSyBvLbR0c-XGe-HPsUFfH5ivXh38_vPUHv8",
// // // authDomain: "react2-1f247.firebaseapp.com",
// // // projectId: "react2-1f247",
// // // storageBucket: "react2-1f247.firebasestorage.app",
// // // messagingSenderId: "805055856540",
// // // appId: "1:805055856540:web:7c14c4ad5ef5ff63ca9259",
// // // measurementId: "G-57XKQ9VVJW"

// // // };

// // // // Initialize Firebase
// // // const app = initializeApp(firebaseConfig);
// // // const db = getFirestore(app);

// // // const Contact = () => {
// // //   const [email, setEmail] = useState('');
// // //   const [message, setMessage] = useState('');
// // //   const [submitted, setSubmitted] = useState(false);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       // Save email and message to Firebase Firestore
// // //       await addDoc(collection(db, 'contacts'), { email, message });
// // //       console.log('Message saved to database');
// // //       setSubmitted(true);
// // //     } catch (error) {
// // //       console.error('Error saving message:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="contact-container">
// // //       <h1>Contact Me</h1>
// // //       <p>If you have any questions or would like to get in touch, please leave your email and a message below.</p>

// // //       {submitted ? (
// // //         <div className="thank-you-message">
// // //           <h2>Thank You!</h2>
// // //           <p>Your message has been received. I will get back to you soon.</p>
// // //         </div>
// // //       ) : (
// // //         <form className="contact-form" onSubmit={handleSubmit}>
// // //           <div className="form-group">
// // //             <label htmlFor="email">Email Address:</label>
// // //             <input
// // //               type="email"
// // //               id="email"
// // //               value={email}
// // //               onChange={(e) => setEmail(e.target.value)}
// // //               required
// // //               placeholder="Enter your email"
// // //             />
// // //           </div>
// // //           <div className="form-group">
// // //             <label htmlFor="message">Message:</label>
// // //             <textarea
// // //               id="message"
// // //               value={message}
// // //               onChange={(e) => setMessage(e.target.value)}
// // //               required
// // //               placeholder="Enter your message"
// // //             ></textarea>
// // //           </div>
// // //           <button type="submit" className="submit-button">Submit</button>
// // //         </form>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Contact;import React, { useState } from 'react';
// // import React, { useState } from 'react'; // Correctly import useState
// // import './Contact.css';
// // import { getFirestore, collection, addDoc } from 'firebase/firestore';
// // import { initializeApp } from 'firebase/app';

// // // Firebase configuration
// // const firebaseConfig = {
// //   apiKey: "AIzaSyBvLbR0c-XGe-HPsUFfH5ivXh38_vPUHv8",
// //   authDomain: "react2-1f247.firebaseapp.com",
// //   projectId: "react2-1f247",
// //   storageBucket: "react2-1f247.firebasestorage.app",
// //   messagingSenderId: "805055856540",
// //   appId: "1:805055856540:web:7c14c4ad5ef5ff63ca9259",
// //   measurementId: "G-57XKQ9VVJW"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const db = getFirestore(app);

// // const Contact = () => {
// //   const [email, setEmail] = useState('');
// //   const [message, setMessage] = useState('');
// //   const [submitted, setSubmitted] = useState(false);

// //   // const handleSubmit = async (e) => {
// //   //   e.preventDefault();
// //   //   console.log('Form submitted'); // Debugging log
// //   //   try {
// //   //     await addDoc(collection(db, 'contacts'), { email, message });
// //   //     console.log('Message saved to database');
// //   //     setSubmitted(true);
// //   //   } catch (error) {
// //   //     console.error('Error saving message:', error);
// //   //   }
// //   // };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     console.log('Form submitted'); // Debugging log
// //     try {
// //       const docRef = await addDoc(collection(db, 'contacts'), { email, message });
// //       console.log('Document written with ID: ', docRef.id); // Log the document ID
// //       setSubmitted(true); // Show the thank-you message
// //     } catch (error) {
// //       console.error('Error adding document: ', error); // Log any errors
// //     }
// //   };

// //   return (
// //     <div className="contact-container">
// //       <h1>Contact Me</h1>
// //       <p>If you have any questions or would like to get in touch, please leave your email and a message below.</p>

// //       {submitted ? (
// //         <div className="thank-you-message">
// //           <h2>Thank You!</h2>
// //           <p>Your message has been received. I will get back to you soon.</p>
// //         </div>
// //       ) : (
// //         <form className="contact-form" onSubmit={handleSubmit}>
// //           <div className="form-group">
// //             <label htmlFor="email">Email Address:</label>
// //             <input
// //               type="email"
// //               id="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //               placeholder="Enter your email"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="message">Message:</label>
// //             <textarea
// //               id="message"
// //               value={message}
// //               onChange={(e) => setMessage(e.target.value)}
// //               required
// //               placeholder="Enter your message"
// //             ></textarea>
// //           </div>
// //           <button type="submit" className="submit-button">Submit</button>
// //         </form>
// //       )}
// //     </div>
// //   );
// // };

// // export default Contact;import React, { useState } from 'react';
// // import './Contact.css';
// // import { getFirestore, collection, addDoc } from 'firebase/firestore';
// // import { initializeApp } from 'firebase/app';



// import React, { useState } from 'react'; // Correctly import useState
// import './Contact.css';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { initializeApp } from 'firebase/app';
// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBvLbR0c-XGe-HPsUFfH5ivXh38_vPUHv8",
//   authDomain: "react2-1f247.firebaseapp.com",
//   projectId: "react2-1f247",
//   storageBucket: "react2-1f247.firebasestorage.app",
//   messagingSenderId: "805055856540",
//   appId: "1:805055856540:web:7c14c4ad5ef5ff63ca9259",
//   measurementId: "G-57XKQ9VVJW"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [whatsapp, setWhatsapp] = useState('');
//   const [message, setMessage] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation: Ensure either email or WhatsApp number is provided
//     if (!email && !whatsapp) {
//       setError('Please provide either an email address or a WhatsApp number.');
//       return;
//     }

//     setError(''); // Clear any previous errors

//     console.log('Form submitted'); // Debugging log
//     try {
//       const docRef = await addDoc(collection(db, 'contacts'), {
//         name,
//         email,
//         whatsapp,
//         message,
//       });
//       console.log('Document written with ID: ', docRef.id); // Log the document ID
//       setSubmitted(true); // Show the thank-you message
//     } catch (error) {
//       console.error('Error adding document: ', error); // Log any errors
//     }
//   };

//   return (
//     <div className="contact-container">
//       <h1>Contact Me</h1>
//       <p>If you have any questions or would like to get in touch, please leave your details below.</p>

//       {submitted ? (
//         <div className="thank-you-message">
//           <h2>Thank You!</h2>
//           <p>Your message has been received. I will get back to you soon.</p>
//         </div>
//       ) : (
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name (Optional):</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter your name"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email Address :</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="whatsapp">WhatsApp Number :</label>
//             <input
//               type="tel"
//               id="whatsapp"
//               value={whatsapp}
//               onChange={(e) => setWhatsapp(e.target.value)}
//               placeholder="Enter your WhatsApp number"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message:</label>
//             <textarea
//               id="message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//               placeholder="Enter your message"
//             ></textarea>
//           </div>
//           {error && <p className="error-message">{error}</p>}
//           <button type="submit" className="submit-button">Submit</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import './Contact.css';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvLbR0c-XGe-HPsUFfH5ivXh38_vPUHv8",
  authDomain: "react2-1f247.firebaseapp.com",
  projectId: "react2-1f247",
  storageBucket: "react2-1f247.firebasestorage.app",
  messagingSenderId: "805055856540",
  appId: "1:805055856540:web:7c14c4ad5ef5ff63ca9259",
  measurementId: "G-57XKQ9VVJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Ensure either email or WhatsApp number is provided
    if (!email && !whatsapp) {
      setError('Please provide either an email address or a WhatsApp number.');
      return;
    }

    setError(''); // Clear any previous errors

    console.log('Form submitted'); // Debugging log
    try {
      const docRef = await addDoc(collection(db, 'contacts'), {
        name,
        email,
        whatsapp,
        message,
      });
      console.log('Document written with ID: ', docRef.id); // Log the document ID
      setSubmitted(true); // Show the thank-you message

      // Reset the form fields
      setName('');
      setEmail('');
      setWhatsapp('');
      setMessage('');
    } catch (error) {
      console.error('Error adding document: ', error); // Log any errors
    }
  };

  const handleNewSubmission = () => {
    setSubmitted(false); // Reset the submitted state to allow new submissions
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you have any questions or would like to get in touch, please leave your details below.</p>

      {submitted ? (
        <div className="thank-you-message">
          <h2>Thank You!</h2>
          <p>Your message has been received. I will get back to you soon.</p>
          <button onClick={handleNewSubmission} className="submit-button">
            Submit Another Response
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name (Optional):</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="whatsapp">WhatsApp Number :</label>
            <input
              type="tel"
              id="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="Enter your WhatsApp number"
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
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;