require('dotenv').config();

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 5500;

const availableRooms = {}; // To store available rooms
let roomCounter = 0; // Room counter for sequential room naming

// Serve static files (CSS, JS, HTML, etc.) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// No need for this route since express.static will serve index.html
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html')); 
// });

// Socket.io connection event
io.on('connection', (socket) => {
    console.log('New user connected:', socket.id);

    // Register role and manage rooms
    socket.on('register', ({ role, room }) => {
        if (role === 'doctor') {
            roomCounter += 1; // Increment the room counter for each new doctor
            const roomName = `Room-${roomCounter}`; // Use counter for room name
            availableRooms[roomName] = { doctor: socket.id, clients: [] };
            socket.join(roomName);
            socket.emit('message', { user: 'System', message: `You are in ${roomName}` });
        } else if (role === 'client' && room) {
            const roomData = availableRooms[room];
            if (roomData && roomData.clients.length < 1) {
                roomData.clients.push(socket.id); // Add client to room
                socket.join(room);
                io.to(room).emit('message', { user: 'System', message: 'A client has joined the room.' });
                socket.emit('message', { user: 'System', message: `You are connected to ${room}` });
            } else {
                socket.emit('error', 'This room is full. Please select another room.');
            }
        }
    });

    // Handle incoming messages
    socket.on('message', (msg) => {
        const rooms = Array.from(socket.rooms).filter((room) => room !== socket.id);
        if (rooms.length > 0) {
            const room = rooms[0];
            io.to(room).emit('message', { ...msg, sender: socket.id }); // Include sender ID
        }
    });

    // Handle disconnection and room cleanup
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);

        for (const room in availableRooms) {
            const roomData = availableRooms[room];
            if (roomData.doctor === socket.id) {
                delete availableRooms[room];
                io.to(room).emit('message', { user: 'System', message: 'The doctor has left. Room closed.' });
                break;
            } else if (roomData.clients.includes(socket.id)) {
                roomData.clients = roomData.clients.filter((id) => id !== socket.id);
                io.to(room).emit('message', { user: 'System', message: 'The client has left the room.' });
                break;
            }
        }
    });

    socket.on('getRooms', () => {
        const availableRoomNames = Object.keys(availableRooms).filter(
            (room) => availableRooms[room].clients.length < 1
        );
        socket.emit('roomsList', availableRoomNames);
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
