import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';

import NewBusinessForm from "./NewBusinessForm";
import BusinessList from "./BusinessList";
import BusinessDetail from "./BusinessDetail";
import EditBusinessForm from "./EditBusinessForm";
import AddReviewForm from "./AddReviewForm";
import db from './../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function BusinessControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainBusinessList, setMainBusinessList] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [editing, setEditing] = useState(false);
  const [reviewing, setReviewing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "businesses"),
      (collectionSnapshot) => {
        const businesses = [];
        collectionSnapshot.forEach((doc) => {
          businesses.push({
            ...doc.data(),
            id: doc.id
          });
        });
        setMainBusinessList(businesses);
      },
      (error) => {
        setError(error.message);
      }
    );
    return () => unSubscribe();
  }, []);

  const handleClick = () => {
    if (selectedBusiness != null) {
      setFormVisibleOnPage(false);
      setSelectedBusiness(null);
      setEditing(false);
      setReviewing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleAddingNewBusinessToList = async (newBusinessData) => {
    await addDoc(collection(db, "businesses"), newBusinessData);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedBusiness = (id) => {
    const selection= mainBusinessList.filter(business => business.id === id)[0];
    setSelectedBusiness(selection);
  }

  const handleDeletingBusiness = async (id) => {
    await deleteDoc(doc(db, "businesses", id));
    setSelectedBusiness(null);
  }
  
  const handleEditClick = () => {
    setEditing(true);
  }

  const handleReviewClick = () => {
    console.log("handleReviewClick function reached!")
    setReviewing(true);
  }
  const calculateAverageRating = async (reviews) => {
    if (reviews.length === 0) {
      return null;
    }
    const ratingsArray = reviews.map((review) => review.rating);
    const totalRating = ratingsArray.reduce((accumulator, rating) => accumulator + rating, 0);
    const averageRating = (totalRating/ reviews.length).toFixed(0);
    console.log(averageRating);
    return averageRating;
  }
  const handleEditingBusinessInList = async (businessToEdit) => {
    const businessRef = doc(db, "businesses", businessToEdit.id);
    await updateDoc(businessRef, businessToEdit);
    setEditing(false);
    setSelectedBusiness(null);
  }

  const handleAddingReview = async (review) => {
    const newReviewList = selectedBusiness.reviewList.concat(review);
    const ratedBusiness = {...selectedBusiness};
    ratedBusiness.reviewList = newReviewList;
    const newAverageRating =  await calculateAverageRating(newReviewList);
    const businessRef = doc(db, "businesses", selectedBusiness.id);
    
    await updateDoc(businessRef, {
      reviewList: newReviewList,
      avgRating: newAverageRating
    })
    setEditing(false);
    setSelectedBusiness(null);
    setReviewing(false);
  }

  let currentlyVisibleState = null;
  let buttonText = null;
  let buttonIcon = null;

  if (error) {
    currentlyVisibleState = <p>There was an error: {error}</p>
  } else if (reviewing) {
    currentlyVisibleState = 
    <AddReviewForm
      business = {selectedBusiness}
      onReviewBusiness = {handleAddingReview} />
    buttonText = "Back to Business List";
    buttonIcon = <KeyboardBackspaceIcon />;
  } else if (editing) {
    currentlyVisibleState = 
    <EditBusinessForm 
      business = {selectedBusiness}
      onEditBusiness = {handleEditingBusinessInList} />
    buttonText = "Return to Business List";
    buttonIcon = <KeyboardBackspaceIcon />;
  } else if (selectedBusiness != null) {
    currentlyVisibleState = 
    <BusinessDetail
      business = {selectedBusiness}
      onClickingDelete = {handleDeletingBusiness}
      onClickingEdit = {handleEditClick}
      onClickingReview={handleReviewClick} />
    buttonText = "Return to Business List";
    buttonIcon = <KeyboardBackspaceIcon />;
  } else if(formVisibleOnPage) {
    currentlyVisibleState = 
    <NewBusinessForm
      onNewBusinessCreation={handleAddingNewBusinessToList} />
    buttonText = "Return to Business List";
    buttonIcon = <KeyboardBackspaceIcon />;
  } else {
    currentlyVisibleState = 
    <BusinessList 
      businessList={mainBusinessList}
      onBusinessSelection={handleChangingSelectedBusiness} />
    buttonText = "Add Business";
    buttonIcon = <AddBusinessIcon />;
  }
  return(
    <React.Fragment>
      {currentlyVisibleState}
      
      {error? null: <Button
        color="secondary"
        size="medium" 
        variant="outlined"
        onClick={handleClick}
        startIcon={buttonIcon}>{buttonText}</Button>}
  </React.Fragment>
  )
}

export default BusinessControl;