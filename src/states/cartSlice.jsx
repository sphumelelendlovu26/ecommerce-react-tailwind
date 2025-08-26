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
        state.cartItems.push(action.payload);
        setLocalStorage("cart", action.payload);
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
  },
});

export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
