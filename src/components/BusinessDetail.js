import React from "react";
import PropTypes from "prop-types";
import ReviewList from "./ReviewList";
import RateReviewIcon from '@mui/icons-material/RateReview';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import AccessibleIcon from '@mui/icons-material/Accessible';
import NotAccessibleIcon from '@mui/icons-material/NotAccessible';
import WcIcon from '@mui/icons-material/Wc';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Rating } from "@mui/material";

function BusinessDetail(props){
  const { business, onClickingDelete, onClickingEdit, onClickingReview } = props;
  
  return (
    <React.Fragment>
      <h1>{business.name}</h1>
      {business.avgRating !== null ? (
          <Rating value={business.avgRating} readOnly={true}/>
        ) : (<p>Not yet Rated</p>)}
      <p>{business.address}</p>
      <p>{business.city}, {business.state}  {business.zipcode}</p>
      <p>{business.category}</p>
      <a href={business.url}>Website</a>
      <p>{business.description}</p>
      
      <p>{business.accessibility ? <AccessibleIcon fontSize="inherit"/> : <NotAccessibleIcon fontSize="inherit"/>}Wheelchair Accessible: {business.accessibility ? "Yes" : "No"}</p>
      <p>{business.restrooms ? <HowToRegIcon fontSize="inherit"/> : <WcIcon fontSize="inherit"/>}Gender-Neutral Restrooms: {business.restrooms ? "Yes" : "No"}</p>
      <hr></hr>
      <ReviewList 
        reviewList={business.reviewList}/>
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