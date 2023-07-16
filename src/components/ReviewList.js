import React from "react";
import Review from "./Review";

const mainReviewList = [
  {
    title: 'Bathrooms suck',
    date: '3/4/23',
    reviewText: 'Negative restroom experience'
  },
  {
    title: 'Cute place',
    date: '10/26/22',
    reviewText: 'nice food and friendly employees'
  }
];

function ReviewList(){

  return(
    <React.Fragment>
      {mainReviewList.map((review, index) =>
        <Review 
          title={review.title}
          date={review.date}
          reviewText={review.reviewText} />
      )}
    </React.Fragment>
  )
}

export default ReviewList;