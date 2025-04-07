let topic, contentType, tone, wordCount, language, platform;

const contentTypeSelect = document.getElementById('content-type');
const platformGroup = document.getElementById('platform-group');
const platformSelect = document.getElementById('platform');
const platformTip = document.getElementById('platform-tip');
const output = document.getElementById('output');
const outputContent = document.getElementById('output-content');
const generateBtn = document.getElementById('generate-btn');

const platformTips = {
  twitter: 'X posts are limited to 280 characters. Keep it concise!',
  facebook: 'Facebook posts can be longer, up to 63,206 characters, but shorter posts perform better.',
  instagram: 'Instagram captions can be up to 2,200 characters. Include relevant hashtags.',
  linkedin: 'LinkedIn posts can be up to 3,000 characters. Use a professional tone.'
};

contentTypeSelect.addEventListener('change', () => {
  if (contentTypeSelect.value === 'social-media') {
    platformGroup.style.display = 'block';
  } else {
    platformGroup.style.display = 'none';
    platformTip.style.display = 'none';
  }
});

platformSelect.addEventListener('change', () => {
  const selectedPlatform = platformSelect.value;
  if (selectedPlatform && platformTips[selectedPlatform]) {
    platformTip.textContent = platformTips[selectedPlatform];
    platformTip.style.display = 'block';
  } else {
    platformTip.style.display = 'none';
  }
});

document.getElementById('content-form').addEventListener('submit', (e) => {
  e.preventDefault();

  topic = document.getElementById('topic').value;
  contentType = document.getElementById('content-type').value;
  tone = document.getElementById('tone').value;
  wordCount = document.getElementById('word-count').value || 'Not specified';
  language = document.getElementById('language').value;
  platform = contentType === 'social-media' ? document.getElementById('platform').value : null;

  if (!topic || !contentType || !tone || (contentType === 'social-media' && !platform)) {
    output.classList.add('visible');
    outputContent.innerHTML = `
      <h3>Error</h3>
      <p class="error"><i class="fas fa-exclamation-circle"></i> Please fill out all required fields before generating content.</p>
    `;
    return;
  }

  generateContent();
});

function generateContent() {
  // Show loading state
  generateBtn.disabled = true;
  generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
  output.classList.add('visible');
  outputContent.innerHTML = `
    <h3>Generating Content...</h3>
    <p>Please wait while we generate your content...</p>
  `;

  setTimeout(() => {
    // Reset button state
    generateBtn.disabled = false;
    generateBtn.innerHTML = 'Generate <i class="fas fa-magic"></i>';

    // Display placeholder output
    let outputHTML = `
      <p><strong>Topic:</strong> ${topic}</p>
      <p><strong>Content Type:</strong> ${contentType}</p>
    `;

    if (contentType === 'social-media') {
      outputHTML += `<p><strong>Platform:</strong> ${platform}</p>`;
    }

    outputHTML += `
      <p><strong>Tone:</strong> ${tone}</p>
      <p><strong>Word Count:</strong> ${wordCount}</p>
      <p><strong>Language:</strong> ${language}</p>
      <p>(Placeholder: Content generation will be implemented with backend API)</p>
    `;

    outputContent.innerHTML = outputHTML;
  }, 1500);
}

// Copy to Clipboard Functionality
document.getElementById('copy-btn').addEventListener('click', () => {
  const outputText = document.getElementById('output-content').innerText;
  navigator.clipboard.writeText(outputText).then(() => {
    const copyBtn = document.getElementById('copy-btn');
    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => {
      copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy to Clipboard';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
});

// Reset Form Functionality
document.getElementById('reset-btn').addEventListener('click', () => {
  document.getElementById('content-form').reset();
  output.classList.remove('visible');
  outputContent.innerHTML = '';
  platformGroup.style.display = 'none';
  platformTip.style.display = 'none';
});

// Generate Again Functionality
document.getElementById('generate-again-btn').addEventListener('click', () => {
  generateContent();
});

// Welcome Message Close Functionality
document.querySelector('.welcome-message .close').addEventListener('click', () => {
  document.querySelector('.welcome-message').style.display = 'none';
});