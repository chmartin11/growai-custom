import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Checkout.css';

// Initialize Stripe with the test publishable key
const stripePromise = loadStripe('pk_test_51QcVVEFNnXO95LV8ZBK7rErcb8ghQM2ztPRAZrIKmVGJYb5KxWqMdRtSSeEZoOgCAtULriv8h5oGDx5sMwQcUGIy00zjhvaRJG');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('http://localhost:4242/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setError('Failed to initiate payment');
        }
      })
      .catch((err) => {
        setError('Error connecting to the server: ' + err.message);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements || !clientSecret) {
      setProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else if (paymentIntent.status === 'succeeded') {
      setError(null);
      setProcessing(false);
      alert('Payment succeeded!');
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>Card Details</label>
        <CardElement options={{ hidePostalCode: true }} />
        <button type="submit" disabled={!stripe || processing || !clientSecret}>
          {processing ? 'Processing...' : 'Pay'}
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

const Checkout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Checkout;