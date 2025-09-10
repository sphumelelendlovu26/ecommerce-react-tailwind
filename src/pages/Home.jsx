import { motion } from "framer-motion";
import PopularList from "./components/Popular";
import ImageCarousel from "./components/ImageCarousel";
import { ModalContext } from "../Context/ModalContext";
import { lazy, Suspense, useContext } from "react";
const Modal = lazy(() => import("./Modal"));
const Home = ({ products }) => {
  const { isOpen, modalProduct } = useContext(ModalContext);

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, x: 20 }}
      className="page w-full overflow-x-hidden flex flex-col items-center gap-8 px-4 sm:px-8 md:px-12"
    >
      <section className="text-center py-8 sm:py-12">
        <motion.h1
          className="text-2xl sm:text-4xl font-bold mb-4"
          variants={containerVariants}
        >
          Welcome to <span className="text-indigo-500">SwiftBuy</span>
        </motion.h1>
        <motion.p
          className=" text-gray-600 text-center sm:text-lg max-w-2xl  mx-auto"
          variants={containerVariants}
        >
          Discover the best products, hand-picked just for you. Browse trending
          deals, explore top-rated favorites, and shop with ease.
        </motion.p>
      </section>

      <section className="grid grid-cols-1  gap-8 items-start">
        <motion.div
          variants={containerVariants}
          className="w-full rounded-2xl shadow-md overflow-hidden"
        >
          <ImageCarousel />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="w-full rounded-2xl  gap-2 "
        >
          <h2 className="text-xl font-semibold mb-4">Top Rated Products</h2>
          {products && <PopularList products={products} />}
        </motion.div>
      </section>
      <Suspense>
        <Modal isOpen={isOpen} product={modalProduct} />
      </Suspense>
    </motion.main>
  );
};

export default Home;
