import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <motion.div className="reviewCard">
      <h1 className="text-center  flex items-center justify-center">
        <span className="font-bold mr-1"> {review.reviewerName}</span>{" "}
        <span className="   text-gray-400"> Rated: </span>
        <span className="flex items-center">
          {""}
          <FaStar className="items-center inline ml-1 text-amber-400" />
          {review.rating}
        </span>
      </h1>
      <p className="text-center">{review.comment}</p>
    </motion.div>
  );
};

export default React.memo(ReviewCard);
