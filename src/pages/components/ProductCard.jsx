import { motion } from "framer-motion";
import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { ModalContext } from "../../Context/ModalContext";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../states/cartSlice";

const ProductCard = React.memo(({ product, ...motionProps }) => {
  const { setIsOpen, setModalProduct } = useContext(ModalContext);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  function handleAddItem() {
    dispatch(addCartItem(product));
    console.log("cart", cartItems);
  }

  return (
    <motion.div
      onClick={() => {
        setIsOpen(true);
        setModalProduct(product);
      }}
      className="shadow-sm relative rounded-xl flex flex-col hover:cursor-pointer hover:shadow-indigo-500 transition-all duration-300"
    >
      {" "}
      <img
        src={product.thumbnail}
        loading="lazy"
        alt={product.title}
        className="size-20 sm:size-40 object-cover mb-2 align-middle "
        style={{ alignSelf: "center" }}
      />{" "}
      <h2 className="font-bold text-center">{product.title}</h2>{" "}
      <p className=" font-bold text-center">$ {product.price}</p>{" "}
      <div className="size-full bg-trasparent absolute">
        {" "}
        <div className=" h-[90%] "></div>{" "}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleAddItem();
          }}
          className=" absolute top-1.5 right-1.5 bg-indigo-500 hover:cursor-pointer z-20 indigoBtn flex justify-center rounded text-indigo-50 px-3 py-1"
        >
          {" "}
          <FaCartPlus />{" "}
        </button>{" "}
      </div>{" "}
    </motion.div>
  );
});
export default ProductCard;
