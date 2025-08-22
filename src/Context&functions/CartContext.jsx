import { createContext, useReducer, useEffect } from "react";
import CartReducer from "./CartReducer";
import { getLocalStorage, setLocalStorage } from "./localStorage";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, getLocalStorage("cart"));
  useEffect(() => {
    console.log("Cart state updated:", state);
    setLocalStorage("cart", state);
    console.log(localStorage);
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
