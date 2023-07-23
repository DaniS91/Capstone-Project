import React from "react";
import PropTypes from "prop-types";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Box from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { v4 } from 'uuid';

function AddReviewForm (props) {
  const { business } = props;

  function handleAddReviewFormSubmission(event) {
    event.preventDefault();
    let review = {
      reviewTitle: event.target.reviewTitle.value,
      rating: parseInt(event.target.rating.value),
      reviewText: event.target.reviewText.value,
      businessId: business.id,
      id: v4()
    };
    props.onReviewBusiness(review);
  }

  return (
    <React.Fragment>
      <Box
        component="form"
        onSubmit={handleAddReviewFormSubmission}
        sx={{
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          display: 'grid'
        }}>
      {/* <form onSubmit={handleAddReviewFormSubmission}> */}
        <TextField
          type='text'
          name='reviewTitle'
          label='Your Review Title' />
        <br></br>
        <Rating 
          name="rating"
          precision="1"
          size="medium"
          />
        <br></br> 
        <TextField 
          type='text'
          name='reviewText'
          label='Your Review' />
          <br></br>
        <br></br>
        <Button type='submit'
          color="success"
          size="small" 
          variant="contained">Submit</Button>
      </Box>
      {/* </form> */}
    </React.Fragment>
  )
}

AddReviewForm.propTypes = {
  business: PropTypes.object,
  onReviewBusiness: PropTypes.func
}
export default AddReviewForm;