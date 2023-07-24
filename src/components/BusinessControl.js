import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';

import NewBusinessForm from "./NewBusinessForm";
import BusinessList from "./BusinessList";
import BusinessDetail from "./BusinessDetail";
import EditBusinessForm from "./EditBusinessForm";
import AddReviewForm from "./AddReviewForm";
import db from './../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, query, where, getDocs } from "firebase/firestore";
// import Review from "./Review";
// import ReviewList from "./ReviewList";

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
    // console.log(newBusinessData);
    await addDoc(collection(db, "businesses"), newBusinessData);
    // const newMainBusinessList = mainBusinessList.concat(newBusiness);
    // setMainBusinessList(newMainBusinessList);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedBusiness = (id) => {
    const selection= mainBusinessList.filter(business => business.id === id)[0];
    setSelectedBusiness(selection);
  }

  const handleDeletingBusiness = async (id) => {
    await deleteDoc(doc(db, "businesses", id));

    // const newMainBusinessList = mainBusinessList.filter(business => business.id !== id);
    // setMainBusinessList(newMainBusinessList);
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
    const totalRating = reviews.reduce((accumulator, review) => accumulator + review.rating, 0);
    const averageRating = (totalRating/ reviews.length).toFixed(0);
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
   // handle new review and update db
    ratedBusiness.reviewList = newReviewList;
    const businessRef = doc(db, "businesses", selectedBusiness.id);
    await updateDoc(businessRef, {
      reviewList: newReviewList,
      rating: calculateAverageRating(newReviewList)
    });
    //update avg rating in business
    // const reviewsQuery = query(collection(db, 'reviews'), where('businessId', '==', selectedBusiness.id));
    // const querySnapshot = await getDocs(reviewsQuery);
    // const reviews = querySnapshot.docs.map((doc) => doc.data());

    const newAverageRating = calculateAverageRating(newReviewList);

    // await updateDoc(businessRef, { rating: newAverageRating });
    console.log(ratedBusiness);
    console.log('New Average Rating:', newAverageRating);
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
    console.log("we are in the reviewing form now")
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
    console.log(selectedBusiness);
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
    console.log(mainBusinessList);
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