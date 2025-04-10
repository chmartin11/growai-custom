import React, { useState } from 'react';
import './ContentGenerator.css';

const ContentGenerator = () => {
  const [topic, setTopic] = useState('');
  const [contentType, setContentType] = useState('blog');
  const [tone, setTone] = useState('professional');
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await fetch('/.netlify/functions/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, contentType, tone }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setGeneratedContent(data.content);
    } catch (error) {
      console.error('Error generating content:', error);
      setGeneratedContent('Error generating content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content-generator-container">
      <h1>Content Generator</h1>
      <p>Create custom content with GrowAI’s powerful AI tools.</p>
      <form onSubmit={(e) => { e.preventDefault(); handleGenerate(); }}>
        <div className="form-group">
          <label htmlFor="topic">Topic</label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter your topic..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contentType">Content Type</label>
          <select
            id="contentType"
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
          >
            <option value="blog">Blog Post</option>
            <option value="social">Social Media Post</option>
            <option value="product">Product Description</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="tone">Tone</label>
          <select id="tone" value={tone} onChange={(e) => setTone(e.target.value)}>
            <option value="professional">Professional</option>
            <option value="casual">Casual</option>
            <option value="friendly">Friendly</option>
          </select>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Content'}
        </button>
      </form>
      {generatedContent && (
        <div className="generated-content">
          <h3>Generated Content</h3>
          <p>{generatedContent}</p>
        </div>
      )}
      {/* CSS styles remain as previously provided */}
    </div>
  );
};

export default ContentGenerator;