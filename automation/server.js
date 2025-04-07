const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

console.log('Stripe secret key in use:', process.env.STRIPE_SECRET_KEY.slice(0, 8) + '...');

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "https://js.stripe.com"],
    connectSrc: ["'self'", "https://api.stripe.com", "http://localhost:4242"],
    frameSrc: ["'self'", "https://js.stripe.com"],
    styleSrc: ["'self'"],
  },
}));

app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.options('/create-payment-intent', cors());

app.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.url} from ${req.headers.origin}`);
  next();
});

app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    console.log('PaymentIntent created:', paymentIntent.id, 'Mode:', paymentIntent.livemode ? 'live' : 'test');
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating PaymentIntent:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(4242, () => {
  console.log('Server running on port 4242');
});