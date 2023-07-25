import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function UserAccount(){  
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);
  // const [signingUp, setSigningUp] = useState(true);

  // we will display signUp component as a default, 
  // gigning up is true as default
  // sign in button will switch signingUp to false with onclick handlesigningin funct
  // sign out button will simply signout

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.value;
    const password = event.target.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}`)
      });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`)
    })
      .catch((error) => {
      setSignInSuccess(`There was an error signing in: ${error.message}!`)
    });
  }

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess("You have successfully signed out!");
      }).catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }

  return (
    <React.Fragment>
      <SignUp />
      <SignIn />
    </React.Fragment>
  );
}

export default UserAccount;