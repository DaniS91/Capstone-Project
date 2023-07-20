import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function AddReviewForm (props) {

  const { business } = props;

  // event handler
  function handleAddReviewFormSubmission(event) {
    event.preventDefault();
    //i feel like I should create a review object from the inputs then concat the review to the reviewList that already exists in business???
    //but i have no idea if this is how this works
    //create review
    let review = {
      reviewTitle: event.target.reviewTitle.value,
      rating: event.target.rating.value,
      reviewText: event.target.reviewText.value,
      businessId: business.id,
      id: v4()
    };
    //send the review back to businesscontrol to add to the business??? idk man
    console.log("handleformsubmission function has been reached")
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