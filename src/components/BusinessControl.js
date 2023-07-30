import React, { useState, useEffect } from "react";
import { Button, Stack, AppBar } from '@mui/material';

import NewBusinessForm from "./NewBusinessForm";
import BusinessList from "./BusinessList";
import BusinessDetail from "./BusinessDetail";
import EditBusinessForm from "./EditBusinessForm";
import AddReviewForm from "./AddReviewForm";
import SplashPage from "./SplashPage";
import { db, auth } from './../firebase.js';
import { signOut } from "firebase/auth";
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import LogoutIcon from '@mui/icons-material/Logout';


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

  function doSignOut() {
    signOut(auth)
      .then(function() {
        console.log("sign out success");
        window.location.reload(false);
      }).catch(function(error) {
        console.log(`There was an error signing out: ${error.message}!`);
      });
  }

  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <SplashPage />
      </React.Fragment>
    )
  } else if (auth.currentUser != null) {
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
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={0}
          sx={{margin: '20px'}}>
            {error? null: <Button
              color="success"
              size="medium" 
              variant="contained"
              onClick={handleClick}
              startIcon={buttonIcon}
              disableRipple>{buttonText}
              </Button>}
        </Stack>
        {currentlyVisibleState}
        {/* <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={0}
          position="fixed" 
          sx={{ top: 'auto', bottom: 0 }}>
            {auth.currentUser? <Button 
              onClick={doSignOut}
              color="info"
              size="medium" 
              variant="contained"
              startIcon={<LogoutIcon />}
            >Sign Out</Button>: null}
        </Stack> */}
        <AppBar position="sticky" color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
              sx={{margin: '10px'}}>
                {auth.currentUser? <Button 
                  onClick={doSignOut}
                  color="info"
                  size="medium" 
                  variant="contained"
                  startIcon={<LogoutIcon />}
                >Sign Out</Button>: null}
            </Stack>
        </AppBar>
    </React.Fragment>
    )
  }
}

export default BusinessControl;


