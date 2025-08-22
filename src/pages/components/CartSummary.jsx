import { useContext } from "react";
import { ThemeContext } from "../../Context&functions/ThemeContext";

const CartSummary = ({ summary }) => {
  const { theme } = useContext(ThemeContext);
  const bgColor = theme === "dark" ? "dark" : "bg-white  text-black ";
  return (
    <div className={`cartSummary font-bold shadow-md ${bgColor}`}>
      <h1 className="font-bold text-indigo-500 text-center">Cart Summary</h1>
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
