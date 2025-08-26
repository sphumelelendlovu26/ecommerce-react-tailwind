import React, { useRef, useEffect, lazy, Suspense } from "react";
const ReviewCard = lazy(() => import("./ReviewCard"));

const Reviews = ({ reviews, setIsReviewing }) => {
  const reviewRef = useRef();

  useEffect(() => {
    function handleOutsideClick(e) {
      if (reviewRef.current && !reviewRef.current.contains(e.target)) {
        setIsReviewing(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);
  return (
    <div
      className="w-full  bg-gray-300 absolute shadow-xl z-50 rounded bottom-1/2 p-2 flex flex-col"
      ref={reviewRef}
    >
      <h2 className="font-bold text-center m-2">Reviews</h2>
      <Suspense fallback="Loading">
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
    </div>
  );
};

export default React.memo(Reviews);
