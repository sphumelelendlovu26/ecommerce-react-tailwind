import { useContext, lazy, Suspense, useMemo } from "react";
import { Link } from "react-router-dom";
const CartItem = lazy(() => import("./components/cartItem"));
const CartSummary = lazy(() => import("./components/CartSummary"));
import { ThemeContext } from "../Context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("cart ", cartItems);

  const { theme } = useContext(ThemeContext);

  const summary = useMemo(() => {
    let priceSum = 0;
    let items = 0;
    let discount = 0;
    for (let i = 0; i < cartItems.length; i++) {
      discount +=
        (cartItems[i].discountPercentage / 100) *
        cartItems[i].price *
        cartItems[i].quantity;
      priceSum += cartItems[i].price * cartItems[i].quantity;
      items += cartItems[i].quantity;
    }
    return {
      orderTotal: priceSum.toFixed(2),
      discount: discount.toFixed(2),
      total: (priceSum - discount).toFixed(2),
      items: items,
    };
  }, [cartItems]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      layout
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`page ${theme === "dark" ? "text-white" : "text-black"} grid cart size-screen grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-3 text-black`}
    >
      {cartItems.length === 0 ? (
        <h4 className="  w-full">
          No Items In Cart. Browse{" "}
          <Link className="text-indigo-600" to="/products">
            Products
          </Link>{" "}
          To Add.
        </h4>
      ) : (
        <Suspense fallback="loading">
          {" "}
          <AnimatePresence>
            {cartItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <CartItem product={item} />
              </motion.div>
            ))}
            <CartSummary summary={summary} />{" "}
          </AnimatePresence>
        </Suspense>
      )}
    </motion.div>
  );
};

export default Cart;
