import ProductCard from "./ProductCard";
import { ThemeContext } from "../../Context/ThemeContext";
import { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext";

const PopularList = ({ products }) => {
  const { theme } = useContext(ThemeContext);
  const { setModalProduct, setIsOpen, modalProduct } = useContext(ModalContext);

  const popular = products && products.filter((product) => product.rating > 4);

  return (
    <main
      className={`grid ${theme === "dark" ? "bg-gray-500" : "bg-gray-200"}  grid-cols-2 sm:grid-cols-3 gap-3 popularProducts`}
    >
      {popular.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          setIsOpen={setIsOpen}
          setModalProduct={setModalProduct}
        />
      ))}
    </main>
  );
};

export default PopularList;
