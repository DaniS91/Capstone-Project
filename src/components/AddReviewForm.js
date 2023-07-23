import React from "react";
import PropTypes from "prop-types";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
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
        <Rating 
          name="rating"
          precision="1"
          size="medium"
          />
        <br></br> 
        <input 
          type='text'
          name='reviewText'
          placeholder='Your Review' />
          <br></br>
        <br></br>
        <Button type='submit'
          color="success"
          size="small" 
          variant="contained">Submit</Button>
      </form>
    </React.Fragment>
  )
}

AddReviewForm.propTypes = {
  business: PropTypes.object,
  onReviewBusiness: PropTypes.func
}
export default AddReviewForm;