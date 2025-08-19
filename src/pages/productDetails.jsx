const ProductDetails = ({ product, theme }) => {
  // --------------------------------------
  const bgColor =
    theme === "dark"
      ? "bg-gray-900 text-gray-900"
      : " bg-[rgba(255, 255, 255, 0.3)] text-gray-900";

  return (
    <div
      className={`h-full ${bgColor}  backdrop-opacity-10  opacity-100 flex flex-col items-center gap-1`}
    >
      <h1 className="text-center font-bold font-">Product Details</h1>
      <div className="h-[50%]  w-full">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="size-full object-cover"
        />
      </div>
      <h2 className="text-center font-bold ">{product.title}</h2>
      <h3 className="text-center">{product.price}</h3>
      <h2 className="text-center font-bold">Description</h2>
      <p className="text-center">{product.description}</p>
      <h2 className="text-center font-bold">Category : {product.category}</h2>
      <h2 className="text-center font-bold">
        Availability : {product.stock} in stock
      </h2>
      <button className="text-indigo-500">Reviews </button>
    </div>
  );
};
export default ProductDetails;
