import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../Context/ThemeContext";
import ProductDetails from "./productDetails";
import { AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, setIsOpen, product }) => {
  const { theme } = useContext(ThemeContext);
  const bgColor =
    theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-white";

  const modalVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalVariants}
          className={`fixed ${isOpen === true ? "z-[1000]" : "z-[-1000]"} top-0 left-0 modal  bg-transparent opacity-100 backdrop-opacity-5  flex justify-center items-center   `}
        >
          <motion.div
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className={`${bgColor} shadow-lg border-1 border-indigo-200 h-10/12 w-11/12 sm:w-1/2 rounded-sm relative max-w-xl modalProductContainer opacity-100`}
          >
            <button
              className="z-50 text-red-500 absolute right-1 top-1 hover:bg-red-500 hover:text-white rounded transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>{" "}
            {product && <ProductDetails product={product} theme={theme} />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
