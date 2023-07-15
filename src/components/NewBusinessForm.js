import React from "react";

function NewBusinessForm(){

  function handleNewBusinessFormSubmission(event) {
    event.preventDefault();
  
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewBusinessFormSubmission}>
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
      </form>
    </React.Fragment>
  );
}

export default NewBusinessForm;