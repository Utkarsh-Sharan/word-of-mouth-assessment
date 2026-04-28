import { Star } from 'lucide-react';
import "./ReviewBox3.css";

function ReviewBox3({review}) {
  return (
    <article className='review-box-3'>
      <svg className='border-svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
        <rect x="1" y="1" width={98} height={98} rx={4} ry={4} />
      </svg>
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

        <div>
          <p>{review.name}</p>
          <p>{review.location}</p>
        </div>
      </div>
    </article>
  )
}

export default ReviewBox3