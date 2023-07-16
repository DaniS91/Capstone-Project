import React from "react";
import PropTypes from "prop-types";
import ReviewList from "./ReviewList";

function BusinessDetail(props){
  const { business, onClickingDelete, onClickingEdit, onClickingAddReview } = props;

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
      <button onClick={()=> onClickingAddReview(business.id)}>Add Review to Business</button>
      <hr></hr>
      <button onClick={()=> onClickingEdit(business.id)}>Edit Business</button>
      <button onClick={()=> onClickingDelete(business.id)}>Delete Business</button>
    </React.Fragment>
  );
}

BusinessDetail.propTypes = {
  business: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingAddReview: PropTypes.func
};

export default BusinessDetail;