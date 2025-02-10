import random
import asyncio
import websockets
import logging
import json
from datetime import datetime
from textblob import TextBlob
from http.server import HTTPServer, SimpleHTTPRequestHandler
import threading

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

print("Mental Health Chatbot Running...")

# Enhanced response dictionary with more empathetic and detailed responses
response_dict = {
    'positive': [
        "I'm really glad you're feeling positive! What's been helping you feel this way?",
        "That's wonderful to hear! Acknowledging good moments is important. Would you like to share more?",
        "It's great that you're feeling good! Remember this feeling - it can be an anchor in harder times.",
        "Your positive outlook is inspiring! How can we build on this energy?"
    ],
    'neutral': [
        "How are you feeling right now? Sometimes putting feelings into words can help.",
        "I'm here to listen without judgment. What's on your mind?",
        "Sometimes feelings can be complex. Would you like to explore them together?",
        "Take your time to express yourself. There's no rush."
    ],
    'negative': {
        'stress': [
            "I hear that you're feeling stressed. Let's break this down together - what's the biggest pressure right now?",
            "Stress can feel overwhelming. Would you like to try a quick 4-7-8 breathing exercise with me?",
            "It's okay to feel stressed. Can you tell me what usually helps you relax?",
            "Let's tackle this stress one step at a time. What's the most immediate concern?",
            "Sometimes stress can feel like a heavy weight. Would you like to talk about what's causing it?"
        ],
        'anxiety': [
            "Anxiety can feel like a storm inside. Let's find your calm center together. What's triggering these feelings?",
            "I understand anxiety can be overwhelming. Would you like to try grounding? Name 5 things you can see right now.",
            "Your feelings are valid. Anxiety doesn't define you. What helps you feel more grounded?",
            "Let's take a moment to breathe together. Focus on slow, deep breaths. How's your breathing feeling?",
            "Anxiety is tough, but you're tougher. Would you like to explore some coping strategies?"
        ],
        'depression': [
            "I hear you, and I want you to know that you're not alone in this. Have you been able to talk to anyone else about how you're feeling?",
            "Depression can make everything feel heavy. What's one small thing we could focus on today?",
            "Your feelings are valid, and it takes courage to talk about them. Would you like to share what's been particularly difficult?",
            "Even getting up or reaching out can be a huge achievement with depression. I'm proud of you for taking this step.",
            "Sometimes depression lies to us about our worth. Remember: you deserve support and care. Have you considered professional help?"
        ],
        'loneliness': [
            "Feeling lonely can be really difficult. Would you like to talk about what isolation means to you?",
            "It's natural to need connection. Have you thought about ways to reach out to others?",
            "Loneliness doesn't mean there's anything wrong with you. It's a human need to want connection.",
            "Even though I'm a chatbot, I want you to know I'm here to listen. What's been making you feel lonely?"
        ],
        'burnout': [
            "Burnout can be exhausting on every level. How long have you been feeling this way?",
            "It's important to recognize burnout. What areas of your life are feeling most depleted?",
            "Let's think about small ways to restore your energy. What usually helps you recharge?",
            "Burnout often comes from prolonged stress. Can we explore what's demanding so much from you?"
        ],
        'general_negative': [
            "I hear that you're going through a difficult time. Would you like to tell me more about what's troubling you?",
            "Your feelings matter, and it's okay to not be okay. What kind of support would be most helpful right now?",
            "Sometimes just expressing our feelings can be a first step. Is there anything specific you'd like to focus on?",
            "Thank you for sharing this with me. Would you like to explore some coping strategies together?",
            "Remember that seeking help is a sign of strength, not weakness. How can I support you right now?"
        ]
    },
    'default': [
        "I'm here to support you. Would you like to tell me more about what's on your mind?",
        "Sometimes finding the right words is hard. Take your time - I'm here to listen.",
        "Your feelings matter. How can I best support you right now?",
        "Thank you for sharing with me. Would you like to explore this further?"
    ],
    'crisis': [
        "I hear that you're in a lot of pain. While I'm here to listen, I want to make sure you get the best possible support. Would you like the number for a crisis helpline?",
        "Your life has value, and there are people who want to help. The suicide prevention lifeline is available 24/7 at 988. Would you like to talk about what's bringing you to this point?",
        "I'm concerned about your safety. Please know that crisis counselors are available 24/7 to listen without judgment. Would you like their contact information?",
        "You don't have to go through this alone. Professional help is available and can make a real difference. Would you like some resources?"
    ]
}

active_sessions = {}

class ChatSession:
    def __init__(self):
        self.conversation_history = []
        self.start_time = datetime.now()
        self.last_response = None
        self.mood_tracker = []  # Track mood over time

    def add_message(self, message, sender, sentiment=None):
        timestamp = datetime.now()
        self.conversation_history.append({
            'timestamp': timestamp.isoformat(),
            'sender': sender,
            'message': message,
            'sentiment': sentiment
        })
        if sentiment:
            self.mood_tracker.append({
                'timestamp': timestamp,
                'sentiment': sentiment
            })

    def avoid_repetition(self, response):
        if response == self.last_response:
            return None
        self.last_response = response
        return response

    def get_mood_trend(self):
        """Analyze mood trend from conversation history"""
        if len(self.mood_tracker) < 2:
            return 'not_enough_data'
        
        recent_moods = self.mood_tracker[-3:]  # Look at last 3 interactions
        positive_count = sum(1 for m in recent_moods if m['sentiment'] == 'positive')
        negative_count = sum(1 for m in recent_moods if m['sentiment'] == 'negative')
        
        if positive_count > negative_count:
            return 'improving'
        elif negative_count > positive_count:
            return 'declining'
        return 'stable'

def analyze_sentiment(user_input):
    """Enhanced sentiment analysis"""
    analysis = TextBlob(user_input)
    polarity = analysis.sentiment.polarity
    
    # More nuanced sentiment analysis
    if polarity > 0.3:
        return 'positive'
    elif polarity < -0.2:  # Lower threshold for negative to be more sensitive
        return 'negative'
    return 'neutral'

def classify_negative_sentiment(user_input):
    """Enhanced sentiment classification with more categories"""
    input_lower = user_input.lower()
    
    # Dictionary of keywords for each category
    keywords = {
        'stress': ['stress', 'overwhelm', 'pressure', 'tense', 'burnout', 'exhausted'],
        'anxiety': ['anxiety', 'worry', 'panic', 'fear', 'nervous', 'anxious'],
        'depression': ['depress', 'sad', 'hopeless', 'worthless', 'empty', 'numb'],
        'loneliness': ['lonely', 'alone', 'isolated', 'disconnected', 'no friends'],
        'burnout': ['burnout', 'exhausted', 'drained', 'tired', 'overwhelmed']
    }
    
    # Check for crisis keywords first
    crisis_keywords = ['suicide', 'kill myself', 'end it all', 'don\'t want to live']
    if any(word in input_lower for word in crisis_keywords):
        return 'crisis'
    
    # Check other categories
    for category, words in keywords.items():
        if any(word in input_lower for word in words):
            return category
            
    return 'general_negative'

def get_response(user_input, session):
    """Enhanced response generation with context awareness"""
    sentiment = analyze_sentiment(user_input)
    response = None
    
    # Add message to history with sentiment
    session.add_message(user_input, 'user', sentiment)
    
    # Check for crisis signals first
    if classify_negative_sentiment(user_input) == 'crisis':
        response = random.choice(response_dict['crisis'])
    elif sentiment == 'positive':
        response = random.choice(response_dict['positive'])
    elif sentiment == 'neutral':
        response = random.choice(response_dict['neutral'])
    elif sentiment == 'negative':
        category = classify_negative_sentiment(user_input)
        response = random.choice(response_dict['negative'].get(category, response_dict['negative']['general_negative']))
        
        # Check mood trend for persistent negative feelings
        if session.get_mood_trend() == 'declining':
            response += "\n\nI've noticed you've been feeling down for a while. Have you considered talking to a mental health professional? They can provide valuable support and strategies."

    if not response:
        response = random.choice(response_dict['default'])

    response = session.avoid_repetition(response) or random.choice(response_dict['default'])
    session.add_message(response, 'bot')
    return response

async def handle_message(websocket):
    session_id = id(websocket)
    active_sessions[session_id] = ChatSession()
    
    try:
        logging.info(f"New connection established: {session_id}")
        
        async for message in websocket:
            logging.info(f"Received message from {session_id}: {message}")
            
            response = get_response(message, active_sessions[session_id])
            await websocket.send(response)
            
            logging.info(f"Sent response to {session_id}: {response}")
            
    except websockets.exceptions.ConnectionClosed:
        logging.info(f"Client connection closed: {session_id}")
    except Exception as e:
        logging.error(f"Error in session {session_id}: {e}")
    finally:
        if session_id in active_sessions:
            del active_sessions[session_id]
            logging.info(f"Session cleaned up: {session_id}")

def run_http_server():
    httpd = HTTPServer(('localhost', 8000), SimpleHTTPRequestHandler)
    print("HTTP server started on http://localhost:8000")
    httpd.serve_forever()

async def main():
    # Start HTTP server in a separate thread
    threading.Thread(target=run_http_server, daemon=True).start()
    
    # Configure and start WebSocket server
    async with websockets.serve(
        handle_message, 
        "localhost", 
        8765,
        ping_interval=None,
        ping_timeout=None
    ) as server:
        print(f"WebSocket server started on ws://localhost:8765")
        try:
            await asyncio.Future()  # run forever
        except asyncio.CancelledError:
            print("\nServer shutting down gracefully...")

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\nServer stopped by user")
    except Exception as e:
        print(f"Server error: {e}")
        logging.error(f"Fatal server error: {e}")
