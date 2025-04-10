const axios = require('axios');

exports.handler = async (event) => {
  try {
    const { topic, contentType, tone } = JSON.parse(event.body);
    const HF_API_KEY = process.env.HF_API_KEY;
    const HF_MODEL = 'meta-llama/LLaMA-3-8B'; // Replace with actual model name

    const prompt = `Generate a ${contentType} about ${topic} in a ${tone} tone.`;

    const response = await axios.post(
      `[invalid url, do not cite]
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const generatedContent = response.data[0]?.generated_text || 'Error generating content';

    return {
      statusCode: 200,
      body: JSON.stringify({ content: generatedContent }),
    };
  } catch (error) {
    console.error('Error in generate-content:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate content' }),
    };
  }
};