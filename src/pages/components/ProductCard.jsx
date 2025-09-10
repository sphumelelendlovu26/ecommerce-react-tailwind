import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { ModalContext } from "../../Context/ModalContext";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../states/cartSlice";
import { FaStar } from "react-icons/fa6";
import Loader from "../../loaders/Loader";

const ProductCard = React.memo(({ product, ...motionProps }) => {
  const { setIsOpen, setModalProduct } = useContext(ModalContext);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);

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
      className={`shadow-sm shadow-indigo-600 relative rounded-xl flex flex-col hover:cursor-pointer hover:shadow-indigo-500 transition-all duration-300"
    h-30 sm:h-50`}
    >
      {!imageLoaded && <Loader />}
      <img
        src={product.thumbnail}
        loading="lazy"
        alt={product.title}
        className="size-15 sm:size-30 object-cover mb-2 align-middle "
        style={{ alignSelf: "center" }}
        onLoad={() => setImageLoaded(true)}
      />
      <h2 className="font-bold text-center">{product.title}</h2>{" "}
      <p className=" font-bold text-center">$ {product.price} </p>{" "}
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
        <span className="top-1.5 absolute left-1.5 flex items-center gap-1 text-gray-400">
          <FaStar className="text-amber-400 inline" />
          {product.rating}
        </span>
      </div>{" "}
    </motion.div>
  );
});
export default ProductCard;
