// Review.jsx
import React from 'react'
import PropTypes from 'prop-types'
import './review.css'

const Review = (props) => {
  return (
      <section className={`review-card ${props.rootClassName}`}>
        <div className="review-stars">
          <svg viewBox="0 0 1024 1024" className="review-icon10">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon12">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon14">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon16">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon18">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
        </div>
        <main className="review-content">
          <p className="review-quote">{props.quote}</p>
          <div className="review-author1">
            <img
                alt={props.avatarAlt}
                src={props.avatarSrc}
                className="review-avatar"
            />
            <div className="review-details">
              <h1 className="review-author2">{props.author}</h1>
              <label className="review-position">{props.position}</label>
            </div>
          </div>
        </main>
      </section>
  )
}

Review.defaultProps = {
  quote: 'The stress of Gada Electronics, Bapuji’s lectures, and Bhide’s complaints—this platform is the only solution! Now, even Champak chacha’s stick doesn’t scare me!',
  author: 'Jethalal Gada',
  rootClassName: '',
  avatarSrc: 'https://i.pinimg.com/1200x/26/f4/10/26f4104b343de4c972f3f67ab3cedb31.jpg',
  position: 'Businessman (Electronics Shop Owner)',
  avatarAlt: 'profile picture',
}

Review.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
  rootClassName: PropTypes.string,
  avatarSrc: PropTypes.string,
  position: PropTypes.string,
  avatarAlt: PropTypes.string,
}

export default Review
