import React, { useState } from "react";
import PropTypes from "prop-types";
import ReusableBusinessForm from "./ReusableBusinessForm";

import { storage } from './../firebase.js';
import { v4 } from "uuid";

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function NewBusinessForm(props){

  const [stateValue, setStateValue] = useState("")
  const handleNewBusinessFormSubmission = async (event) => {
    event.preventDefault();
    setStateValue(event.target.state.value);
    const photoFile = event.target.photo.files;
    const imageName = v4();
    const imageRef = ref(storage, `images/${imageName}`); 
    if (photoFile) {
      await uploadBytes(imageRef, photoFile);
      const photoURL = await getDownloadURL(imageRef);
      console.log(photoURL);
      props.onNewBusinessCreation({
        name: event.target.name.value,
        address: event.target.address.value,
        city: event.target.city.value,
        state: stateValue,
        zipcode: parseInt(event.target.zipcode.value),
        url: event.target.url.value,
        category: event.target.category.value,
        description: event.target.description.value,
        accessibility: event.target.accessibility.checked,
        restrooms: event.target.restrooms.checked,
        photo: photoURL,
        reviewList: [],
        avgRating: null,
      });
    } else {
      props.onNewBusinessCreation({
        name: event.target.name.value,
        address: event.target.address.value,
        city: event.target.city.value,
        state: stateValue,
        zipcode: parseInt(event.target.zipcode.value),
        url: event.target.url.value,
        category: event.target.category.value,
        description: event.target.description.value,
        accessibility: event.target.accessibility.checked,
        restrooms: event.target.restrooms.checked,
        photo: null,
        reviewList: [],
        avgRating: null,
      });
    };
  };
  return (
    <React.Fragment>
      <ReusableBusinessForm 
        formSubmissionHandler={handleNewBusinessFormSubmission}
        buttonText="Submit"
        stateValue={stateValue}
        setStateValue={setStateValue} />
    </React.Fragment>
  );
}
NewBusinessForm.propTypes = { 
  onNewBusinessCreation: PropTypes.func
};
export default NewBusinessForm;