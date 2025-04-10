// react-app/src/components/Features.js
import React from 'react';

function Features() {
  return (
    <div className="features-container">
      <h1>Features</h1>
      <p>Discover the powerful features of GrowAI.</p>
      <section className="features-list">
        <div className="feature-item">
          <h3>AI-Powered Content Generation</h3>
          <p>
            Create blog posts, social media content, and product descriptions in seconds using our advanced AI algorithms.
          </p>
        </div>
        <div className="feature-item">
          <h3>Customizable Templates</h3>
          <p>
            Choose from a wide range of templates tailored for different content types, ensuring your output matches your brand’s style.
          </p>
        </div>
        <div className="feature-item">
          <h3>Fast and Scalable</h3>
          <p>
            Generate content at scale without compromising on speed or quality, perfect for businesses with high content demands.
          </p>
        </div>
        <div className="feature-item">
          <h3>Multilingual Support</h3>
          <p>
            Create content in multiple languages to reach a global audience effortlessly.
          </p>
        </div>
      </section>
      <style jsx>{`
        .features-container {
          padding: 2rem;
          max-width: 800px;
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
        .features-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .feature-item {
          background: #fff;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: left;
        }
        .feature-item h3 {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .feature-item p {
          font-family: 'Roboto', sans-serif;
          font-size: 1rem;
          color: #666;
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export default Features;