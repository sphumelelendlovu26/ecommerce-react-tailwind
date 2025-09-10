import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../functions/localStorage";

const initialState = { cartItems: getLocalStorage("cart") };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addCartItem: (state, action) => {
      const exists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!exists) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        setLocalStorage("cart", action.cartItems);
      }
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      setLocalStorage("cart", state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      setLocalStorage("cart", []);
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        setLocalStorage("cart", state.cartItems);
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        setLocalStorage("cart", state.cartItems);
      }
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
