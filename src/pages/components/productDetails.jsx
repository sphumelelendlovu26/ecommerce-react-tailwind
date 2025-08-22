import { useState } from "react";
import Reviews from "./Reviews";
import { AnimatePresence, motion } from "framer-motion";

const MotionReviews = motion(Reviews);
const ProductDetails = ({ product, theme }) => {
  const bgColor =
    theme === "dark"
      ? "bg-gray-900 text-white"
      : " bg-[rgba(255, 255, 255, 0.3)] text-gray-900";

  const [isReviewing, setIsReviewing] = useState(false);
  console.log(isReviewing);
  const reviewVariants = {
    close: { opacity: 0, y: 50, height: 0 },
    open: { opacity: 1, y: 0, height: "auto" },
  };

  return (
    <div
      className={`h-full ${bgColor} overflow-scroll  backdrop-opacity-10  opacity-100 flex flex-col items-center gap-1`}
    >
      <h1 className="text-center font-bold ">Product Details</h1>
      <div className=" w-full h-5/12 flex justify-center items-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="size-3/5 object-cover"
        />
      </div>
      <h2 className="text-center font-bold ">{product.title}</h2>
      <h3 className="text-center">{product.price}</h3>
      <h2 className="text-center font-bold">Description</h2>
      <p className="text-center">{product.description}</p>
      <h2 className="text-center font-bold">Category : {product.category}</h2>
      <h2 className="text-center font-bold">
        Availability : {product.stock} in stock
      </h2>
      <button
        onClick={() => setIsReviewing((prev) => !prev)}
        className="text-indigo-500 "
      >
        Reviews{" "}
      </button>
      <AnimatePresence>
        {isReviewing && (
          <MotionReviews
            layout
            variants={reviewVariants}
            initial="close"
            animate="open"
            transition={{
              duration: 0.3,
              type: "tween",
              ease: "linear",
            }}
            exit="close"
            reviews={product.reviews}
            setIsReviewing={setIsReviewing}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default ProductDetails;
