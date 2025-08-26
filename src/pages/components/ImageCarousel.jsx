import { useState, useEffect, useContext } from "react";
import ThemeProvider, { ThemeContext } from "../../Context/ThemeContext";

const ImageCarousel = () => {
  const { theme } = useContext(ThemeContext);
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
  const backgroundColor =
    theme === "dark" ? "rgba(55, 65, 81, 0.5)" : "rgba((55, 65, 81, 0.9)";

  return (
    <section
      className={`${
        theme === "dark"
          ? "bg-gray-700 text-white"
          : "bg-gray-100 text-gray-100"
      } flex flex-col items-center carousel shadow-lg rounded-xl p-4 relative`}
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-500">
        Hot Deals
      </h2>
      <div className="relative w-full max-w-2xl flex flex-col items-center overflow-hidden">
        <img
          src={currentPromo.images[0] || ""}
          alt={currentPromo.title}
          className="object-cover w-full h-52 rounded-xl mb-4 transition-transform duration-700 ease-in-out transform hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 bg-red-600 rounded-lg px-3 py-1 text-white font-bold">
          -{currentPromo.discountPercentage}% OFF
        </div>

        <div
          className={`text-center ${backgroundColor} mb-2 backdrop-blur-xl text-shadow-gray-900 text-s  absolute bottom-8  `}
        >
          <h3 className="text-xl font-semibold">{currentPromo.title}</h3>
          <p className="text-sm text-gray-100 line-clamp-2">
            {currentPromo.description}
          </p>
          <div className="mt-1">
            <span className="line-through text-gray-400 mr-2">
              ${currentPromo.price.toFixed(2)}
            </span>
            <span className="font-bold text-lg text-green-600">
              $
              {(
                currentPromo.price *
                (1 - currentPromo.discountPercentage / 100)
              ).toFixed(2)}
            </span>
          </div>
        </div>

        <button className="mt-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg">
          Shop Now
        </button>
      </div>

      <div className="flex mt-4 space-x-2 gap-1 absolute right-5 bottom-5">
        {promos.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-indigo-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;
