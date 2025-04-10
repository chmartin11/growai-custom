import React from 'react';
import './Blog.css'; // Ensure this imports your CSS file

function Blog() {
  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <p>Read the latest updates and insights from GrowAI.</p>
      <div className="blog-posts">
        <div className="blog-post">
          <h2>The Future of AI in Content Creation</h2>
          <p>Published on April 10, 2025</p>
          <p>Discover how AI is transforming the way we create content, from blogs to social media posts.</p>
          <button className="link-style">Read More</button>
        </div>
        <div className="blog-post">
          <h2>5 Tips for Maximizing Your Content Strategy with AI</h2>
          <p>Published on April 5, 2025</p>
          <p>Boost your content strategy with these actionable tips using GrowAI’s powerful AI tools.</p>
          <button className="link-style">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Blog;