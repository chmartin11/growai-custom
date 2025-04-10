// react-app/src/components/About.js
import React from 'react';

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At GrowAI, we’re on a mission to revolutionize content creation by harnessing the power of artificial intelligence. We aim to empower creators, marketers, and businesses to produce high-quality content effortlessly.
        </p>
      </section>
      <section className="team">
        <h2>Our Team</h2>
        <p>
          We’re a team of innovators, engineers, and creatives dedicated to pushing the boundaries of AI technology. With years of experience in AI and content strategy, we’re here to help you succeed.
        </p>
      </section>
      <style jsx>{`
        .about-container {
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        h1 {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }
        h2 {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
        p {
          font-family: 'Roboto', sans-serif;
          font-size: 1.1rem;
          color: #666;
          line-height: 1.6;
        }
        .mission, .team {
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
}

export default About;