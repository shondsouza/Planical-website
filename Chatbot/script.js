let socket = null;
let isConnecting = false;
let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 5;

function connectWebSocket() {
    if (socket !== null || isConnecting) return;

    isConnecting = true;
    try {
        socket = new WebSocket("ws://localhost:8765");
        
        socket.onopen = function() {
            isConnecting = false;
            reconnectAttempts = 0;
            console.log("WebSocket connection established");
            socket.send("Connection established");
        };

        socket.onmessage = function(event) {
            const botResponse = event.data;
            displayMessage(botResponse, 'bot');
        };

        socket.onerror = function(error) {
            console.error("WebSocket error:", error);
            handleConnectionFailure();
        };

        socket.onclose = function(event) {
            console.log("WebSocket connection closed");
            handleConnectionFailure();
        };
    } catch (error) {
        console.error("Failed to create WebSocket:", error);
        handleConnectionFailure();
    }
}

function handleConnectionFailure() {
    isConnecting = false;
    socket = null;

    if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
        reconnectAttempts++;
        const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000);
        console.log(`Attempting to reconnect in ${delay/1000} seconds... (Attempt ${reconnectAttempts})`);
        setTimeout(connectWebSocket, delay);
    } else {
        console.error("Maximum reconnection attempts reached");
        displayMessage("Unable to connect to server. Please refresh the page to try again.", 'bot');
    }
}

window.addEventListener('load', connectWebSocket);

document.getElementById('send-btn').addEventListener('click', sendMessage);

document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    
    if (userInput !== "") {
        displayMessage(userInput, 'user');
        document.getElementById('user-input').value = '';

        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(userInput);
        } else {
            displayMessage("Connecting to server...", 'bot');
            connectWebSocket();
        }
    }
}

function displayMessage(text, sender) {
    const chatLog = document.getElementById('chat-log');
    
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = text;
    
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
}
