import ProductCard from "./ProductCard";
import { ThemeContext } from "../../Context&functions/ThemeContext";
import { useContext } from "react";

const PopularList = ({ products }) => {
  const { theme } = useContext(ThemeContext);
  const popular = products && products.filter((product) => product.rating > 4);

  console.log("popular: ", popular);

  return (
    <main
      className={`grid ${theme === "dark" ? "bg-gray-500" : "bg-gray-200"}  grid-cols-2 sm:grid-cols-3 gap-3 popularProducts`}
    >
      {popular.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </main>
  );
};

export default PopularList;
