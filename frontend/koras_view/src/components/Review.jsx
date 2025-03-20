import "../styles/Reviews.css";

function Review({ review }) {
  return (
    <div className="review">
      <div className="review-header">
        <img className="review-image" src={review.image} alt="steven" />
        <div className="review-info">
          <div className="review-name">{review.name}</div>
          {review.date}
        </div>
      </div>
      <div className="review-comment">{review.comment}</div>
    </div>
  );
}

export default Review;
