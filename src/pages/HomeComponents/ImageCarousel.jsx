import { useState, useEffect } from "react";

const ImageCarousel = () => {
  const [promos, setPromos] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchPromos = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      const sortedPromos = data.products
        .filter((product) => product.discountPercentage > 0)
        .sort((a, b) => b.discountPercentage - a.discountPercentage);

      setPromos(sortedPromos.slice(0, 10));
    };

    fetchPromos();
  }, []);

  useEffect(() => {
    if (promos.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % promos.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [promos]);

  if (promos.length === 0 || !promos[index]) {
    return (
      <section className="col-span-1 row-span-2 animate-pulse">
        <div className="w-full h-48 bg-gray-200 rounded-xl mb-2" />
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto" />
      </section>
    );
  }

  const currentPromo = promos[index];

  return (
    <section className=" col-span-1 row-span-1 ">
      <div className="w-full h-48 relative ">
        <h2 className="text-lg font-bold mb-2 text-center">Promotions</h2>
        <img
          src={currentPromo.images[0] || ""}
          alt={currentPromo.title}
          className="w-full  object-cover rounded-xl transition-opacity duration-700 ease-in-out"
          loading="lazy"
        />
        <span className="bg-red-600 absolute top-4 right-0 rounded p text-white">
          -{currentPromo.discountPercentage} OFF
        </span>
      </div>
    </section>
  );
};

export default ImageCarousel;
