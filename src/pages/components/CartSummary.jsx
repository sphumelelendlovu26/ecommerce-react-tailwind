import { useContext, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const CartSummary = ({ summary }) => {
  const { theme } = useContext(ThemeContext);
  const [viewingCart, setViewingCart] = useState(false);
  const bgColor = theme === "dark" ? "dark" : "bg-white  text-black ";
  return !viewingCart ? (
    <button className="summaryButton font-bold text-indigo-500 text-center shadow sm:bottom-10 fixed right-0">
      Cart Summary <span className="rotate-90">{"<"}</span>
    </button>
  ) : (
    <div className={`cartSummary font-bold shadow-md ${bgColor}`}>
      <h1 className="font-bold text-indigo-500 text-center underline">
        Cart Summary
      </h1>
      <h3 className="cartSummaryH3">
        <span>Total Items : </span>
        <span>{summary.items}</span>
      </h3>
      <h3 className="cartSummaryH3">
        <span>Total Price : </span>
        <span>{summary.orderTotal}</span>
      </h3>
      <h3 className="cartSummaryH3">
        <span>Discount :</span>

        <span> {summary.discount}</span>
      </h3>
      <h2 className="cartSummaryH3">
        <span>Order Total : </span>
        <span>{summary.total}</span>
      </h2>
      <button className="w-full bg-indigo-500 text-white rounded indigoBtn">
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
