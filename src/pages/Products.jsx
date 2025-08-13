import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

import { motion } from "framer-motion";

const MotionProductCard = motion(ProductCard);

const ProductList = ({ userInput }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = userInput
          ? `https://dummyjson.com/products/search?q=${userInput}`
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
  }, [userInput]);

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
      className="grid page grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-content-center gap-2 overflow-hidden"
    >
      {products.map((product) => (
        <MotionProductCard
          variants={cardVariants}
          key={product.id}
          product={product}
        ></MotionProductCard>
      ))}
    </motion.div>
  );
};

export default ProductList;
