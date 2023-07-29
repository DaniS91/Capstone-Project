import React from "react";
import PropTypes from "prop-types";
import Business from "./Business";
import { Box, Stack } from "@mui/material";
function BusinessList(props){
  return(
    <React.Fragment>
      <Stack 
        direction="column"
        spacing={2}
        sx={{margin: '10px'}}>
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
        </Stack>
      </React.Fragment>
  );
}

BusinessList.propTypes = {
  businessList: PropTypes.array,
  onBusinessSelection: PropTypes.func
};
export default BusinessList;