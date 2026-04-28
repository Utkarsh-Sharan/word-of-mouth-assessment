import ReviewType1 from "./ReviewType1/ReviewType1";
import ReviewType2 from "./ReviewType2/ReviewType2.jsx";
import ReviewType3 from "./ReviewType3/ReviewType3.jsx";
import {dummyReviews} from "../../constants/dummyReviews.js";
import "./ReviewSection.css";
import { useEffect, useState } from "react";

function ReviewSection() {
  const [reviewType, setReviewType] = useState({
    type: null,
  });

  const handleClick = (e) => {
    setReviewType(prev => !prev);

    const id = e.target.id;
    switch(id) {
      case "review-1":
        setReviewType({
          type: <ReviewType1 reviews={dummyReviews} />,
        });
        break;
      case "review-2":
        setReviewType({
          type: <ReviewType2 reviews={dummyReviews} />,
        });
        break;
      case "review-3":
        setReviewType({
          type: <ReviewType3 reviews={dummyReviews} />,
        });
        break;
      default:
        console.log("Invalid review type!");
    }
  }

  useEffect(() => {
    setReviewType({
      type: <ReviewType1 reviews={dummyReviews} />
    });
  }, []);

  return (
    <section className="review-section">
        <h2>What Our Peanut Butter Lovers Say 🥜</h2>

        <article className="review-type-buttons" onClick={handleClick}>
          <button id="review-1">Simple</button>
          <button id="review-2">Sliding Window</button>
          <button id="review-3">Joyful</button>
        </article>
        
        {reviewType.type ? reviewType.type : "No reviews found!"}
    </section>
  );
}

export default ReviewSection;