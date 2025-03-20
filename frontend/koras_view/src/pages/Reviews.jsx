import "../styles/Reviews.css";
import Review from "../components/Review";
import reviews from "../data/reviews";

function Reviews() {
  return (
    <div className="reviews-container">
      <h1>Reviews</h1>
      <div className="review-container">
        <Review review={reviews[0]} />
        <Review review={reviews[1]} />
        <Review review={reviews[2]} />
        <Review review={reviews[3]} />
        <Review review={reviews[4]} />
      </div>
    </div>
  );
}

export default Reviews;
