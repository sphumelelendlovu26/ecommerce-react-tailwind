import { motion } from "framer-motion";
import ImageCarousel from "./components/ImageCarousel";

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
      className="grid h-screen page"
    >
      <ImageCarousel />
    </motion.main>
  );
};
export default Home;
