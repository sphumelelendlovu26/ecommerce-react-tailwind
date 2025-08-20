import ProductCard from "../ProductCard";

const PopularList = ({ products }) => {
  const popular = products && products.filter((product) => product.rating > 4);

  console.log("popular: ", popular);

  return (
    <main>
      {popular.map((item) => (
        <ProductCard product={item} />
      ))}
    </main>
  );
};

export default PopularList;
