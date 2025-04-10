// react-app/src/components/Contact.js
import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., send to an API)
    console.log('Form submitted:', { name, email, message });
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Get in touch with the GrowAI team.</p>
      {submitted ? (
        <p>Thank you for your message! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      )}
      <style jsx>{`
        .contact-container {
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }
        h1 {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        p {
          font-family: 'Roboto', sans-serif;
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 2rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        label {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 1rem;
          text-align: left;
        }
        input, textarea {
          padding: 0.5rem;
          font-family: 'Roboto', sans-serif;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        textarea {
          height: 150px;
          resize: vertical;
        }
        button {
          background-color: #00ffcc;
          color: #1a1a1a;
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 5px;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #00ccaa;
        }
      `}</style>
    </div>
  );
}

export default Contact;