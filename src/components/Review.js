import React from "react";
import PropTypes from "prop-types";

function Review(props){


  return(
    <React.Fragment>
      <h2>{props.title}</h2>
      <h3>{props.date}</h3>
      <p>{props.reviewText}</p>
    </React.Fragment>
  )
}

Review.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  reviewText: PropTypes.string
};
export default Review;