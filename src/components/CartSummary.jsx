import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BasketModal from './BasketModal';
import { HiShoppingCart } from 'react-icons/hi'; // 加這行！
import './CartSummary.css';

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="cart-summary" onClick={() => setIsOpen(true)}>
        <HiShoppingCart size={50} />
        {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
      </div>
      <BasketModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default CartSummary;
