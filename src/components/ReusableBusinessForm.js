import React from "react";
import PropTypes from "prop-types";

function ReusableBusinessForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Business Name' />
        <br></br>
        <input 
          type='text'
          name='address'
          placeholder='Street Address' />
          <br></br>
        <input 
          type='text'
          name='city'
          placeholder='City' />
          <br></br>
        <input 
          type='text'
          name='state'
          placeholder='State' />
          <br></br>
        <input 
          type='text'
          name='zipcode'
          placeholder='Zipcode' />
          <br></br>
        <input 
          type='text'
          name='url'
          placeholder='Website URL' />
          <br></br>
        <input 
          type='text'
          name='category'
          placeholder='Category' />
        <br></br>
        <input 
          type='text'
          name='description'
          placeholder='Short description' />
        <br></br>
        <label>
        Wheelchair-accessible: <input type="checkbox" name="accessibility" defaultChecked={false} />
        </label>
        <br></br>
        <label>
        Gender-neutral restroom available: <input type="checkbox" name="restrooms" defaultChecked={false} />
        </label>
        <br></br>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableBusinessForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableBusinessForm;