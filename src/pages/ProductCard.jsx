import { motion } from "framer-motion";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { FaCartPlus } from "react-icons/fa6";

const ProductCard = ({
  setIsOpen,
  product,
  setModalProduct,
  ...motionProps
}) => {
  const globalCartState = useContext(CartContext);
  const dispatch = globalCartState.dispatch;

  return (
    <motion.div
      {...motionProps}
      className="shadow-md relative rounded-xl flex flex-col hover:cursor-pointer hover:shadow-indigo-500 transition-all duration-300"
    >
      <img
        src={product.thumbnail}
        loading="lazy"
        alt={product.title}
        className="size-20 sm:size-40 object-cover mb-2 align-middle "
        style={{ alignSelf: "center" }}
      />
      <h2 className="font-bold text-center">{product.title}</h2>
      <p className=" font-bold text-center">$ {product.price}</p>
      <div className="size-full bg-trasparent absolute">
        <div
          onClick={() => {
            setIsOpen(true);
            setModalProduct(product);
          }}
          className=" h-[90%]"
        ></div>{" "}
        <button
          onClick={() => dispatch({ type: "Add", payload: product })}
          className=" absolute top-1.5 right-1.5 bg-indigo-500 hover:cursor-pointer  indigoBtn flex justify-center rounded text-indigo-50 px-3 py-1"
        >
          <FaCartPlus />
        </button>
      </div>
    </motion.div>
  );
};
export default ProductCard;
