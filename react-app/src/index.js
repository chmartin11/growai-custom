import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot for React 18
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a root for rendering the app
const root = createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance
reportWebVitals();