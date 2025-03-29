import React, { useState } from 'react';
import './ContentGenerator.css';

const ContentGenerator = () => {
  const [topic, setTopic] = useState('');
  const [contentType, setContentType] = useState('');
  const [platform, setPlatform] = useState('');
  const [tone, setTone] = useState('');
  const [wordCount, setWordCount] = useState('');
  const [language, setLanguage] = useState('en');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPlatform, setShowPlatform] = useState(false);
  const [platformTip, setPlatformTip] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);

  const platformTips = {
    twitter: 'X posts are limited to 280 characters. Keep it concise!',
    facebook: 'Facebook posts can be longer, up to 63,206 characters, but shorter posts perform better.',
    instagram: 'Instagram captions can be up to 2,200 characters. Include relevant hashtags.',
    linkedin: 'LinkedIn posts can be up to 3,000 characters. Use a professional tone.'
  };

  const handleContentTypeChange = (e) => {
    setContentType(e.target.value);
    setShowPlatform(e.target.value === 'social-media');
    setPlatformTip('');
  };

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
    setPlatformTip(platformTips[e.target.value] || '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!topic || !contentType || !tone) {
      setOutput('Error: Please fill out all required fields before generating content.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOutput(
        'Topic: ' + topic + '\n' +
        'Content Type: ' + contentType + '\n' +
        (contentType === 'social-media' ? 'Platform: ' + platform + '\n' : '') +
        'Tone: ' + tone + '\n' +
        'Word Count: ' + (wordCount || 'Not specified') + '\n' +
        'Language: ' + language + '\n' +
        '(Placeholder: Content generation will be implemented with backend API)'
      );
    }, 1500);
  };

  const handleReset = () => {
    setTopic('');
    setContentType('');
    setPlatform('');
    setTone('');
    setWordCount('');
    setLanguage('en');
    setOutput('');
    setShowPlatform(false);
    setPlatformTip('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    alert('Copied to clipboard!');
  };

  return (
    <section className="content-generator">
      <h2>Generate Content with GrowAI</h2>
      {showWelcome && (
        <div className="welcome-message">
          <p>Welcome to GrowAI! Enter your content details below to generate high-quality content for your e-commerce business.</p>
          <span className="close" onClick={() => setShowWelcome(false)}>×</span>
        </div>
      )}
      <form id="content-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="topic">
            <i className="fas fa-pen"></i> Topic: <span className="tooltip">What is your content about? <i className="fas fa-info-circle"></i></span>
          </label>
          <input
            type="text"
            id="topic"
            placeholder="e.g., E-commerce trends"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content-type">
            <i className="fas fa-file-alt"></i> Content Type: <span className="tooltip">Choose the type of content <i className="fas fa-info-circle"></i></span>
          </label>
          <select id="content-type" value={contentType} onChange={handleContentTypeChange} required>
            <option value="" disabled>Select content type</option>
            <option value="blog-post">Blog Post</option>
            <option value="social-media">Social Media Post</option>
            <option value="video-script">Video Script</option>
            <option value="ebook">E-book</option>
          </select>
        </div>
        {showPlatform && (
          <div className="form-group">
            <label htmlFor="platform">
              <i className="fas fa-share-alt"></i> Platform: <span className="tooltip">Select the social media platform <i className="fas fa-info-circle"></i></span>
            </label>
            <select id="platform" value={platform} onChange={handlePlatformChange}>
              <option value="" disabled>Select platform</option>
              <option value="twitter">X (Twitter)</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="linkedin">LinkedIn</option>
            </select>
            {platformTip && <small>{platformTip}</small>}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="tone">
            <i className="fas fa-comment"></i> Tone: <span className="tooltip">Set the tone of your content <i className="fas fa-info-circle"></i></span>
          </label>
          <select id="tone" value={tone} onChange={(e) => setTone(e.target.value)} required>
            <option value="" disabled>Select tone</option>
            <option value="professional">Professional</option>
            <option value="casual">Casual</option>
            <option value="persuasive">Persuasive</option>
            <option value="informative">Informative</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="word/count">
            <i className="fas fa-text-width"></i> Word Count: <span className="tooltip">Approximate length of content <i className="fas fa-info-circle"></i></span>
          </label>
          <input
            type="number"
            id="word-count"
            placeholder="e.g., 500"
            min="50"
            max="2000"
            value={wordCount}
            onChange={(e) => setWordCount(e.target.value)}
          />
          <small>Optional, min 50, max 2000 words</small>
        </div>
        <div className="form-group">
          <label htmlFor="language">
            <i className="fas fa-globe"></i> Language: <span className="tooltip">Select output language <i className="fas fa-info-circle"></i></span>
          </label>
          <select id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="pt">Portuguese</option>
            <option value="zh">Chinese</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
          </select>
          <small>Select for regional customization</small>
        </div>
        <button type="submit" id="generate-btn" disabled={isLoading}>
          {isLoading ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-magic"></i>} {isLoading ? 'Generating...' : 'Generate'}
        </button>
        <button type="button" id="reset-btn" className="reset-btn" onClick={handleReset}>
          <i className="fas fa-undo"></i> Reset
        </button>
      </form>
      {output && (
        <div id="output" className="visible">
          <h3><i className="fas fa-file-alt"></i> Generated Content</h3>
          <div id="output-content">{output}</div>
          <button id="copy-btn" className="copy-btn" onClick={handleCopy}>
            <i className="fas fa-copy"></i> Copy to Clipboard
          </button>
          <button id="generate-again-btn" className="generate-again-btn" onClick={handleSubmit}>
            <i className="fas fa-redo"></i> Generate Again
          </button>
        </div>
      )}
    </section>
  );
};

export default ContentGenerator;