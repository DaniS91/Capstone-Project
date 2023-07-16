import React from "react";
import PropTypes from "prop-types";

function BusinessDetail(props){
  const { business, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>{business.name}</h1>
      <p>{business.address}</p>
      <p>{business.city}, {business.state}</p>
      <button onClick={()=> onClickingDelete(business.id)}>Delete Business</button>
    </React.Fragment>
  );
}

BusinessDetail.propTypes = {
  business: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default BusinessDetail;