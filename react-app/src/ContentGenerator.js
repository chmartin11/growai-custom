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
      const data = await response.json();
      setGeneratedContent(data.content);
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content-generator-container">
      <h2>Generate Content</h2>
      <form>
        <label>Topic</label>
        <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} />
        <label>Content Type</label>
        <select value={contentType} onChange={(e) => setContentType(e.target.value)}>
          <option value="blog">Blog Post</option>
          <option value="social">Social Media Post</option>
          <option value="product">Product Description</option>
        </select>
        <label>Tone</label>
        <select value={tone} onChange={(e) => setTone(e.target.value)}>
          <option value="professional">Professional</option>
          <option value="casual">Casual</option>
          <option value="friendly">Friendly</option>
        </select>
        <button type="button" onClick={handleGenerate} disabled={loading}>
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </form>
      {generatedContent && (
        <div className="generated-content">
          <h3>Generated Content</h3>
          <p>{generatedContent}</p>
        </div>
      )}
    </div>
  );
};

export default ContentGenerator;