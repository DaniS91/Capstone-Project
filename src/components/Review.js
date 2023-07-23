import React from "react";
import PropTypes from "prop-types";
import Rating from '@mui/material/Rating';

function Review(props){
 console.log(props.title);

  return(
    <React.Fragment>
      <h2>{props.title}</h2>
      <Rating 
        value={props.rating}
        readOnly="true"/>
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