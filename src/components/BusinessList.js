import React from "react";
import Business from "./Business";
const mainBusinessList = [
  {
    name: 'Barber',
    address: '3700 78th Ave',
    city: 'Portland',
    state: 'OR'
  },
  {
    name: 'Chiropractor',
    address: '4201 MLK BLVD',
    city: 'Portland',
    state: 'OR'
  },
  {
    name: 'Plastic Surgeon, MD',
    address: '610 NE Sleep Ave',
    city: 'Portland',
    state: 'OR'
  }
];
function BusinessList(){
  return(
    <React.Fragment>
        <hr/>
        {mainBusinessList.map((business, index) =>
          <Business name={business.name}
            address={business.address}
            city={business.city}
            state={business.state}
            key={index}/>
        )}
      </React.Fragment>
  );
}

export default BusinessList;