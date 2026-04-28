import React from 'react'
import ReviewBox3 from './ReviewBox3';
import "./ReviewType3.css";

function ReviewType3({reviews}) {
  return (
    <section className='review-type-3'>
        {reviews.map((review) => <ReviewBox3 key={review.id} review={review} />)}
    </section>
  )
}

export default ReviewType3