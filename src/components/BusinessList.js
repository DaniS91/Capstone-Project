import React from "react";
import PropTypes from "prop-types";
import Business from "./Business";

function BusinessList(props){
  return(
    <React.Fragment>
        {props.businessList.map((business) =>
          <Business
            whenBusinessClicked = { props.onBusinessSelection }
            name={business.name}
            address={business.address}
            city={business.city}
            state={business.state}
            zipcode={business.zipcode}
            url={business.url}
            avgRating={business.avgRating}
            category={business.category}
            id={business.id}
            key={business.id}/>
        )}
      </React.Fragment>
  );
}

BusinessList.propTypes = {
  businessList: PropTypes.array,
  onBusinessSelection: PropTypes.func
};
export default BusinessList;