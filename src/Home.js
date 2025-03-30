import React from 'react';

const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1>GrowAI: AI-Powered Content for SMEs</h1>
        <p>Automate your e-commerce content with AI—blog posts, social media, and more.</p>
        <button onClick={() => window.location.href = '/content-generator'}>Get Started Now</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose GrowAI?</h2>
        <div className="features-list">
          <div className="feature">
            <i className="fas fa-robot"></i>
            <h3>AI-Driven Automation</h3>
            <p>Generate content in seconds with our powerful AI tools.</p>
          </div>
          <div className="feature">
            <i className="fas fa-globe"></i>
            <h3>Global Reach</h3>
            <p>Support for Asia-Pacific and Latin America markets with multi-language content.</p>
          </div>
          <div className="feature">
            <i className="fas fa-dollar-sign"></i>
            <h3>Affordable Pricing</h3>
            <p>Just $10/month for 5 API calls, $0.50/call after.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"GrowAI has transformed our content strategy—saved us hours every week!"</p>
          <p>- Jane Doe, E-Commerce Owner</p>
        </div>
        {/* Add more testimonials as you gather real feedback */}
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Grow Your Business?</h2>
        <button onClick={() => window.location.href = '/content-generator'}>Try GrowAI Today</button>
      </section>
    </div>
  );
};

export default Home;