import React from "react";
import PropTypes from "prop-types";

function Review(props){
 console.log(props.title);

  return(
    <React.Fragment>
      <h2>{props.title}</h2>
      <h3>{props.rating}</h3>
      <p>{props.reviewText}</p>
    </React.Fragment>
  )
}

Review.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.string,
  reviewText: PropTypes.string
};
export default Review;