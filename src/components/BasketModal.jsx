import React from 'react';
import { useSelector } from 'react-redux';
import './BasketModal.css';

const BasketModal = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>What's in the cart</h2>
        {cartItems.length === 0 ? (
          <p>It's empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.cover} alt={item.title} className="thumb" />
                <div>
                  <strong>{item.title}</strong><br />
                  Qty：{item.qty}｜Price：${item.price}
                </div>
              </li>
            ))}
          </ul>
        )}
        <hr />
        <p><strong>Total：</strong>${totalPrice}</p>
        <button onClick={onClose}>CLOSE</button>
      </div>
    </div>
  );
};

export default BasketModal;
