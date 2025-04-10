import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Checkout from './components/Checkout';
import ContentGenerator from './components/ContentGenerator';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/content-generator" element={<ContentGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;