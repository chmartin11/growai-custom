const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
require('dotenv').config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4243', // Match your React app's port
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, // $10.99 in cents
      currency: 'usd',
      payment_method_types: ['card'],
    });
    console.log(`PaymentIntent created: ${paymentIntent.id}`);
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating PaymentIntent:', error.message);
    res.status(500).json({ error: error.message });
  }
});

const port = process.env.PORT || 4242;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});