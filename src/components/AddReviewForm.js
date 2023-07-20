import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function AddReviewForm (props) {
  const { business } = props;

  function handleAddReviewFormSubmission(event) {
    event.preventDefault();
    let review = {
      reviewTitle: event.target.reviewTitle.value,
      rating: event.target.rating.value,
      reviewText: event.target.reviewText.value,
      businessId: business.id,
      id: v4()
    };
    props.onReviewBusiness(review);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleAddReviewFormSubmission}>
        <input
          type='text'
          name='reviewTitle'
          placeholder='Your Review Title' />
        <br></br>
        <input 
          type='text'
          name='rating'
          placeholder='Rating' />
          <br></br>
        <input 
          type='text'
          name='reviewText'
          placeholder='Your Review' />
          <br></br>
        <br></br>
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}

AddReviewForm.propTypes = {
  business: PropTypes.object,
  onReviewBusiness: PropTypes.func
}
export default AddReviewForm;