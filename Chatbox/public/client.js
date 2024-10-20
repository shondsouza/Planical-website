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
        getRooms();
    } else {
        name = 'Doctor';
        socket.emit('register', { role });
        showChat();
    }
    roleSelection.style.display = 'none';
}

function getRooms() {
    socket.emit('getRooms');
    roomSelection.style.display = 'block';
}

socket.on('roomsList', (rooms) => {
    roomList.innerHTML = '';
    if (rooms.length === 0) {
        roomList.innerHTML = '<li>No rooms available. Please try again later.</li>';
    } else {
        rooms.forEach((room) => {
            const roomItem = document.createElement('li');
            roomItem.innerHTML = `<button onclick="joinRoom('${room}')">${room}</button>`;
            roomList.appendChild(roomItem);
        });
    }
});

function joinRoom(room) {
    socket.emit('register', { role: 'client', room });
    roomSelection.style.display = 'none';
    showChat();
}

function showChat() {
    chatSection.style.display = 'block';
}

textarea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        sendMessage(e.target.value);
    }
});

function sendMessage(message) {
    let msg = { user: name, message: message.trim() };
    appendMessage(msg, 'outgoing');
    textarea.value = '';
    scrollToBottom();
    socket.emit('message', msg);
}

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

socket.on('message', (msg) => {
    // Only append the message if it's not from the current user's socket
    if (msg.sender !== socketId) {
        appendMessage(msg, 'incoming');
    }
    scrollToBottom();
});


socket.on('error', (message) => {
    alert(message);
    getRooms();
});

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight;
}
