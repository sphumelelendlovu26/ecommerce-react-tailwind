const ProductCard = ({ product }) => {
  return (
    <div className="shadow-md rounded-xl flex flex-col hover:cursor-pointer hover:shadow-indigo-500 transition-all duration-300">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="size-20 sm:size-40 object-cover mb-2 align-middle "
        style={{ alignSelf: "center" }}
      />
      <h2 className="font-bold text-center">{product.title}</h2>
      <p className="text-gray-600 font-bold text-center">$ {product.price}</p>
    </div>
  );
};
export default ProductCard;
