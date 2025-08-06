import Promo from "./HomeComponents/Promo";
import Popular from "./HomeComponents/PopularList";

const Home = () => {
  return (
    <main className="grid grid-cols-2">
      <Promo />
      <Popular />
    </main>
  );
};
export default Home;
