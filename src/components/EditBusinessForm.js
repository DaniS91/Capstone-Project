import React from "react";
import ReusableBusinessForm from "./ReusableBusinessForm";
import PropTypes from "prop-types";

function EditBusinessForm (props) {

  const { business } = props;

  // event handler
  function handleEditBusinessFormSubmission(event) {
    event.preventDefault();
    props.onEditBusiness({
      name: event.target.name.value,
      address: event.target.address.value,
      city: event.target.city.value,
      state: event.target.state.value,
      id: business.id
    });
  }

  return (
    <React.Fragment>
      <ReusableBusinessForm 
        formSubmissionHandler={handleEditBusinessFormSubmission}
        buttonText = "Edit Business"/>
    </React.Fragment>
  )
}

EditBusinessForm.propTypes = {
  business: PropTypes.object,
  onEditBusiness: PropTypes.func
}
export default EditBusinessForm;