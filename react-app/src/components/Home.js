// react-app/src/components/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Revolutionize Content Creation with AI</h1>
        <p className="tagline">Your AI-powered content generation platform.</p>
        <button className="cta-button">Get Started</button>
      </section>
      <section className="intro">
        <h2>Why Choose GrowAI?</h2>
        <p>
          GrowAI leverages cutting-edge AI technology to help you create high-quality content in minutes. Whether you're a marketer, blogger, or business owner, our platform offers tools to streamline your workflow and boost productivity.
        </p>
      </section>
      <section className="features">
        <div className="feature-card">
          <h3>AI-Powered Content</h3>
          <p>Generate high-quality content instantly with our advanced AI algorithms.</p>
        </div>
        <div className="feature-card">
          <h3>Customizable Templates</h3>
          <p>Choose from a variety of templates to fit your specific needs.</p>
        </div>
        <div className="feature-card">
          <h3>Fast and Scalable</h3>
          <p>Create content at scale without sacrificing speed or quality.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;