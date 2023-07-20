import React from "react";
import Review from "./Review";
import PropTypes from "prop-types";

function ReviewList(props){
  return(
    <React.Fragment>
      {props.reviewList.map((review) =>
        <Review 
          title={review.reviewTitle}
          rating={review.rating}
          reviewText={review.reviewText}
          key={review.id} />
      )}
    </React.Fragment>
  )
}

ReviewList.propTypes = {
  reviewList: PropTypes.array
};

export default ReviewList;