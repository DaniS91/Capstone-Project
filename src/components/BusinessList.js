import React from "react";
import PropTypes from "prop-types";
import Business from "./Business";

function BusinessList(props){
  return(
    <React.Fragment>
        <hr/>
        {props.mainBusinessList.map((business) =>
          <Business
            whenBusinessClicked = { props.onBusinessSelection }
            name={business.name}
            address={business.address}
            city={business.city}
            state={business.state}
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