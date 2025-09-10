import { MdDelete } from "react-icons/md";

import {
  addCartItem,
  decreaseQuantity,
  increaseQuantity,
  removeCartItem,
} from "../../states/cartSlice";
import { useDispatch } from "react-redux";

import { motion } from "framer-motion";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  function handleRemoveItem() {
    dispatch(removeCartItem(product.id));
  }

  function handleIncreaseQuantity() {
    dispatch(increaseQuantity(product.id));
  }
  function handleDecreaseQuantity() {
    dispatch(decreaseQuantity(product.id));
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{
        duration: 0.3,
      }}
      className="flex items-center gap-1 cartItem shadow-md hover:cursor-pointer hover:shadow-indigo-500   transition-all duration-300 rounded-xl text-xs  sm:text-sm"
    >
      <img
        src={product.thumbnail}
        alt={product.name}
        className="w-20 h-20 object-cover"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-center">{product.title}</h3>
        <div className="flex justify-between w-full border-b-1 border-indigo-500">
          <span>Price : </span>
          <span>$ {product.price}</span>
        </div>
        <div className=" flex gap-2 cartItem mt-2 justify-around px-1">
          <button
            onClick={handleDecreaseQuantity}
            className=" rounded-full indigoBtn hover:bg-gray-500"
          >
            -
          </button>
          <span> {product.quantity}</span>
          <button
            onClick={handleIncreaseQuantity}
            className=" indigoBtn rounded-full hover:bg-gray-500 transition-all"
          >
            +
          </button>
        </div>{" "}
        <div className="flex justify-between w-full border-b-1 border-indigo-500">
          <span>SubTotal : </span>
          <span>$ {product.price * product.quantity}</span>
        </div>
      </div>
      <button onClick={() => handleRemoveItem()} className="text-red-500">
        <MdDelete />
      </button>
    </motion.div>
  );
};

export default CartItem;
