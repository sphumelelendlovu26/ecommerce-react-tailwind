import { useContext, useEffect, useState, lazy, Suspense } from "react";
const ProductCard = lazy(() => import("./ProductCard"));
import { motion } from "framer-motion";

import { ThemeContext } from "../Context/ThemeContext";

const MotionProductCard = motion(ProductCard);

const ProductList = ({ setIsOpen, setModalProduct, products }) => {
  const { theme } = useContext(ThemeContext);
  const bgColor =
    theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-";

  const cardContainerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const cardVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <motion.div
      variants={{ cardContainerVariants, cardVariants }}
      initial="initial"
      animate="animate"
      transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
      layout
      exit={{ opacity: 0, x: -20 }}
      className={`${bgColor} grid page grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-content-center gap-2 overflow-hidden respGrid`}
    >
      {" "}
      <Suspense fallback="loading">
        {products &&
          products.map((product) => (
            <MotionProductCard
              variants={cardVariants}
              key={product.id}
              product={product}
              setIsOpen={setIsOpen}
              setModalProduct={setModalProduct}
            />
          ))}
      </Suspense>
    </motion.div>
  );
};

export default ProductList;
