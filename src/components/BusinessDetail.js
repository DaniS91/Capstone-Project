import React from "react";
import PropTypes from "prop-types";
import ReviewList from "./ReviewList";
import RateReviewIcon from '@mui/icons-material/RateReview';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';

function BusinessDetail(props){
  const { business, onClickingDelete, onClickingEdit, onClickingReview } = props;

  return (
    <React.Fragment>
      <h1>{business.name}</h1>
      <p>{business.address}</p>
      <p>{business.city}, {business.state}  {props.zipcode}</p>
      <p>{props.category}</p>
      <p>{props.url}</p>
      <hr></hr>
      <ReviewList />
      <hr></hr>
      <Button 
        onClick={()=> onClickingReview(business.id)}
        color="success"
        size="small" 
        variant="contained"
        startIcon={<RateReviewIcon />}
        >Add Review</Button>
      <Button 
        onClick={()=> onClickingEdit(business.id)}
        color="info"
        size="small" 
        variant="contained"
        startIcon={<EditIcon />}
        >Edit</Button>
      <Button 
        onClick={()=> onClickingDelete(business.id)}
        color="error"
        size="small"
        variant="contained"
        startIcon={<DeleteForeverIcon />}
        >Delete</Button>
        <hr></hr>
    </React.Fragment>
  );
}

BusinessDetail.propTypes = {
  business: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingReview: PropTypes.func
};

export default BusinessDetail;