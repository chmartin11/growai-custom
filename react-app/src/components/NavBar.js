import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/features" className="nav-link">Features</Link>
      <Link to="/pricing" className="nav-link">Pricing</Link>
      <Link to="/blog" className="nav-link">Blog</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/checkout" className="nav-link">Checkout</Link>
      <Link to="/content-generator" className="nav-link">Content Generator</Link>
    </nav>
  );
}

export default NavBar;