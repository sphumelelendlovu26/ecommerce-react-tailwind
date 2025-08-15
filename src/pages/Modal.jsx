import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../Context/ThemeContext";
import ProductDetails from "./productDetails";
import { AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, setIsOpen, modalProduct }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const bgColor =
    theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black";

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
          className={`fixed ${isOpen === true ? "z-[1000]" : "z-[-1000]"} top-0 left-0 modal  ${bgColor} opacity-90 backdrop-blur-lg  flex justify-center items-center   `}
        >
          <motion.div
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className={`${bgColor} border-2 h-10/12 w-1/2 rounded-sm relative max-w-xl modalProductContainer`}
          >
            <button
              className="text-red-500 absolute right-0.5 to-5%"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
            {modalProduct && <ProductDetails modalProduct={modalProduct} />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
