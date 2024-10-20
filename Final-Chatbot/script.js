document.getElementById('send-btn').addEventListener('click', sendMessage);

// Add listener for Enter key
document.getElementById('user-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

let socket = new WebSocket("ws://localhost:8765");

socket.onmessage = function(event) {
    const botResponse = event.data;
    displayMessage(botResponse, 'bot');
};

// Function to handle message sending
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    
    if (userInput !== "") {
        // Display user's message
        displayMessage(userInput, 'user');

        // Clear the input field
        document.getElementById('user-input').value = '';

        // Send user input to the backend via WebSocket
        socket.send(userInput);
    }
}

// Function to display messages in the chat log
function displayMessage(text, sender) {
    const chatLog = document.getElementById('chat-log');
    
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = text;
    
    chatLog.appendChild(messageDiv);
    
    // Scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;
}
