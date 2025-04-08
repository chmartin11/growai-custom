import React, { useState } from 'react';

const ContentGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [contentType, setContentType] = useState('Social Media Post');
  const [tone, setTone] = useState('Professional');
  const [platform, setPlatform] = useState('Facebook');
  const [output, setOutput] = useState('');
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) {
      setOutput('Please enter a prompt.');
      return;
    }
    setLoading(true);
    try {
      // Simulate API call (replace with real API)
      const response = await fetch('/generate-content', {
        method: 'POST',
        body: JSON.stringify({ prompt, contentType, tone, platform }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      setOutput(data.content || 'Failed to generate content.');
      setHistory([...history, { text: data.content, time: new Date().toLocaleString() }]);
    } catch (error) {
      setOutput('Error: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '200px', background: '#f0f0f0', padding: '10px' }}>
        <h3>Menu</h3>
        <ul>
          <li>Generate Content</li>
          <li>Templates</li>
          <li>History</li>
          <li>Settings</li>
        </ul>
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Content Generator</h2>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your topic or prompt"
          style={{ width: '100%', height: '100px', marginBottom: '10px' }}
        />
        <select value={contentType} onChange={(e) => setContentType(e.target.value)}>
          <option>Social Media Post</option>
          <option>Blog Post</option>
          <option>Email</option>
        </select>
        <select value={tone} onChange={(e) => setTone(e.target.value)}>
          <option>Professional</option>
          <option>Casual</option>
          <option>Persuasive</option>
        </select>
        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option>Facebook</option>
          <option>Twitter</option>
          <option>Website</option>
        </select>
        <button onClick={handleGenerate} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Content'}
        </button>
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          {output}
        </div>
        <div style={{ marginTop: '20px' }}>
          <h3>Monitoring</h3>
          <p>Generations: {history.length}</p>
          <ul>
            {history.map((item, idx) => (
              <li key={idx}>{item.text.substring(0, 50)}... - {item.time}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentGenerator;