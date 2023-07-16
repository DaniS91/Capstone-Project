import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid'
import ReusableBusinessForm from "./ReusableBusinessForm";

function NewBusinessForm(props){

  function handleNewBusinessFormSubmission(event) {
    event.preventDefault();
    props.onNewBusinessCreation({
      name: event.target.name.value,
      address: event.target.address.value,
      city: event.target.city.value,
      state: event.target.state.value,
      id: v4()
      // don't forget this is where we parse input for number inputs
      // ie:
      // zipcode: parseInt(event.target.zippde.value)
      // eventually I will add way more user input data fields
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