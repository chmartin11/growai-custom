import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ContentGenerator from './ContentGenerator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content-generator" element={<ContentGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;