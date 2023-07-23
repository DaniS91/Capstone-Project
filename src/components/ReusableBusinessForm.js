import React from "react";
import PropTypes from "prop-types";
import Button from '@mui/material/Button';
import Box from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function ReusableBusinessForm(props) {

const stateAbbreviations = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

  return (
    <React.Fragment>
      <Box
        component="form"
        onSubmit={props.formSubmissionHandler}
        sx={{
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          display: 'grid'
        }}>
      {/* <form onSubmit={props.formSubmissionHandler}> */}
        <TextField
          type='text'
          name='name'
          label='Business Name' />
        <br></br>
        <TextField 
          type='text'
          name='address'
          label='Street Address' />
          <br></br>
        <TextField 
          type='text'
          name='city'
          label='City' />
        <br></br>
        <TextField
          select 
          label="State:" 
          name="state"
          helperText="Please select a state">
            {stateAbbreviations.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
          </TextField>
          <br></br>
        <TextField 
          type='text'
          name='zipcode'
          label='Zipcode' />
          <br></br>
        <TextField 
          type='text'
          name='url'
         label='Website URL' />
          <br></br>
        <TextField 
          type='text'
          name='category'
          label='Category' />
        <br></br>
        <TextField 
          type='text'
          name='description'
          label='Short description' />
        <br></br>
        <label>
        Wheelchair-accessible: <input type="checkbox" name="accessibility" defaultChecked={false} />
        </label>
        <br></br>
        <label>
        Gender-neutral restroom available: <input type="checkbox" name="restrooms" defaultChecked={false} />
        </label>
        <br></br>
        <Button 
          type='submit'
          color="success"
          size="small" 
          variant="contained">{props.buttonText}
          </Button>
      </Box>
    </React.Fragment>
  );
}

ReusableBusinessForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableBusinessForm;