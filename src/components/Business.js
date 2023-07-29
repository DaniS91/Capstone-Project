import React from "react";
import PropTypes from "prop-types";
import { Rating, Card } from '@mui/material/';


function Business(props){
  return (
    <React.Fragment>
      
      <Card 
        variant="outlined"
        onClick = {() => props.whenBusinessClicked(props.id)}>
        <h2>{props.name}</h2>
        {props.avgRating !== null ? (
          <Rating value={props.avgRating} readOnly={true}/>
        ) : (<p>Not yet Rated</p>)}
        <h3>{props.category}</h3>
        <p>{props.city}, {props.state}</p>
      </Card>
      
    </React.Fragment>
  );
}

Business.propTypes = {
  name: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  avgRating: PropTypes.number
};

export default Business;