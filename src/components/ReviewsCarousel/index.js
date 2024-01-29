import './index.css'
import {Component} from 'react'

class ReviewCarousel extends Component {
  state = {currentReviewIndex: 0}

  nextReview = () => {
    this.setState(prevState => {
      const {reviewsList} = this.props
      const nextIndex = prevState.currentReviewIndex + 1
      return nextIndex < reviewsList.length
        ? {currentReviewIndex: nextIndex}
        : {}
    })
  }

  prevReview = () => {
    this.setState(prevState => {
      const prevIndex = prevState.currentReviewIndex - 1
      return prevIndex >= 0 ? {currentReviewIndex: prevIndex} : {}
    })
  }

  render() {
    const {reviewsList} = this.props
    const {currentReviewIndex} = this.state
    const review = reviewsList[currentReviewIndex]
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-carousel">
          <button
            type="button"
            className="arrow-btn"
            onClick={this.prevReview}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div key={review.username} className="review-container">
            <img
              src={review.imgUrl}
              alt={review.username}
              className="user-image"
            />
            <p className="profile-name">{review.username}</p>
            <p className="company-name">{review.companyName}</p>
            <p className="description">{review.description}</p>
          </div>
          <button
            type="button"
            className="arrow-btn"
            onClick={this.nextReview}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewCarousel
