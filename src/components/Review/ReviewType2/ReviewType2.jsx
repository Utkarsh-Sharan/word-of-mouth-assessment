import "./ReviewType2.css";
import ReviewBox2 from "./ReviewBox2.jsx";

function ReviewType2({reviews}) {
  return (
    <section className='review-type-2'>
      <div className="review-track">
        {reviews.map((review) => (
          <ReviewBox2 key={review.id} review={review} />
        ))}

        {reviews.map((review) => (
          <ReviewBox2 key={`dup-${review.id}`} review={review} />
        ))}
      </div>
    </section>
  );
}

export default ReviewType2