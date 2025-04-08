import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Revolutionize Your E-Commerce Content with AI</h1>
        <p>Generate blog posts, product descriptions, and social media content in minutes.</p>
        <button className="cta-button">Start Your Free Trial</button>
      </section>
      <section className="features">
        <h2>Why Choose GrowAI?</h2>
        <ul>
          <li>AI-powered content tailored for e-commerce</li>
          <li>Save time and boost engagement</li>
          <li>Integrate with your favorite tools</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;