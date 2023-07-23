import React from "react";
import PropTypes from "prop-types";

function ReusableBusinessForm(props) {

const stateAbbreviations = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

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
          <label name="state">State:</label>
          <select id="state" name="state">
            <option value="">Select a state:</option>
            {stateAbbreviations.map((stateAbbr) => (
              <option key={stateAbbr} value={stateAbbr}>
                {stateAbbr}
              </option>
            ))}
          </select>
        
        <br></br>
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