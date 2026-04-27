import ReviewType1 from "./ReviewType1/ReviewType1";
import {dummyReviews} from "../../constants/dummyReviews.js";
import "./ReviewSection.css";

function ReviewSection() {
  return (
    <section className="review-section">
        <h2>What Our Peanut Butter Lovers Say 🥜</h2>

        {/* Add buttons to change review types */}
        <ReviewType1 reviews={dummyReviews} />
    </section>
  );
}

export default ReviewSection;