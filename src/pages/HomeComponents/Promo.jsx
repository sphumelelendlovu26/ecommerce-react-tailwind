import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import ProductCard from "../ProductCard";
import "keen-slider/keen-slider.min.css";

const Promo = () => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    const fetchPromos = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      const filtered = data.products.filter(
        (product) => product.discountPercentage
      );
      setPromos(filtered);
    };
    fetchPromos();
  }, []);

  return (
    <section className="shadow col-span-2">
      <h2>Promotions</h2>

      {promos.map((promo) => (
        <div key={promo.id} className="keen-slider__slide">
          <ProductCard product={promo} />
        </div>
      ))}
    </section>
  );
};
export default Promo;
