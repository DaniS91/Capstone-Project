import React from "react";
import PropTypes from "prop-types";

function Business(props){
  console.log(props.neutralRestroom);
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBusinessClicked(props.id)}>
        <h2>{props.name}</h2>
        <p>{props.address}, {props.city}, {props.state}</p>
      </div>
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