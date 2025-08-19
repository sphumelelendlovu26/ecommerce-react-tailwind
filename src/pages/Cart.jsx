import CartItem from "./components/cartItem";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const globalCartState = useContext(CartContext);
  const cartItems = globalCartState.state;

  return (
    <div className="page grid cart size-screen grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-3 text-black">
      {cartItems.length === 0 ? (
        <div>No Items In Cart</div>
      ) : (
        cartItems.map((item) => <CartItem product={item} key={item.id} />)
      )}
    </div>
  );
};

export default Cart;
