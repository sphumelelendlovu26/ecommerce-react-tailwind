import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="size-full flex  justify-center items-center">
      {" "}
      <motion.div
        className="border-t-3 rounded-full size-10  border-indigo-300 "
        animate={{ rotate: 360, opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
      />
    </div>
  );
};
export default Loader;
