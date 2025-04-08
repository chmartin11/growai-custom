import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to GrowAI</h1>
        <Routes>
          <Route path="/" element={<div>Please navigate to <a href="/checkout">/checkout</a> to proceed.</div>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;