import { motion } from "framer-motion";
import ImageCarousel from "./HomeComponents/ImageCarousel.jsx";

const Home = () => {
  const cardContainerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.main
      variants={cardContainerVariants}
      className="grid grid-cols-2 grid-rows-1"
    >
      <ImageCarousel />
    </motion.main>
  );
};
export default Home;
