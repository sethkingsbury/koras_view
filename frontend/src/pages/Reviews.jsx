import Review from "../components/Review"
import reviews from '../mockData/reviews'

function Reviews () {
    return (
        <div>
            <div className="page-title">
                Reviews
            </div>
            <div className="review-container">
                <Review review={reviews[0]}/>
                <Review review={reviews[1]}/>
                <Review review={reviews[2]}/>
                <Review review={reviews[3]}/>
                <Review review={reviews[4]}/>
            </div>
        </div>
    )
}

export default Reviews