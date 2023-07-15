import React from "react";
import PropTypes from "prop-types";
import Business from "./Business";

function BusinessList(props){
  return(
    <React.Fragment>
        <hr/>
        {props.mainBusinessList.map((business, index) =>
          <Business 
            name={business.name}
            address={business.address}
            city={business.city}
            state={business.state}
            key={index}/>
        )}
      </React.Fragment>
  );
}

BusinessList.propTypes = {
  businessList: PropTypes.array
};
export default BusinessList;