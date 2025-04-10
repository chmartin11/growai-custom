// react-app/src/components/Checkout.js
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 1000 }) // Example amount in cents
    });

    const { clientSecret } = await response.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) }
    });

    if (result.error) {
      setError(result.error.message);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      alert('Payment succeeded!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Checkout</h2>
      <div className="card-element">
        <CardElement />
      </div>
      <button type="submit" disabled={!stripe || processing}>
        Pay
      </button>
      {error && <div className="error">{error}</div>}
      <style jsx>{`
        .checkout-form {
          max-width: 500px;
          margin: 2rem auto;
          padding: 2rem;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        h2 {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }
        .card-element {
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-bottom: 1.5rem;
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
        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
        button:hover:not(:disabled) {
          background-color: #00ccaa;
        }
        .error {
          color: red;
          font-family: 'Roboto', sans-serif;
          font-size: 1rem;
          margin-top: 1rem;
        }
      `}</style>
    </form>
  );
};

const Checkout = () => (
  <div>
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  </div>
);

export default Checkout;