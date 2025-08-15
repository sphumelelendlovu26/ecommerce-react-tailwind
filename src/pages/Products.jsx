import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

import { ThemeContext } from "../Context/ThemeContext";

const MotionProductCard = motion(ProductCard);

const ProductList = ({ query, setIsOpen, setModalProduct }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const bgColor =
    theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-";

  const [products, setProducts] = useState([]);

  console.log("query is", query);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = query
          ? `https://dummyjson.com/products/search?q=${query}`
          : "https://dummyjson.com/products";

        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.products);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [query]);
  const cardContainerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const cardVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <motion.div
      variants={cardContainerVariants}
      initial="initial"
      animate="animate"
      transition={{ type: "tween", ease: "easeOut" }}
      exit={{ opacity: 0, x: -20 }}
      className={`${bgColor} grid [grid-template-columns:repeat(auto-fit,_minmax(300px,_1fr))] page  place-content-center gap-2 overflow-hidden respGrid`}
    >
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((product) => (
          <MotionProductCard
            variants={cardVariants}
            key={product.id}
            product={product}
            setIsOpen={setIsOpen}
            setModalProduct={setModalProduct}
          ></MotionProductCard>
        ))
      )}
    </motion.div>
  );
};

export default ProductList;
