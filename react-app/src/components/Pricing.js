// react-app/src/components/Pricing.js
import React from 'react';

function Pricing() {
  return (
    <div className="pricing-container">
      <h1>Pricing</h1>
      <p>Explore our pricing plans to find the best fit for you.</p>
      <section className="pricing-plans">
        <div className="plan-card">
          <h3>Basic</h3>
          <p className="price">$9/month</p>
          <ul>
            <li>10,000 words/month</li>
            <li>Basic templates</li>
            <li>Email support</li>
          </ul>
          <button className="plan-button">Choose Plan</button>
        </div>
        <div className="plan-card">
          <h3>Pro</h3>
          <p className="price">$29/month</p>
          <ul>
            <li>50,000 words/month</li>
            <li>Advanced templates</li>
            <li>Priority support</li>
            <li>Multilingual support</li>
          </ul>
          <button className="plan-button">Choose Plan</button>
        </div>
        <div className="plan-card">
          <h3>Enterprise</h3>
          <p className="price">Custom</p>
          <ul>
            <li>Unlimited words</li>
            <li>Custom templates</li>
            <li>Dedicated support</li>
            <li>API access</li>
          </ul>
          <button className="plan-button">Contact Us</button>
        </div>
      </section>
      <style jsx>{`
        .pricing-container {
          padding: 2rem;
          max-width: 1200px;
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
        .pricing-plans {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .plan-card {
          background: #fff;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .plan-card h3 {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .price {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.8rem;
          color: #00ffcc;
          margin-bottom: 1rem;
        }
        ul {
          list-style: none;
          padding: 0;
          margin-bottom: 1.5rem;
        }
        li {
          font-family: 'Roboto', sans-serif;
          font-size: 1rem;
          color: #666;
          margin-bottom: 0.5rem;
        }
        .plan-button {
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
        .plan-button:hover {
          background-color: #00ccaa;
        }
      `}</style>
    </div>
  );
}

export default Pricing;