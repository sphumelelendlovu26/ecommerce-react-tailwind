import CartItem from "./components/cartItem";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const globalCartState = useContext(CartContext);
  const cartItems = globalCartState.state;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-cols-2 gap-3">
      {cartItems.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Cart;
