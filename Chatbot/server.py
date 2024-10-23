import random
import asyncio
import websockets

print("Running........");

response_dict = {
    'stress': [
        "I hear you're feeling stressed. It's important to take a deep breath and ground yourself. Can I suggest a breathing exercise?",
        "Stress can be overwhelming. Try breaking your tasks into smaller, manageable steps.",
        "Would it help to talk about what’s causing your stress in detail?"
    ],
    'anxiety': [
        "It sounds like you're feeling anxious. Deep breathing can help calm your nerves.",
        "Anxiety can be tough. Do you want some tips on how to manage it in the moment?",
        "I’m here for you. Let's try to focus on the things you can control."
    ],
    'depression': [
        "I hear you. Depression can feel very heavy. It might help to focus on small, positive actions, like getting some fresh air.",
        "Sometimes, reaching out to loved ones or talking to a professional can make a difference. Have you tried that?",
        "You're not alone. I’m here if you want to talk more about what you're feeling."
    ],
    'general': [
        "I’m really glad you reached out. How are you feeling today?",
        "It’s okay to not be okay. I'm here to help. What’s on your mind?",
        "Let’s work through this together. What’s bothering you the most right now?"
    ],
    'default': [
        "I may not fully understand what you're going through, but I’m here to listen. Tell me more.",
        "Could you tell me more about how you're feeling?",
        "I'm sorry if I don't have the perfect words, but you're not alone in this."
    ]
}

def get_response(user_input):
    user_input = user_input.lower()
    if 'stress' in user_input:
        return random.choice(response_dict['stress'])
    elif 'anxiety' in user_input:
        return random.choice(response_dict['anxiety'])
    elif 'depression' in user_input:
        return random.choice(response_dict['depression'])
    else:
        return random.choice(response_dict['general'])

# WebSocket handler
async def handle_message(websocket, path):
    async for message in websocket:
        response = get_response(message)
        await websocket.send(response)

# Start the server
start_server = websockets.serve(handle_message, "localhost", 8765)

# Run the server
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
