import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [], // 初始購物車是空的
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
      if (existingItem) {
        // 若已存在，更新數量
        existingItem.qty += newItem.qty;
      } else {
        // 不存在，直接加入購物車
        state.cartItems.push(newItem);
      }
    },
    removeCartItem: (state, action) => {
      const idToRemove = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== idToRemove);
    }
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
