import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing">
      <h1>Pricing Plans</h1>
      <div className="plans">
        <div className="plan">
          <h2>Starter</h2>
          <p>$10/month</p>
          <ul>
            <li>5,000 words/month</li>
            <li>Basic support</li>
          </ul>
          <button className="cta-button">Choose Starter</button>
        </div>
        <div className="plan">
          <h2>Pro</h2>
          <p>$50/month</p>
          <ul>
            <li>25,000 words/month</li>
            <li>Priority support</li>
          </ul>
          <button className="cta-button">Choose Pro</button>
        </div>
        <div className="plan">
          <h2>Enterprise</h2>
          <p>Custom pricing</p>
          <ul>
            <li>Unlimited words</li>
            <li>Dedicated account manager</li>
          </ul>
          <button className="cta-button">Contact Sales</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;