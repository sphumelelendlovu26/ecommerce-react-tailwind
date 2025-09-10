import { useContext } from "react";
import ProductCard from "./components/ProductCard";
import { motion } from "framer-motion";
import { ThemeContext } from "../Context/ThemeContext";
import React from "react";
import Modal from "./Modal";
import { ModalContext } from "../Context/ModalContext";

const ProductList = React.memo(({ products }) => {
  const { theme } = useContext(ThemeContext);
  const { setModalProduct, isOpen, setIsOpen, modalProduct } =
    useContext(ModalContext);

  const bgColor =
    theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-";

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
      variants={containerVariants}
      initial="hidden"
      animate="show"
      transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
      layout
      exit={{ opacity: 0, x: 20 }}
      className={`${bgColor} grid page grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-content-center gap-2 overflow-hidden respGrid`}
    >
      {" "}
      {products &&
        products.map((product) => (
          <motion.div variants={itemVariants} key={product.id}>
            <ProductCard
              initial="hidden"
              animate="show"
              product={product}
              setIsOpen={setIsOpen}
              setModalProduct={setModalProduct}
            />
          </motion.div>
        ))}
      <Modal isOpen={isOpen} product={modalProduct} />
    </motion.div>
  );
});

export default ProductList;
