import { createContext, useReducer, useEffect } from "react";
import CartReducer from "./CartReducer";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, []);
  useEffect(() => {
    console.log("Cart state updated:", state);
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
