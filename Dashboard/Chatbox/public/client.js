const socket = io();
let name;
let textarea = document.querySelector('#textarea');
let messageArea = document.querySelector('.message__area');
let chatSection = document.querySelector('.chat__section');
let roleSelection = document.getElementById('role-selection');
let roomSelection = document.getElementById('room-selection');
let roomList = document.getElementById('room-list');

// Store the user's socket ID
let socketId;

// Get the user's socket ID after connection
socket.on('connect', () => {
    socketId = socket.id;
});

function registerRole(role) {
    if (role === 'client') {
        name = prompt('Enter your name: ');
        getRooms(); // Fetch rooms if the user is a client
    } else {
        name = 'Doctor';
        socket.emit('register', { role });
        showChat(); // Directly show chat for doctor
    }
    roleSelection.style.display = 'none'; // Hide role selection
}

// Fetch available rooms for clients
function getRooms() {
    socket.emit('getRooms');
    roomSelection.style.display = 'block'; // Show room selection
}

// Handle list of rooms received from the server
socket.on('roomsList', (rooms) => {
    roomList.innerHTML = ''; // Clear the room list
    if (rooms.length === 0) {
        roomList.innerHTML = '<li>No rooms available. Please try again later.</li>';
    } else {
        rooms.forEach((room) => {
            const roomItem = document.createElement('li');
            roomItem.innerHTML = `<button onclick="joinRoom('${room}')">${room}</button>`;
            roomList.appendChild(roomItem); // Add rooms to the list
        });
    }
});

// Handle joining the selected room
function joinRoom(room) {
    socket.emit('register', { role: 'client', room });
    roomSelection.style.display = 'none'; // Hide room selection
    showChat(); // Show chat interface
}

// Display the chat section
function showChat() {
    chatSection.style.display = 'block';
}

// Handle sending a message
textarea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        sendMessage(e.target.value);
    }
});

function sendMessage(message) {
    let msg = { user: name, message: message.trim() };
    appendMessage(msg, 'outgoing'); // Show sent message
    textarea.value = ''; // Clear textarea
    scrollToBottom();
    socket.emit('message', msg); // Emit message to server
}

// Append messages to the chat window
function appendMessage(msg, type) {
    let mainDiv = document.createElement('div');
    mainDiv.classList.add(type, 'message');

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `;
    mainDiv.innerHTML = markup;
    messageArea.appendChild(mainDiv);
}

// Receive messages from the server
socket.on('message', (msg) => {
    if (msg.sender !== socketId) {
        appendMessage(msg, 'incoming'); // Append incoming messages
    }
    scrollToBottom();
});

// Handle errors like room full or other issues
socket.on('error', (message) => {
    alert(message);
    getRooms(); // Reload rooms on error
});

// Scroll chat to bottom when new messages arrive
function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight;
}
