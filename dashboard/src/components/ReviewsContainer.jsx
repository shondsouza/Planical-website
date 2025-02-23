import React from 'react'
import Review from './Review'

const ReviewsContainer = () => {
    const reviewsData = [
        {
            quote: "Finding this mental health platform changed my life. The live doctor interactions provide professional support when I need it most, and the AI chatbot offers immediate guidance day or night.",
            author: "Sarah Chen",
            position: "Teacher",
            avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            quote: "As someone who struggled with anxiety, this platform was a game-changer. The therapists are highly qualified and understanding, while the AI support system helps me manage day-to-day challenges effectively.",
            author: "Michael Thompson",
            position: "Software Engineer",
            avatarSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            quote: "The accessibility of mental health support here is incredible. I can connect with professionals at my convenience, and the AI chatbot provides helpful coping strategies during difficult moments.",
            author: "Emily Rodriguez",
            position: "Marketing Professional",
            avatarSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            quote: "Working irregular hours made traditional therapy difficult. This platform's 24/7 availability and combination of professional care with AI support has made maintaining my mental health much more manageable.",
            author: "Dr. James Wilson",
            position: "Healthcare Professional",
            avatarSrc: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            quote: "The mental health support here perfectly balances human expertise with technological innovation. The AI chatbot's responses are surprisingly insightful, and the therapists are excellent.",
            author: "Rachel Kim",
            position: "Business Analyst",
            avatarSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            quote: "This platform made quality mental health care accessible and affordable for me as a student. The combination of professional guidance and AI support helps me manage academic stress effectively.",
            author: "Alex Martinez",
            position: "Graduate Student",
            avatarSrc: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        }
    ]

    return (
        <div className="reviews-container">
            {reviewsData.map((review, index) => (
                <Review
                    key={index}
                    quote={review.quote}
                    author={review.author}
                    position={review.position}
                    avatarSrc={review.avatarSrc}
                    avatarAlt={`${review.author} profile`}
                />
            ))}
        </div>
    )
}

export default ReviewsContainer