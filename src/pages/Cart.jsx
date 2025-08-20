import { CartContext } from "../Context/CartContext";
import { useContext, lazy, Suspense } from "react";
const CartItem = lazy(() => import("./components/cartItem"));
const Cart = () => {
  const globalCartState = useContext(CartContext);
  const cartItems = globalCartState.state;

  return (
    <div className="page grid cart size-screen grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-3 text-black">
      {cartItems.length === 0 ? (
        <div>No Items In Cart</div>
      ) : (
        <Suspense fallback="loading">
          {cartItems.map((item) => (
            <CartItem product={item} key={item.id} />
          ))}
        </Suspense>
      )}
    </div>
  );
};

export default Cart;
