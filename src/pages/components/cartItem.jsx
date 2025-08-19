import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
const CartItem = ({ product }) => {
  const globalCartState = useContext(CartContext);
  const dispatch = globalCartState.dispatch;

  return (
    <div className="flex items-center gap-4 cartItem shadow-md hover:cursor-pointer hover:shadow-indigo-500  transition-all duration-300 round-xl ">
      <img
        src={product.thumbnail}
        alt={product.name}
        className="w-20 h-20 object-cover"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-center">{product.title}</h3>
        <div className="flex justify-between w-full border rounded-sm border-indigo-500">
          <span>Price : </span>
          <span>$ {product.price}</span>
        </div>
        <div className=" flex gap-2 mt-2 justify-around px-1">
          <button
            onClick={() => dispatch({ type: "Decrease", payload: product })}
            className="bg-gray-300 rounded-full hover:bg-gray-500"
          >
            -
          </button>
          <span>Quantity: {product.quantity}</span>
          <button
            onClick={() => dispatch({ type: "Increase", payload: product })}
            className="bg-gray-300 rounded-full hover:bg-gray-500 transition-all"
          >
            +
          </button>
        </div>{" "}
        <div className="flex justify-between w-full border rounded-sm border-indigo-500">
          <span>SubTotal : </span>
          <span>$ {product.price * product.quantity}</span>
        </div>
      </div>
      <button
        onClick={() => dispatch({ type: "Delete", payload: product })}
        className="text-red-500"
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default CartItem;
