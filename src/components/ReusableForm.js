import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input
          type='text'
          name='name'
          placeholder='Business Name' />
        <input 
          type='text'
          name='address'
          placeholder='Street Address' />
        <input 
          type='text'
          name='city'
          placeholder='City' />
        <input 
          type='text'
          name='state'
          placeholder='State' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;