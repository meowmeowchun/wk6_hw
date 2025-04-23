import React from 'react';
import Books from '../../books.json'; // Import books.json
import { Link } from 'react-router';

import './home.css';

export const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <div className="link-container">
        {Books.map((book) => (
          <Link key={book.ID} to={`/book/${book.ID}`} className="card">
            <img src={book.cover} alt={book.title} />
            <div className="card-body">
              <h2 className="card-title">{book.title}</h2>
              <p className="card-author">By {book.author}</p>
            </div>
          </Link>
        ))}
      </div>
  
    </div>
  );
};

export default Home;