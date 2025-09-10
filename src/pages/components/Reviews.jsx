import React, { useRef, useEffect, lazy, Suspense, useContext } from "react";
import { motion } from "framer-motion";
import Loader from "../../loaders/Loader";
import { ThemeContext } from "../../Context/ThemeContext";
const ReviewCard = lazy(() => import("./ReviewCard"));

const Reviews = ({ reviews, setIsReviewing }) => {
  const reviewRef = useRef();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (reviewRef.current && !reviewRef.current.contains(e.target)) {
        setIsReviewing(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const bgColor =
    theme === "dark"
      ? "bg-gray-900 text-white"
      : " bg-[rgba(255, 255, 255, 0.3)] text-gray-900 border-indigo-500";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className={`size-full ${bgColor} absolute shadow-xl z-[1000] rounded bottom-1 p-2 flex flex-col justify-center `}
      ref={reviewRef}
    >
      <h2 className="border-gray-500 font-bold text-center m-2 text-indigo-500">
        Reviews
      </h2>
      <Suspense fallback={<Loader />}>
        <ul>
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </ul>
      </Suspense>
      <button
        onClick={() => setIsReviewing(false)}
        className="absolute right-1.5 top-1.5 text-red-500"
      >
        X
      </button>
    </motion.div>
  );
};

export default React.memo(Reviews);
