import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Books from '../../books.json';
import './book.css';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../redux/cartslice';

const Book = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = Books.find((b) => b.ID === parseInt(id));

  const [qty, setQty] = useState(1); // Local state：購買數量
  const dispatch = useDispatch();

  const handleBackClick = () => {
    navigate('/');
  };

  const handleAddToCart = () => {
    dispatch(addCartItem({
      id: book.ID,
      title: book.title,
      price: book.price,
      cover: book.cover,
      qty,
    }));
    alert(`已加入購物車：${book.title} x ${qty}`);
  };

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-container">
      <h1 className="book-title">{book.title}</h1>
      <h3 className="book-author">By {book.author}</h3>
      <img className="book-cover" src={book.cover} alt={book.title} />
      <p className="book-summary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{book.summary}</p>
      <p className="book-details">
        <strong>Price:</strong> ${book.price}
      </p>
      <p className="book-details">
        <strong>Stock:</strong> {book.stock} available
      </p>

      <div className="center">
        {/* 新增：選擇數量 */}
        <label htmlFor="qty"><strong>Quantity:</strong></label>
        <select
          id="qty"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
        >
          {[...Array(book.stock).keys()].map(i => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>

        {/* 新增：加入購物車按鈕 */}
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>

        <button className="back-button" onClick={handleBackClick}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Book;
