import React, { useState } from "react";
import SignUp from "./SignUp";
import { createUserWithEmailAndPassword } from "firebase/auth";

function UserAccount(){  
  const [signUpSuccess, setSignUpSuccess] = useState(null);
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

  return (
    <React.Fragment>
      <SignUp />
    </React.Fragment>
  );
}

export default UserAccount;