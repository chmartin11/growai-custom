import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Adjust if Home.js is elsewhere
import Checkout from './components/Checkout'; // Adjust if Checkout.js is elsewhere

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;