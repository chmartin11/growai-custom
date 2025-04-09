import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as needed, e.g., <Route path="/checkout" element={<Checkout />} /> */}
      </Routes>
    </Router>
  );
}

export default App;