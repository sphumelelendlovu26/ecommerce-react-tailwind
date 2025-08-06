import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ userInput }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = userInput
        ? `https://dummyjson.com/products/search?q=${userInput}`
        : "https://dummyjson.com/products";

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
      console.log(data);
    };
    fetchProducts();
  }, [userInput]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-content-center gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default ProductList;
