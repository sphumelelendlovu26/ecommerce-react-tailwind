const ProductDetails = ({ modalProduct }) => {
  return (
    <div>
      <h1 className="text-center">Product Details</h1>
      <div className="size-40 ">
        <img
          src={modalProduct.thumbnail}
          alt={modalProduct.title}
          className="object-cover"
        />
      </div>
      <h2>{modalProduct.title}</h2>
      <h3>{modalProduct.price}</h3>
      <h2>Description</h2>
      <p>{modalProduct.description}</p>
      <h2>Category : {modalProduct.category}</h2>
      <h2>Availability : {modalProduct.stock} in stock</h2>
    </div>
  );
};
export default ProductDetails;
