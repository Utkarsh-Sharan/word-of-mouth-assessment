import { Star } from "lucide-react";
import "./ReviewBox1.css";

function ReviewBox1({review}) {
  return (
    <article className="review-box">
      <div>
        <div>{
          Array.from({length: review.stars}).map(
            (_, i) => <Star key={i} size={20} color="var(--color-secondary)" fill="gold" />
          )
        }
        </div>
        <p style={{marginTop: 10}}><em><strong>"{review.comment}"</strong></em></p>
      </div>

      <div className="user-details">
        <img src={review.profilePic} alt="user-profile" />

        <div className="">
          <p>{review.name}</p>
          <p>{review.location}</p>
        </div>
      </div>
    </article>
  );
}

export default ReviewBox1