const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message');
const {generateLocationMessage} = require('./utils/message');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  // socket.emit from admin text welcome to charset
  // socket.broadcast.emit from admin text new user joined
  socket.emit('newMessage', generateMessage('Admin','Welcome to the chat'));

  socket.broadcast.emit('newMessage',generateMessage('Admin','Welcome to the chat'));

  socket.on('createMessage', (message, callback) => {
    console.log('Create message', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback();
  });

socket.on('createLocationMessage' , (coords) => {
  io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
});

  socket.on('disconnect', () => {
    console.log('User was disconnected from server');
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
