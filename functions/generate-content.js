const axios = require('axios');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  try {
    const { topic, contentType, tone } = JSON.parse(event.body);
    const apiKey = process.env.HF_API_KEY;
    const model = 'meta-llama/Llama-4-Maverick-17B-128E-Instruct';

    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${model}`,
      {
        inputs: `Generate a ${contentType} about ${topic} in a ${tone} tone.`,
        parameters: { max_length: 500 }
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const generatedContent = response.data[0].generated_text;
    return {
      statusCode: 200,
      body: JSON.stringify({ content: generatedContent })
    };
  } catch (error) {
    console.error('Error generating content:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate content' })
    };
  }
};