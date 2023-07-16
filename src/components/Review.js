import React from "react";

function Review(){
  const title = "Great service"
  const date = "10/22/2022";
  const reviewText = "Cool vibes and nice employees";

  return(
    <React.Fragment>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <p>{reviewText}</p>
    </React.Fragment>
  )
}

export default Review;