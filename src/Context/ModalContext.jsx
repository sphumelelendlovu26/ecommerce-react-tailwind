import { createContext, useState } from "react";
import ProductCard from "../pages/components/ProductCard";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modalProduct, setModalProduct] = useState();
  const [isOpen, setIsOpen] = useState(false);

  console.log("modal product", modalProduct);
  return (
    <ModalContext.Provider
      value={{ modalProduct, setModalProduct, isOpen, setIsOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
