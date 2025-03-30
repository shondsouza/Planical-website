import React from 'react'

import PropTypes from 'prop-types'

import './faq.css'

const FAQ = (props) => {
  return (
    <div className={`faq-accordion ${props.rootClassName} `}>
      <div
        data-role="accordion-container"
        className="faq-element1 accordion-element"
      >
        <div className="faq-details1">
          <span className="faq-text10">
          What is Planical?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span data-role="accordion-content" className="faq-text11">
          Planical is a mental health platform dedicated to helping individuals improve their well-being through expert guidance, self-help resources, therapy sessions, and mindfulness tools.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon">
          <svg viewBox="0 0 1024 1024" className="faq-icon10">
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element2 accordion-element"
      >
        <div className="faq-details2">
          <span className="faq-text12">
          Who can use Planical?
          </span>
          <span data-role="accordion-content" className="faq-text13">
          Anyone looking for mental health support, stress management techniques, or professional therapy can benefit from Planical. Our platform is designed for individuals of all ages seeking to improve their emotional and mental well-being.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon">
          <svg viewBox="0 0 1024 1024" className="faq-icon12">
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element3 accordion-element"
      >
        <div className="faq-details3">
          <span className="faq-text14">
          Is Planical free to use?
          </span>
          <span data-role="accordion-content" className="faq-text15">
          Yes! Planical is completely free. All self-help articles, guided meditations, stress management exercises, and therapy sessions are available at no cost.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon">
          <svg viewBox="0 0 1024 1024" className="faq-icon14">
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element4 accordion-element"
      >
        <div className="faq-details4">
          <span className="faq-text16">
          Are the mental health resources free?
          </span>
          <span data-role="accordion-content" className="faq-text17">
          We offer a mix of free and premium resources. Some articles, self-help guides, and meditation exercises are free, while therapy sessions and advanced courses may require payment.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon">
          <svg viewBox="0 0 1024 1024" className="faq-icon16">
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element5 accordion-element"
      >
        <div className="faq-details5">
          <span className="faq-text18">
          Is my personal information kept confidential?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span data-role="accordion-content" className="faq-text19">
          Yes, we prioritize your privacy. All personal and therapy-related data is encrypted and kept confidential as per our privacy policy.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon">
          <svg viewBox="0 0 1024 1024" className="faq-icon18">
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element6 accordion-element"
      >
        <div className="faq-details6">
          <span className="faq-text20">
          What self-care tips do you recommend for better mental health?
          </span>
          <span data-role="accordion-content" className="faq-text21">
          To improve your mental well-being, maintain a regular sleep schedule, practice mindfulness and meditation, stay physically active, limit screen time and social media, and seek emotional support when needed.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon">
          <svg viewBox="0 0 1024 1024" className="faq-icon20">
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

FAQ.defaultProps = {
  rootClassName: '',
}

FAQ.propTypes = {
  rootClassName: PropTypes.string,
}

export default FAQ
