import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableBusinessForm from "./ReusableBusinessForm";

function NewBusinessForm(props){

  function handleNewBusinessFormSubmission(event) {
    event.preventDefault();
    props.onNewBusinessCreation({
      name: event.target.name.value,
      address: event.target.address.value,
      city: event.target.city.value,
      state: event.target.state.value,
      zipcode: parseInt(event.target.zipcode.value),
      url: event.target.url.value,
      category: event.target.category.value,
      description: event.target.description.value,
      accessibility: event.target.accessibility.checked,
      restrooms: event.target.restrooms.checked,
      // add more properties
      reviewList: [],
      rating: null,
      id: v4()
    })
  
  }
  return (
    <React.Fragment>
      <ReusableBusinessForm 
        formSubmissionHandler={handleNewBusinessFormSubmission}
        buttonText="Submit" />
    </React.Fragment>
  );
}
NewBusinessForm.propTypes = { 
  onNewBusinessCreation: PropTypes.func
};
export default NewBusinessForm;