// react-app/src/components/Blog.js
import React from 'react';

function Blog() {
  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <p>Read the latest updates and insights from GrowAI.</p>
      <section className="posts">
        <article className="post">
          <h3>The Future of AI in Content Creation</h3>
          <p>Published on April 10, 2025</p>
          <p>
            Discover how AI is transforming the way we create content, from blogs to social media posts. Learn about the latest trends and how GrowAI is leading the charge.
          </p>
          <a href="#">Read More</a>
        </article>
        <article className="post">
          <h3>5 Tips for Maximizing Your Content Strategy with AI</h3>
          <p>Published on April 5, 2025</p>
          <p>
            Boost your content strategy with these actionable tips using GrowAI’s powerful AI tools. From ideation to publishing, we’ve got you covered.
          </p>
          <a href="#">Read More</a>
        </article>
      </section>
      <style jsx>{`
        .blog-container {
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        h1 {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        p {
          font-family: 'Roboto', sans-serif;
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 2rem;
        }
        .posts {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .post {
          background: #fff;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: left;
        }
        .post h3 {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .post p {
          font-family: 'Roboto', sans-serif;
          font-size: 1rem;
          color: #666;
          margin: 0.5rem 0;
        }
        .post a {
          color: #00ffcc;
          text-decoration: none;
          font-family: 'Roboto', sans-serif;
          font-weight: 500;
        }
        .post a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default Blog;