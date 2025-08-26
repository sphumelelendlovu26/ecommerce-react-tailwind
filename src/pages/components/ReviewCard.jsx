import React from "react";
const ReviewCard = ({ review }) => {
  return (
    <div className=" reviewCard">
      <h1 className="text-center">
        <span className="font-bold">{review.reviewerName}</span>{" "}
        <span> Rating: </span>
        <span>{review.rating}</span>
      </h1>
      <p className="text-center">{review.comment}</p>
    </div>
  );
};

export default React.memo(ReviewCard);
