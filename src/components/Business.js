import React from "react";
import PropTypes from "prop-types";

function Business(props){

  return (
    <React.Fragment>
      <h2>{props.name}</h2>
      <p>{props.address}</p>
      <p>{props.city}, {props.state}</p>
    </React.Fragment>
  );
}

Business.propTypes = {
  name: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  address: PropTypes.string
};

export default Business;