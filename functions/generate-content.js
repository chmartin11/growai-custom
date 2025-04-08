// Import the axios library for making HTTP requests
const axios = require('axios');

// Export the handler function for the serverless function
exports.handler = async (event) => {
  // Ensure the request is a POST method
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Extract the prompt from the request body
  const { prompt } = JSON.parse(event.body);

  // Get the Hugging Face API key from environment variables
  const API_KEY = process.env.HF_API_KEY;

  // Define the Hugging Face API endpoint (change 'gpt2' to your preferred model if needed)
  const API_URL = 'https://api-inference.huggingface.co/models/gpt2';

  try {
    // Make a POST request to the Hugging Face API with the prompt
    const response = await axios.post(API_URL, { inputs: prompt }, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });

    // Return the generated content in the response
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    // Handle any errors (e.g., network issues, invalid API key)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate content' }),
    };
  }
};