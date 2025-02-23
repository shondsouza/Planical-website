import React from 'react'

import PropTypes from 'prop-types'

import './accordion.css'

const Accordion = (props) => {
  return (
    <div className={`accordion-accordion ${props.rootClassName} `}>
      <div
        data-role="accordion-container"
        className="accordion-element1 accordion-element"
      >
        <div className="accordion-details1">
          <span className="accordion-text1">{props.text}</span>
          <span data-role="accordion-content" className="accordion-text2">
            {props.text1}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon1"
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className="accordion-element2 accordion-element"
      >
        <div className="accordion-details2">
          <span className="accordion-text3">{props.text2}</span>
          <span data-role="accordion-content" className="accordion-text4">
            {props.text3}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon3"
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className="accordion-element3 accordion-element"
      >
        <div className="accordion-details3">
          <span className="accordion-text5">{props.text4}</span>
          <span data-role="accordion-content" className="accordion-text6">
            {props.text5}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon5"
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
    </div>
  )
}

Accordion.defaultProps = {
  text2: 'What\'s the difference between the chatbot and professional chat?',
  text1:
    'A 24/7 digital companion that provides immediate emotional support, coping strategies, and mental health guidance through supportive conversations.',
  text: 'How does the mental health chatbot work?',
  text4: 'What resources are available?',
  text5:
    'We offer guided meditations, mood tracking, educational articles, coping tools, self-assessments, and crisis resources - all accessible anytime.',
  text3:
    'The chatbot offers immediate 24/7 support and general guidance, while professional chat provides specialized advice from qualified mental health professionals.',
  rootClassName: '',
}

Accordion.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Accordion
