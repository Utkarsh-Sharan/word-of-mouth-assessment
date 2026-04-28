import ReviewBox1 from './ReviewBox1';
import "./ReviewType1.css";

function ReviewType1({reviews}) {
  return (
    <section className='review-type-1'>
        {reviews.map((review) => <ReviewBox1 key={review.id} review={review} />)}
    </section>
  );
}

export default ReviewType1